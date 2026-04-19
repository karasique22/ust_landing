interface Point {
	x: number
	y: number
}

interface RayLinesProps {
	origin?: Point
	targets: Point[]
	color?: string
	strokeWidth?: number
	className?: string
}

export default function RayLines({
	origin = { x: 0, y: 50 },
	targets,
	color = 'currentColor',
	strokeWidth = 1,
	className
}: RayLinesProps) {
	return (
		<div
			aria-hidden="true"
			className={`pointer-events-none ${className ?? ''}`}
		>
			<svg
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{targets.map((target, i) => (
					<line
						key={i}
						x1={origin.x}
						y1={origin.y}
						x2={target.x}
						y2={target.y}
						vectorEffect="non-scaling-stroke"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
				))}
			</svg>
		</div>
	)
}
