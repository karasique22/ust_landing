import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { diplomaSteps } from '@/data/diploma-steps'

export default function DiplomaStartup() {
	const stepsCount = diplomaSteps.length
	const lineHeight = 100 / stepsCount

	return (
		<Section variant="dark">
			<div className="grid items-center gap-12 md:grid-cols-2">
				{/* Left */}
				<SectionHeading
					size="h2"
					className="text-(--color-fg-dark)"
				>
					Диплом как стартап
				</SectionHeading>
				{/* Right */}
				<div className="relative">
					{/* Horizontal lines with dots */}
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						className="absolute inset-0 hidden h-full w-full text-(--color-line-dark) md:block"
						aria-hidden="true"
					>
						{diplomaSteps.map((_, i) => {
							const yPosition = lineHeight / 2 + i * lineHeight
							return (
								<g key={i}>
									<line
										x1="0"
										y1={yPosition}
										x2="85"
										y2={yPosition}
										stroke="currentColor"
										strokeWidth="0.5"
										vectorEffect="non-scaling-stroke"
									/>
									<circle
										cx="90"
										cy={yPosition}
										r="2.5"
										fill="currentColor"
									/>
								</g>
							)
						})}
					</svg>
					<ul className="flex flex-col gap-12 md:items-end">
						{diplomaSteps.map(step => (
							<li
								key={step.number}
								className="max-w-xs text-sm leading-relaxed text-(--color-fg-dark) opacity-80 md:text-right"
							>
								{step.title}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	)
}
