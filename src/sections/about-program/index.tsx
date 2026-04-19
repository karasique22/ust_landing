import Section from '@/components/common/Section'
import NumberedItem from '@/components/common/NumberedItem'
import GridFrame from '@/components/common/GridFrame'
import { aboutIntroText, aboutPoints } from '@/data/about-points'

export default function AboutProgram() {
	return (
		<Section id="about-program" variant="light">
			{/* Top: two-column */}
			<div className="grid md:grid-cols-[1fr_auto] gap-8 items-start mb-12 md:mb-16">
				{/* Left: intro text */}
				<p className="text-[var(--text-h3)] leading-snug max-w-xl">{aboutIntroText}</p>
				{/* Right: dark badge */}
				<div className="bg-[var(--color-surface-dark)] text-[var(--color-fg-dark)] px-8 py-6 shrink-0">
					<span className="text-[var(--text-h2)] font-semibold">О программе</span>
				</div>
			</div>
			{/* Bottom: numbered items with GridFrame */}
			<div className="relative aspect-[3/1] hidden md:block">
				<GridFrame
					columns={3}
					className="absolute inset-0 w-full h-full text-[var(--color-fg)]"
					strokeWidth={0.5}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
				{aboutPoints.map(point => (
					<NumberedItem key={point.number} number={point.number} title={point.text} />
				))}
			</div>
		</Section>
	)
}
