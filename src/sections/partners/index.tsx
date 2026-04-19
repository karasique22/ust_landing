import Image from 'next/image'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { partners } from '@/data/partners'

export default function Partners() {
	return (
		<Section variant="light">
			<SectionHeading size="h2" align="center" className="mb-12">
				Генеральные партнёры программы:
			</SectionHeading>
			<div className="flex flex-wrap justify-center items-center gap-12">
				{partners.map(partner => (
					<div key={partner.id} className="h-12 relative">
						<Image
							src={partner.logo}
							alt={partner.name}
							width={120}
							height={48}
							className="h-12 w-auto object-contain"
						/>
					</div>
				))}
			</div>
		</Section>
	)
}
