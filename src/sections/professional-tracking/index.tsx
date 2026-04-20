import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { trackingIntro, trackingTags } from '@/data/tracking-tags'
import Image from 'next/image'

const PILL_X = 50
const PILL_Y = 50

const tagConfig = [
	{
		svgX: 80,
		svgY: 5,
		css: { top: '0%', right: '0%', width: '38%' },
		align: 'text-right'
	},
	{
		svgX: 8,
		svgY: 33,
		css: { top: '28%', left: '0%', width: '42%' },
		align: 'text-left'
	},
	{
		svgX: 78,
		svgY: 86,
		css: { top: '80%', right: '0%', width: '35%' },
		align: 'text-right'
	},
	{
		svgX: 5,
		svgY: 78,
		css: { top: '68%', left: '0%', width: '40%' },
		align: 'text-left'
	}
]

export default function ProfessionalTracking() {
	return (
		<Section variant="light">
			{/* Logo */}
			<div className="mb-10 flex items-center gap-3">
				<Image
					src="/icons/logo-rgu-dark.svg"
					alt=""
					width={131}
					height={59}
					aria-hidden="true"
				/>
			</div>

			<div className="grid items-start gap-12 md:grid-cols-2">
				{/* Left */}
				<div className="flex flex-col gap-6">
					<SectionHeading size="h2">
						Профессиональный трекинг и акселерация
					</SectionHeading>
					<p className="max-w-sm leading-relaxed text-(--text-body) opacity-60">
						Университет выступает партнером каждого студента и выпускника
						программы.
					</p>
					<p className="max-w-sm leading-relaxed text-(--text-body) opacity-60">
						Команды получают экспертное сопровождение на всех ключевых этапах
						работы над продуктом.
					</p>

					{/* Mobile */}
					<div className="mt-4 md:hidden">
						<p className="mb-4 text-sm font-medium opacity-80">
							{trackingIntro}
						</p>
						<div className="flex flex-col gap-3">
							{trackingTags.map((tag, i) => (
								<div
									key={i}
									className="flex items-start gap-3"
								>
									<div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
									<span className="text-sm leading-relaxed opacity-60">
										{tag}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Right – desktop spider diagram */}
				<div className="relative hidden min-h-105 md:block">
					{/* SVG lines from pill center to each tag */}
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						className="absolute inset-0 h-full w-full"
						aria-hidden="true"
					>
						{trackingTags.map((_, i) => (
							<line
								key={i}
								x1={PILL_X}
								y1={PILL_Y}
								x2={tagConfig[i].svgX}
								y2={tagConfig[i].svgY}
								stroke="black"
								strokeWidth="0.5"
								vectorEffect="non-scaling-stroke"
								strokeOpacity="0.2"
							/>
						))}
					</svg>

					{/* Pill badge – bg matches section surface to mask lines inside */}
					<div
						className="border-line absolute -translate-x-1/2 -translate-y-1/2 rounded-full border bg-(--color-surface) px-5 py-2 text-sm whitespace-nowrap"
						style={{ top: `${PILL_Y}%`, left: `${PILL_X}%` }}
					>
						{trackingIntro}
					</div>

					{/* Tag text items */}
					{trackingTags.map((tag, i) => (
						<div
							key={i}
							className={`absolute text-sm leading-relaxed opacity-60 ${tagConfig[i].align}`}
							style={tagConfig[i].css}
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}
