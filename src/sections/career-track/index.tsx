import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Tag from '@/components/common/Tag'
import NumberedItem from '@/components/common/NumberedItem'
import { specialties } from '@/data/specialties'
import { careerSteps } from '@/data/career-steps'
import { X2Display } from './X2Display'

export default function CareerTrack() {
	return (
		<Section id="specialties" variant="light">
			{/* Top two-column */}
			<div className="grid md:grid-cols-2 gap-8 items-start mb-8">
				<SectionHeading size="h2">Расширенная карьерная траектория</SectionHeading>
				<div className="flex flex-col gap-4">
					<Tag variant="light">Один диплом · Две квалификации</Tag>
					<ul className="flex flex-col gap-2 mt-2">
						{specialties.map(s => (
							<li key={s.code} className="text-sm">
								<span className="opacity-60">{s.code}</span>{' '}
								<span className="font-medium">{s.title}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* X2 display */}
			<X2Display />
			{/* Bottom: career steps */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-8 mt-8">
				{careerSteps.map(step => (
					<NumberedItem key={step.number} number={step.number} title={step.title} />
				))}
			</div>
		</Section>
	)
}
