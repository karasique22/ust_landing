import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Tag from '@/components/common/Tag'
import Image from 'next/image'
import { formatTags } from '@/data/format-tags'

export default function LearningFormat() {
	return (
		<Section variant="dark" className="overflow-hidden">
			<Image
				src="/decor/wave-stack.svg"
				alt=""
				aria-hidden="true"
				width={1441}
				height={285}
				className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-auto w-full md:block"
			/>
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
