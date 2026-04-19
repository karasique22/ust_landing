import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Tag from '@/components/common/Tag'
import WaveStack from '@/components/common/WaveStack'
import { formatTags } from '@/data/format-tags'

export default function LearningFormat() {
	return (
		<Section variant="dark" className="overflow-hidden">
			<WaveStack className="absolute bottom-0 left-0 right-0 h-48 hidden md:block text-white" color="currentColor" strokeWidth={0.5} count={4} />
			<div className="relative z-10 flex flex-col items-center gap-8">
				<SectionHeading size="h2" align="center" className="text-[var(--color-fg-dark)]">
					Формат обучения:
				</SectionHeading>
				<ul className="flex flex-col items-center gap-4">
					{formatTags.map(tag => (
						<li key={tag}><Tag variant="dark" size="md">{tag}</Tag></li>
					))}
				</ul>
			</div>
		</Section>
	)
}
