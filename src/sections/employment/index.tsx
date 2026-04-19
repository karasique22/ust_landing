import GridFrame from '@/components/common/GridFrame'
import NumberedItem from '@/components/common/NumberedItem'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { employmentRoles } from '@/data/employment-roles'

export default function Employment() {
	return (
		<Section variant="dark">
			<div className="grid items-start gap-12 md:grid-cols-[1fr_2fr]">
				{/* Left */}
				<SectionHeading
					size="h2"
					className="text-(--color-fg-dark)"
				>
					Трудоустройство выпускников
				</SectionHeading>
				{/* Right */}
				<div className="relative">
					{/* Desktop grid */}
					<div className="hidden md:block relative aspect-3/2">
						<GridFrame
							columns={2}
							rows={3}
							className="absolute inset-0 h-full w-full text-line-dark"
							strokeWidth={0.5}
						/>
						{/* Items in grid cells */}
						<div className="absolute inset-0 grid grid-cols-2 grid-rows-3">
							{/* Row 1 - Empty */}
							<div />
							<div />
							
							{/* Row 2 */}
							<div className="flex items-center p-6">
								<NumberedItem number={1} title={employmentRoles[0].title} subtitle={employmentRoles[0].subtitle} />
							</div>
							<div className="flex items-center p-6">
								<NumberedItem number={2} title={employmentRoles[1].title} subtitle={employmentRoles[1].subtitle} />
							</div>
							
							{/* Row 3 */}
							<div className="flex items-center p-6">
								<NumberedItem number={3} title={employmentRoles[2].title} subtitle={employmentRoles[2].subtitle} />
							</div>
							<div className="flex items-center p-6">
								<NumberedItem number={4} title={employmentRoles[3].title} subtitle={employmentRoles[3].subtitle} />
							</div>
						</div>
					</div>
					
					{/* Mobile version */}
					<div className="md:hidden grid grid-cols-1 gap-6">
						{employmentRoles.map(role => (
							<NumberedItem
								key={role.number}
								number={role.number}
								title={role.title}
								subtitle={role.subtitle}
							/>
						))}
					</div>
					
					{/* Roles 5 and 6 below grid */}
					<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
						<NumberedItem number={5} title={employmentRoles[4].title} subtitle={employmentRoles[4].subtitle} />
						<NumberedItem number={6} title={employmentRoles[5].title} subtitle={employmentRoles[5].subtitle} />
					</div>
				</div>
			</div>
		</Section>
	)
}
