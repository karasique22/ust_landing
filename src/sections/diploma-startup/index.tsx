import RayLines from '@/components/common/RayLines'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { diplomaSteps } from '@/data/diploma-steps'

export default function DiplomaStartup() {
	return (
		<Section variant="dark">
			<div className="grid items-center gap-12 md:grid-cols-2">
				{/* Left */}
				<SectionHeading
					size="h2"
					className="text-[var(--color-fg-dark)]"
				>
					Диплом как стартап
				</SectionHeading>
				{/* Right */}
				<div className="relative">
					{/* RayLines - hidden on mobile */}
					<RayLines
						origin={{ x: 0, y: 50 }}
						targets={[
							{ x: 100, y: 10 },
							{ x: 100, y: 50 },
							{ x: 100, y: 90 }
						]}
						className="absolute inset-0 hidden h-full w-full text-[var(--color-line-dark)] md:block"
						color="currentColor"
					/>
					<ul className="flex flex-col gap-6 md:items-end">
						{diplomaSteps.map(step => (
							<li
								key={step.number}
								className="text-[var(--color-fg-dark)] opacity-80 md:text-right"
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
