import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Tag from '@/components/common/Tag'
import { formatTags } from '@/data/format-tags'
import Image from 'next/image'

export default function LearningFormat() {
	return (
		<Section
			variant="dark"
			className="overflow-hidden"
		>
			<div className="z-10 flex flex-col items-end gap-8">
				<div className="space-y-12">
					<SectionHeading
						size="hero"
						as="h1"
						align="right"
						className="text-start md:text-end"
					>
						Формат обучения:
					</SectionHeading>
					<ul className="flex flex-col items-start gap-4">
						{formatTags.map(tag => (
							<li key={tag}>
								<Tag
									variant="dark"
									size="md"
								>
									{tag}
								</Tag>
							</li>
						))}
					</ul>
				</div>
			</div>

			<Image
				src="/decor/wave-stack.svg"
				alt=""
				aria-hidden="true"
				width={1441}
				height={285}
				className="pointer-events-none inset-x-0 top-0 mt-8 h-auto w-full scale-150 md:scale-115"
			/>
		</Section>
	)
}
