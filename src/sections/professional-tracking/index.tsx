import Image from 'next/image'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Tag from '@/components/common/Tag'
import RayLines from '@/components/common/RayLines'
import { trackingIntro, trackingTags } from '@/data/tracking-tags'

export default function ProfessionalTracking() {
	return (
		<Section variant="light">
			<div className="grid md:grid-cols-2 gap-12 items-start">
				{/* Left */}
				<div className="flex flex-col gap-6">
					<Image src="/icons/logo-kosygin.svg" alt="Университет Косыгина" width={48} height={48} />
					<SectionHeading size="h2">Профессиональный трекинг и акселерация</SectionHeading>
					<p className="text-[var(--text-body)] opacity-60 leading-relaxed max-w-sm">
						Программа обеспечивает сопровождение студентов на всех этапах создания образовательного продукта — от идеи до выхода на рынок.
					</p>
				</div>
				{/* Right */}
				<div className="relative">
					<RayLines
						origin={{ x: 0, y: 50 }}
						targets={[{ x: 100, y: 10 }, { x: 100, y: 37 }, { x: 100, y: 63 }, { x: 100, y: 90 }]}
						className="absolute inset-0 w-full h-full hidden md:block text-[var(--color-line)]"
						color="currentColor"
					/>
					<div className="flex flex-col gap-4">
						<p className="text-sm font-medium opacity-60 mb-2">{trackingIntro}</p>
						{trackingTags.map(tag => (
							<Tag key={tag} variant="light" size="sm">{tag}</Tag>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}
