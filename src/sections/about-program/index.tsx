import NumberedItem from '@/components/common/NumberedItem'
import Section from '@/components/common/Section'
import { aboutIntroText, aboutPoints } from '@/data/about-points'

export default function AboutProgram() {
	return (
		<Section variant="light">
			{/* Mobile: stacked order (black header first). Desktop: 3x2 grid */}
			<div className="relative grid gap-0 border border-black font-semibold md:grid-cols-[1fr_1fr_2fr] md:grid-rows-[minmax(320px,auto)_auto]">
				{/* Black "О программе" — shown FIRST on mobile, sits top-right on desktop */}
				<div className="relative z-10 order-1 self-end bg-(--color-surface-dark) p-8 md:order-0 md:col-start-3 md:row-start-1 md:flex md:h-1/2 md:items-center md:justify-center md:border-b md:border-black">
					<span className="text-h2 font-semibold text-(--color-fg-dark)">
						О программе
					</span>
				</div>

				{/* Intro text — top-left cell on desktop */}
				<div className="relative z-10 order-2 border-t border-black p-6 md:order-0 md:col-start-1 md:row-start-1 md:border-t-0 md:border-r md:border-b md:p-8">
					<p className="text-h3 leading-none font-semibold">{aboutIntroText}</p>
				</div>

				{/* Middle cell (empty frame) */}
				<div className="order-3 hidden md:order-0 md:col-start-2 md:row-start-1 md:block md:border-r md:border-b md:border-black" />

				{/* Diagonal spanning the entire top row */}
				<div
					aria-hidden="true"
					className="pointer-events-none relative order-0 hidden md:col-span-3 md:col-start-1 md:row-start-1 md:block"
				>
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						className="absolute inset-0 h-full w-full text-(--color-fg)"
					>
						<line
							x1={0}
							y1={100}
							x2={100}
							y2={0}
							stroke="currentColor"
							strokeWidth={1}
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
				</div>

				{/* Bottom row numbered items */}
				<div className="order-4 border-t border-black p-6 font-semibold md:order-0 md:col-start-1 md:row-start-2 md:border-t-0 md:border-r md:p-8">
					<NumberedItem
						number={aboutPoints[0].number}
						title={aboutPoints[0].text}
					/>
				</div>
				<div className="order-5 border-t border-black p-6 font-semibold md:order-0 md:col-start-2 md:row-start-2 md:border-t-0 md:border-r md:p-8">
					<NumberedItem
						number={aboutPoints[1].number}
						title={aboutPoints[1].text}
					/>
				</div>
				<div className="order-6 border-t border-black p-6 font-semibold md:order-0 md:col-start-3 md:row-start-2 md:border-t-0 md:p-8">
					<NumberedItem
						number={aboutPoints[2].number}
						title={aboutPoints[2].text}
					/>
				</div>
			</div>
		</Section>
	)
}
