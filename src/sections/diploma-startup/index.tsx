import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import RayLines from '@/components/common/RayLines'
import { diplomaSteps } from '@/data/diploma-steps'

export default function DiplomaStartup() {
	return (
		<Section variant="dark">
			<div className="grid md:grid-cols-2 gap-12 items-center">
				{/* Left */}
				<SectionHeading size="h2" className="text-[var(--color-fg-dark)]">
					Диплом как стартап
				</SectionHeading>
				{/* Right */}
				<div className="relative">
					{/* RayLines - hidden on mobile */}
					<RayLines
						origin={{ x: 0, y: 50 }}
						targets={[{ x: 100, y: 10 }, { x: 100, y: 50 }, { x: 100, y: 90 }]}
						className="absolute inset-0 w-full h-full hidden md:block text-[var(--color-line-dark)]"
						color="currentColor"
					/>
					<ul className="flex flex-col gap-6 md:items-end">
						{diplomaSteps.map(step => (
							<li key={step.number} className="md:text-right text-[var(--color-fg-dark)] opacity-80">
								{step.title}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	)
}
