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
					<div className="relative mb-4 hidden aspect-3/2 md:block">
						<GridFrame
							columns={2}
							rows={3}
							className="absolute inset-0 h-full w-full text-(--color-line-dark)"
							strokeWidth={0.5}
						/>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
