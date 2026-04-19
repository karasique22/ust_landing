import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import NumberedItem from '@/components/common/NumberedItem'
import GridFrame from '@/components/common/GridFrame'
import { employmentRoles } from '@/data/employment-roles'

export default function Employment() {
	return (
		<Section variant="dark">
			<div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
				{/* Left */}
				<SectionHeading size="h2" className="text-[var(--color-fg-dark)]">
					Трудоустройство выпускников
				</SectionHeading>
				{/* Right */}
				<div className="relative">
					<div className="hidden md:block aspect-[3/2] relative mb-4">
						<GridFrame columns={2} rows={3} className="absolute inset-0 w-full h-full text-[var(--color-line-dark)]" strokeWidth={0.5} />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{employmentRoles.map(role => (
							<NumberedItem
								key={role.number}
								number={role.number}
								title={role.title}
								subtitle={role.subtitle}
							/>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}
