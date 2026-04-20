import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { trackingIntro, trackingTags } from '@/data/tracking-tags'

export default function ProfessionalTracking() {
	const tagsCount = trackingTags.length
	const lineHeight = 100 / tagsCount

	return (
		<Section variant="light">
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
				{/* Right - Desktop only */}
				<div className="relative hidden md:block">
					{/* Horizontal lines with dots */}
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						className="text-line absolute inset-0 h-full w-full"
						aria-hidden="true"
					>
						{trackingTags.map((_, i) => {
							const yPosition = lineHeight / 2 + i * lineHeight
							return (
								<g key={i}>
									<line
										x1="0"
										y1={yPosition}
										x2="80"
										y2={yPosition}
										stroke="currentColor"
										strokeWidth="0.5"
										vectorEffect="non-scaling-stroke"
									/>
									<circle
										cx="85"
										cy={yPosition}
										r="2"
										fill="currentColor"
									/>
								</g>
							)
						})}
					</svg>
					<div className="relative z-10 flex flex-col gap-5 pl-12">
						<p className="mb-2 text-sm font-medium opacity-80">
							{trackingIntro}
						</p>
						{trackingTags.map((tag, i) => (
							<div
								key={i}
								className="max-w-xs text-sm leading-relaxed opacity-60"
							>
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}
