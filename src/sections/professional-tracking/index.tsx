import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { trackingIntro, trackingTags } from '@/data/tracking-tags'

export default function ProfessionalTracking() {
	const tagsCount = trackingTags.length
	const lineHeight = 100 / tagsCount
	
	return (
		<Section variant="light">
			<div className="grid md:grid-cols-2 gap-12 items-start">
				{/* Left */}
				<div className="flex flex-col gap-6">
					<SectionHeading size="h2">Профессиональный трекинг и акселерация</SectionHeading>
					<p className="text-(--text-body) opacity-60 leading-relaxed max-w-sm">
						Университет выступает партнером каждого студента и выпускника программы.
					</p>
					<p className="text-(--text-body) opacity-60 leading-relaxed max-w-sm">
						Команды получают экспертное сопровождение на всех ключевых этапах работы над продуктом.
					</p>
					<div className="mt-4 md:hidden">
						<p className="text-sm font-medium opacity-80 mb-4">{trackingIntro}</p>
						<div className="flex flex-col gap-3">
							{trackingTags.map((tag, i) => (
								<div key={i} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 bg-current opacity-60 mt-1.5 shrink-0 rounded-full" />
									<span className="text-sm opacity-60 leading-relaxed">{tag}</span>
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
						className="absolute inset-0 w-full h-full text-line"
						aria-hidden="true"
					>
						{trackingTags.map((_, i) => {
							const yPosition = (lineHeight / 2) + (i * lineHeight)
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
						<p className="text-sm font-medium opacity-80 mb-2">{trackingIntro}</p>
						{trackingTags.map((tag, i) => (
							<div key={i} className="text-sm opacity-60 leading-relaxed max-w-xs">
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}
