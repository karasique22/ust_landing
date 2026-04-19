interface GridFrameProps {
	columns?: number
	rows?: number
	color?: string
	strokeWidth?: number
	className?: string
}

export default function GridFrame({
	columns = 3,
	rows = 1,
	color = 'currentColor',
	strokeWidth = 1,
	className
}: GridFrameProps) {
	const vDividers = Array.from(
		{ length: columns - 1 },
		(_, i) => (100 / columns) * (i + 1)
	)
	const hDividers = Array.from(
		{ length: rows - 1 },
		(_, i) => (100 / rows) * (i + 1)
	)

	return (
		<div
			aria-hidden="true"
			className={`pointer-events-none ${className ?? ''}`}
		>
			<svg
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x={0}
					y={0}
					width={100}
					height={100}
					fill="none"
					stroke={color}
					strokeWidth={strokeWidth}
				/>
				{vDividers.map((x, i) => (
					<line
						key={`v-${i}`}
						x1={x}
						y1={0}
						x2={x}
						y2={100}
						stroke={color}
						strokeWidth={strokeWidth}
					/>
				))}
				{hDividers.map((y, i) => (
					<line
						key={`h-${i}`}
						x1={0}
						y1={y}
						x2={100}
						y2={y}
						stroke={color}
						strokeWidth={strokeWidth}
					/>
				))}
			</svg>
		</div>
	)
}
