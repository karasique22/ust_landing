import NumberedItem from '@/components/common/NumberedItem'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { employmentRoles } from '@/data/employment-roles'
import { cn } from '@/lib/utils'

export default function Employment() {
	const getRoleByNumber = (number: number) => {
		return employmentRoles.find(role => role.number === number)
	}

	return (
		<Section
			innerClassName="mx-0 !px-0 max-w-none"
			className="py-0!"
			variant="dark"
		>
			<div className="relative">
				<div className="hidden md:block">
					<div
						className="grid gap-0"
						style={{
							gridTemplateColumns: '1fr 1fr',
							gridTemplateRows: 'repeat(6, 1fr)'
						}}
					>
						{/* Header (left, half height) */}
						<div
							style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}
							className="relative flex border-r border-b p-12"
						>
							<SectionHeading
								size="hero"
								as="h1"
								className="text-left"
							>
								Трудоустройство выпускников
							</SectionHeading>
						</div>

						{/* Role 1 (right, spans rows 1-2) */}
						<div
							style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}
							className="flex border-t border-b p-12"
						>
							{getRoleByNumber(1) && (
								<NumberedItem
									number={1}
									title={getRoleByNumber(1)!.title}
									subtitle={getRoleByNumber(1)!.subtitle}
								/>
							)}
						</div>

						{/* Role 2 (left, spans rows 2-3) */}
						<div
							style={{ gridColumn: '1 / 2', gridRow: '2 / 4' }}
							className="relative flex border-r border-b p-12"
						>
							{getRoleByNumber(2) && (
								<NumberedItem
									number={2}
									title={getRoleByNumber(2)!.title}
									subtitle={getRoleByNumber(2)!.subtitle}
									numberRight
								/>
							)}
						</div>

						{/* Role 3 (right, spans rows 3-4) */}
						<div
							style={{ gridColumn: '2 / 3', gridRow: '3 / 5' }}
							className="flex border-b p-12"
						>
							{getRoleByNumber(3) && (
								<NumberedItem
									number={3}
									title={getRoleByNumber(3)!.title}
									subtitle={getRoleByNumber(3)!.subtitle}
								/>
							)}
						</div>

						{/* Role 4 (left, spans rows 4-5) */}
						<div
							style={{ gridColumn: '1 / 2', gridRow: '4 / 6' }}
							className="relative flex border-r border-b p-12"
						>
							{getRoleByNumber(4) && (
								<NumberedItem
									number={4}
									title={getRoleByNumber(4)!.title}
									subtitle={getRoleByNumber(4)!.subtitle}
									numberRight
								/>
							)}
						</div>

						{/* Role 5 (right, spans rows 5-6) */}
						<div
							style={{ gridColumn: '2 / 3', gridRow: '5 / 7' }}
							className="flex p-12"
						>
							{getRoleByNumber(5) && (
								<NumberedItem
									number={5}
									title={getRoleByNumber(5)!.title}
									subtitle={getRoleByNumber(5)!.subtitle}
								/>
							)}
						</div>

						{/* Role 6 (left, half height at bottom) */}
						<div
							style={{ gridColumn: '1 / 2', gridRow: '6 / 7' }}
							className="relative flex border-r p-12"
						>
							{getRoleByNumber(6) && (
								<NumberedItem
									number={6}
									title={getRoleByNumber(6)!.title}
									subtitle={getRoleByNumber(6)!.subtitle}
									numberRight
								/>
							)}
						</div>
					</div>
				</div>

				<div className="md:hidden">
					<SectionHeading size="hero" as="h1" className="border-b p-6">
						Трудоустройство выпускников
					</SectionHeading>
					{employmentRoles.map((role, i) => (
						<div key={role.number} className={cn('flex p-6', i < employmentRoles.length - 1 && 'border-b')}>
							<NumberedItem
								number={role.number}
								title={role.title}
								subtitle={role.subtitle}
							/>
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}
