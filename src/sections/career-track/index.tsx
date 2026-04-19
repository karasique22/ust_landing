import NumberedItem from '@/components/common/NumberedItem'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Tag from '@/components/common/Tag'
import { careerSteps } from '@/data/career-steps'
import { specialties } from '@/data/specialties'

import { X2Display } from './X2Display'

export default function CareerTrack() {
	return (
		<Section
			id="specialties"
			variant="light"
		>
			{/* Top two-column */}
			<div className="mb-8 grid items-start gap-8 md:grid-cols-2">
				<SectionHeading
					as="h1"
					size="hero"
				>
					Расширенная карьерная траектория
				</SectionHeading>
				<div className="flex h-full flex-col justify-around gap-4">
					<Tag
						className="self-start font-semibold"
						variant="light"
					>
						Один диплом - Две квалификации
					</Tag>
					<ul className="mt-2 flex flex-col gap-2">
						{specialties.map(s => (
							<li
								key={s.code}
								className="text-2xl"
							>
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
			<div className="border-line mt-8 grid w-8/12 grid-cols-1 gap-12 ml-auto pt-8 md:grid-cols-3">
				{careerSteps.map(step => (
					<NumberedItem
						className="gap-3"
						key={step.number}
						number={step.number}
						title={step.title}
					/>
				))}
			</div>
		</Section>
	)
}
