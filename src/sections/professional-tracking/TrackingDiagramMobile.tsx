import { trackingIntro } from '@/data/tracking-tags'
import { cn } from '@/lib/utils'

const LABEL_FILL = 'black'
const LINE_STROKE = 'black'
const LINE_OPACITY = 1
const DOT_OPACITY = 1

const PILL = { x: 40, y: 0, width: 310, height: 52, rx: 26 }
const PILL_CENTER = { x: 195, y: 28 }
const SPINE_X = 20
const BRANCH_END_X = 130
const LABEL_X = 144
const LABEL_LINE_H = 17

const TAGS = [
	{
		branchY: 110,
		labelTopY: 97,
		lines: [
			'возможность пройти',
			'акселерацию для запуска',
			'собственного стартапа'
		]
	},
	{
		branchY: 195,
		labelTopY: 182,
		lines: ['сопровождение при', 'подготовке заявок', 'на финансирование']
	},
	{
		branchY: 285,
		labelTopY: 272,
		lines: ['профессиональный', 'трекинг команд']
	},
	{
		branchY: 375,
		labelTopY: 362,
		lines: ['помощь в разработке', 'и доработке продукта']
	}
] as const

export default function TrackingDiagramMobile({
	className
}: {
	className?: string
}) {
	return (
		<svg
			viewBox="0 0 390 430"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('overflow-visible', className)}
			aria-hidden="true"
		>
			<rect
				x={PILL.x}
				y={PILL.y}
				width={PILL.width}
				height={PILL.height}
				rx={PILL.rx}
				fill="white"
				stroke="black"
				strokeWidth="1"
			/>
			<text
				x={PILL_CENTER.x}
				y={PILL_CENTER.y}
				fontSize="15"
				fontWeight="600"
				fill="black"
				textAnchor="middle"
				dominantBaseline="middle"
			>
				{trackingIntro}
			</text>

			<line
				x1={PILL.x + 5}
				y1={PILL.y + PILL.height - 10}
				x2={SPINE_X}
				y2={PILL.y + PILL.height + 28}
				stroke={LINE_STROKE}
				strokeWidth="0.85"
				opacity={LINE_OPACITY}
			/>
			<line
				x1={SPINE_X}
				y1={PILL.y + PILL.height + 28}
				x2={SPINE_X}
				y2={TAGS[TAGS.length - 1].branchY}
				stroke={LINE_STROKE}
				strokeWidth="0.85"
				opacity={LINE_OPACITY}
			/>

			{TAGS.map(tag => (
				<line
					key={`branch-${tag.branchY}`}
					x1={SPINE_X}
					y1={tag.branchY}
					x2={BRANCH_END_X}
					y2={tag.branchY}
					stroke={LINE_STROKE}
					strokeWidth="0.85"
					opacity={LINE_OPACITY}
				/>
			))}

			{TAGS.map(tag => (
				<circle
					key={`dot-${tag.branchY}`}
					cx={BRANCH_END_X}
					cy={tag.branchY}
					r="3"
					fill="black"
					opacity={DOT_OPACITY}
				/>
			))}

			{TAGS.map(tag =>
				tag.lines.map((line, li) => (
					<text
						key={`${tag.branchY}-${li}`}
						x={LABEL_X}
						y={tag.labelTopY + li * LABEL_LINE_H}
						fontSize="15"
						fontWeight={600}
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
