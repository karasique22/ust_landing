import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import RingsEllipse from '@/components/common/RingsEllipse'
import { TeachersCarousel } from './TeachersCarousel'

export default function Teachers() {
	return (
		<Section variant="dark" className="overflow-hidden">
			{/* RingsEllipse background */}
			<RingsEllipse className="absolute inset-0 w-full h-full text-white hidden md:block" color="currentColor" strokeWidth={0.5} count={6} />
			<div className="relative z-10">
				<SectionHeading size="h2" align="center" className="text-[var(--color-fg-dark)] mb-12">
					Обучение вместе с практиками рынка
				</SectionHeading>
				<TeachersCarousel />
			</div>
		</Section>
	)
}
