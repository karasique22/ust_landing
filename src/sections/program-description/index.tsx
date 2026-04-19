import Section from '@/components/common/Section'
import { programDescription } from '@/data/program-description'

export default function ProgramDescription() {
	return (
		<Section variant="dark">
			<div className="grid gap-4 md:max-w-6/12">
				{programDescription.map((text, i) => (
					<p
						key={i}
						className="text-base leading-tight font-medium md:text-xl"
					>
						{text}
					</p>
				))}
			</div>
		</Section>
	)
}
