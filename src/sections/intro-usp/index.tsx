import Section from '@/components/common/Section'
import Tag from '@/components/common/Tag'
import { uspTags } from '@/data/usp-tags'
import Image from 'next/image'

export default function IntroUsp() {
	return (
		<Section variant="light">
			<div className="grid items-start gap-8 px-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-16">
				{/* Left */}
				<div>
					<h2 className="text-h2 leading-[1.05] font-semibold tracking-[-0.02em]">
						Создавайте и масштабируйте цифровые образовательно-технические
						продукты: от идеи до запуска
					</h2>
					<Image
						src="/decor/intro-usp-overline.svg"
						alt=""
						aria-hidden="true"
						width={675}
						height={20}
						className="mt-8 h-auto w-full max-w-168.75"
					/>
				</div>
				{/* Right */}
				<ul className="flex flex-col gap-3 text-left font-semibold md:items-end">
					{uspTags.map(tag => (
						<li key={tag}>
							<Tag variant="dark">{tag}</Tag>
						</li>
					))}
				</ul>
			</div>
		</Section>
	)
}
