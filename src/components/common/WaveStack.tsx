interface WaveStackProps {
	count?: number
	color?: string
	strokeWidth?: number
	className?: string
}

export default function WaveStack({
	count = 5,
	color = 'currentColor',
	strokeWidth = 1,
	className
}: WaveStackProps) {
	const waves = Array.from({ length: count }, (_, i) => {
		const y = (i + 1) * (400 / (count + 1))
		const center = (count - 1) / 2
		const distFromCenter = Math.abs(i - center) / center
		const widthFactor = 1.0 - distFromCenter * 0.3
		const xStart = (1000 * (1 - widthFactor)) / 2
		const xEnd = 1000 - xStart
		const midX = (xStart + xEnd) / 2
		const amplitude = i % 2 === 0 ? 40 : -40
		const opacity = 0.3 - distFromCenter * 0.2

		return {
			d: `M ${xStart},${y} Q ${midX},${y + amplitude} ${xEnd},${y}`,
			opacity: Math.max(0.1, opacity)
		}
	})

	return (
		<div
			aria-hidden="true"
			className={`pointer-events-none ${className ?? ''}`}
		>
			<svg
				viewBox="0 0 1000 400"
				xmlns="http://www.w3.org/2000/svg"
			>
				{waves.map(({ d, opacity }, i) => (
					<path
						key={i}
						d={d}
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
