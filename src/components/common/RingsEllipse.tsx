interface RingsEllipseProps {
	count?: number
	color?: string
	strokeWidth?: number
	className?: string
}

export default function RingsEllipse({
	count = 6,
	color = 'currentColor',
	strokeWidth = 1,
	className
}: RingsEllipseProps) {
	const ellipses = Array.from({ length: count }, (_, i) => {
		const rx = 80 + i * 100
		const ry = 60 + i * 80
		const opacity = Math.max(0.03, 0.4 - i * 0.06)
		return { rx, ry, opacity }
	})

	return (
		<div
			aria-hidden="true"
			className={`pointer-events-none ${className ?? ''}`}
		>
			<svg
				viewBox="0 0 1000 600"
				xmlns="http://www.w3.org/2000/svg"
			>
				{ellipses.map(({ rx, ry, opacity }, i) => (
					<ellipse
						key={i}
						cx={500}
						cy={300}
						rx={rx}
						ry={ry}
						fill="none"
						stroke={color}
						strokeWidth={strokeWidth}
						opacity={opacity}
					/>
				))}
			</svg>
		</div>
	)
}
