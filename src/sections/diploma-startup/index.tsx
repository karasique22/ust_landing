import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { diplomaSteps } from '@/data/diploma-steps'

// SVG viewBox: 1396×628, focal (415.945, 471.656)
// Line endpoints as % of SVG:
//   line 1 → (1406/1396, 0.45/628) = (100.7%, 0.07%) → top right
//   line 2 → (1421/1396, 274.5/628) = (101.8%, 43.7%) → mid right
//   line 3 → (1421/1396, 471.7/628) = (101.8%, 75.1%) → horizontal right
const TEXT_Y = ['0%', '43.7%', '75.1%']

export default function DiplomaStartup() {
	return (
		<Section variant="dark">
			<div className="grid items-center gap-12 md:grid-cols-2">
				{/* Left – heading */}
				<SectionHeading
					size="h2"
					className="text-(--color-fg-dark)"
				>
					Диплом как стартап
				</SectionHeading>

				{/* Right – mobile list */}
				<ul className="flex flex-col gap-4 md:hidden">
					{diplomaSteps.map(step => (
						<li
							key={step.number}
							className="flex items-start gap-3 text-sm leading-relaxed text-(--color-fg-dark) opacity-80"
						>
							<span className="mt-2 h-px w-5 shrink-0 bg-current opacity-50" />
							{step.title}
						</li>
					))}
				</ul>

				{/* Right – desktop ray-lines + text */}
				<div className="relative hidden md:block">
					{/* SVG sets the container height */}
					<img
						src="/decor/ray-lines-diploma.svg"
						alt=""
						aria-hidden="true"
						className="w-full"
					/>

					{diplomaSteps.map((step, i) => (
						<div
							key={step.number}
							className="absolute right-0 w-52 -translate-y-1/2 text-right text-sm leading-relaxed text-(--color-fg-dark) opacity-80"
							style={{ top: TEXT_Y[i] }}
						>
							{step.title}
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}
