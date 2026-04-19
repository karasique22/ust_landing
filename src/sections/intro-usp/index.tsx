import Section from '@/components/common/Section'
import Tag from '@/components/common/Tag'
import { uspTags } from '@/data/usp-tags'

export default function IntroUsp() {
	return (
		<Section variant="light">
			<div className="border-t border-[var(--color-line)] pt-8 md:pt-12">
				<div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
					{/* Left */}
					<h2 className="text-[var(--text-h2)] font-semibold tracking-[-0.02em] leading-[1.05]">
						Создавайте и масштабируйте цифровые образовательно-технические продукты: от идеи до запуска
					</h2>
					{/* Right */}
					<ul className="flex flex-col gap-3 md:items-end">
						{uspTags.map(tag => (
							<li key={tag}>
								<Tag variant="light">{tag}</Tag>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	)
}
