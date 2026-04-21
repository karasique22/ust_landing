import { cn } from '@/lib/utils'

const LABEL_FILL = 'rgb(255,255,255)'
const LINE_STROKE = 'white'
const LINE_OPACITY = 1
const DOT_OPACITY = 1

const STEPS = [
	{ y: 240, labelTopY: 229, lines: ['Командная работа', 'с первых месяцев'] },
	{
		y: 390,
		labelTopY: 379,
		lines: ['Разработка собственного', 'образовательного продукта']
	},
	{ y: 530, labelTopY: 524, lines: ['Вывод на рынок'] }
] as const

const SPINE_X = 170
const SPINE_LEFT_X = SPINE_X - 150
const BRANCH_END_X = 180
const LABEL_X = 194
const LABEL_LINE_H = 18

export default function DiplomaDiagramMobile({
	className
}: {
	className?: string
}) {
	return (
		<svg
			viewBox="0 120 390 450"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('overflow-visible', className)}
			aria-hidden="true"
		>
			<ellipse
				cx={SPINE_X}
				cy="142"
				rx="150"
				ry="10"
				fill="white"
				stroke="white"
				strokeWidth="0.5"
			/>

			<line
				x1={SPINE_LEFT_X}
				y1="142"
				x2={SPINE_LEFT_X}
				y2="530"
				stroke={LINE_STROKE}
				strokeWidth="0.85"
				opacity={LINE_OPACITY}
				strokeLinejoin="round"
			/>

			{STEPS.map(step => (
				<line
					key={`branch-${step.y}`}
					x1={SPINE_LEFT_X}
					y1={step.y}
					x2={BRANCH_END_X}
					y2={step.y}
					stroke={LINE_STROKE}
					strokeWidth="0.85"
					opacity={LINE_OPACITY}
				/>
			))}

			{STEPS.map(step => (
				<circle
					key={`dot-${step.y}`}
					cx={BRANCH_END_X}
					cy={step.y}
					r="3"
					fill="white"
					opacity={DOT_OPACITY}
				/>
			))}

			{STEPS.map(step =>
				step.lines.map((line, li) => (
					<text
						key={`${step.y}-${li}`}
						x={LABEL_X}
						y={step.labelTopY + li * LABEL_LINE_H}
						fontSize="14"
						fill={LABEL_FILL}
						dominantBaseline="hanging"
					>
						{line}
					</text>
				))
			)}
		</svg>
	)
}
