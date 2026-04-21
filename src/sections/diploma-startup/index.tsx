import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'

import DiplomaDiagramDesktop from './DiplomaDiagramDesktop'
import DiplomaDiagramMobile from './DiplomaDiagramMobile'

export default function DiplomaStartup() {
	return (
		<Section variant="dark">
			{/* Desktop: diagram fills container, heading overlays bottom-left */}
			<div className="relative hidden aspect-1000/520 md:block">
				<DiplomaDiagramDesktop className="absolute inset-0 h-full w-full" />
				<SectionHeading
					as="h1"
					size="hero"
					className="absolute bottom-65 left-0"
				>
					Диплом
					<br />
					как стартап
				</SectionHeading>
			</div>

			{/* Mobile: heading above diagram */}
			<div className="flex flex-col gap-8 md:hidden">
				<SectionHeading
					as="h1"
					size="hero"
				>
					Диплом
					<br />
					как стартап
				</SectionHeading>
				<DiplomaDiagramMobile className="w-full" />
			</div>
		</Section>
	)
}
