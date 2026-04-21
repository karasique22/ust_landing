import { cn } from '@/lib/utils'

const LABEL_FILL = 'rgb(255,255,255)'
const LINE_STROKE = 'white'
const LINE_OPACITY = 1

const ORIGIN = { x: 310, y: 340 } as const

const STEPS = [
	{
		target: { x: 740, y: 52 },
		labelTopY: 130,
		lines: ['Командная работа', 'с первых месяцев']
	},
	{
		target: { x: 748, y: 240 },
		labelTopY: 256,
		lines: ['Разработка собственного', 'образовательного продукта']
	},
	{
		target: { x: 748, y: 394 },
		labelTopY: 375,
		lines: ['Вывод на рынок']
	},
	{
		target: { x: 748, y: 494 },
		labelTopY: 381,
		lines: ['']
	}
] as const

const LABEL_X = 576
const LABEL_LINE_H = 21

// 🔥 продление луча
function extendRay(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	length: number = 800
) {
	const dx = x2 - x1
	const dy = y2 - y1
	const dist = Math.sqrt(dx * dx + dy * dy)

	const nx = dx / dist
	const ny = dy / dist

	return {
		x: x2 + nx * length,
		y: y2 + ny * length
	}
}

// 🔥 угол луча
function getAngle(x1: number, y1: number, x2: number, y2: number) {
	return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI
}

// 🔥 чтобы текст не переворачивался
function normalizeAngle(angle: number) {
	return angle > 90 || angle < -90 ? angle + 180 : angle
}

// 🔥 смещение перпендикулярно лучу (вверх от линии)
function getNormalOffset(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	offset: number
) {
	const dx = x2 - x1
	const dy = y2 - y1
	const dist = Math.sqrt(dx * dx + dy * dy)

	const nx = -dy / dist
	const ny = dx / dist

	return {
		x: nx * offset,
		y: ny * offset
	}
}

export default function DiplomaDiagramDesktop({
	className
}: {
	className?: string
}) {
	return (
		<svg
			viewBox="0 0 800 520"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('overflow-visible', className)}
			aria-hidden="true"
		>
			{/* тень */}
			<ellipse
				cx="120"
				cy="340"
				rx="200"
				ry="10"
				fill="white"
				stroke="white"
				strokeWidth="0.5"
			/>

			{/* 🔥 ЛУЧИ */}
			{STEPS.map(step => {
				const end = extendRay(ORIGIN.x, ORIGIN.y, step.target.x, step.target.y)

				return (
					<line
						key={`ray-${step.target.x}-${step.target.y}`}
						x1={ORIGIN.x}
						y1={ORIGIN.y}
						x2={end.x}
						y2={end.y}
						stroke={LINE_STROKE}
						strokeWidth="1.5"
						opacity={LINE_OPACITY}
					/>
				)
			})}

			{/* 🔥 ТЕКСТ */}
			{STEPS.map(step => {
				const rawAngle = getAngle(
					ORIGIN.x,
					ORIGIN.y,
					step.target.x,
					step.target.y
				)

				const angle = normalizeAngle(rawAngle)

				const normal = getNormalOffset(
					ORIGIN.x,
					ORIGIN.y,
					step.target.x,
					step.target.y,
					-16 // 👈 регулируй отступ от линии
				)

				return step.lines.map((line, li) => {
					const baseX = LABEL_X
					const baseY = step.labelTopY + li * LABEL_LINE_H

					const x = baseX + normal.x
					const y = baseY + normal.y

					return (
						<text
							key={`${step.target.y}-${li}`}
							x={x}
							y={y}
							fontSize="18"
							fill={LABEL_FILL}
							dominantBaseline="middle"
							transform={`rotate(${angle}, ${x}, ${y})`}
						>
							{line}
						</text>
					)
				})
			})}
		</svg>
	)
}
