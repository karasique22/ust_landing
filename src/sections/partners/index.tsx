import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { partners } from '@/data/partners'
import Image from 'next/image'

export default function Partners() {
	return (
		<Section variant="light">
			<SectionHeading
				as="h1"
				size="hero"
				align="center"
				className="mb-12"
			>
				Генеральные партнёры программы:
			</SectionHeading>
			<div className="flex flex-wrap items-center justify-center gap-12">
				{partners.map(partner => (
					<div
						key={partner.id}
						className="relative h-20 w-auto opacity-80 grayscale transition-opacity hover:opacity-100"
					>
						<Image
							src={partner.logo}
							alt={partner.name}
							width={230}
							height={110}
							className="h-full w-auto object-contain"
						/>
					</div>
				))}
			</div>
		</Section>
	)
}
