import Section from '@/components/common/Section'
import { programDescription } from '@/data/program-description'

export default function ProgramDescription() {
	return (
		<Section variant="dark">
			<div className="border-t border-[var(--color-line-dark)] border-b py-12">
				<div className="grid md:grid-cols-2 gap-8 md:gap-16">
					{programDescription.map((text, i) => (
						<p key={i} className="text-[var(--text-body)] opacity-80 leading-relaxed">
							{text}
						</p>
					))}
				</div>
			</div>
		</Section>
	)
}
