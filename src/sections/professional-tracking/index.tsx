import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Image from 'next/image'

import TrackingDiagramDesktop from './TrackingDiagramDesktop'
import TrackingDiagramMobile from './TrackingDiagramMobile'

export default function ProfessionalTracking() {
	return (
		<Section
			variant="light"
			className="overflow-hidden"
		>
			{/* Desktop */}
			<div className="relative hidden aspect-1000/600 w-full overflow-visible md:block">
				<TrackingDiagramDesktop className="absolute bottom-0 hidden w-[calc(100%-6rem)] translate-x-20 md:-right-[calc(max(0px,(100vw-1280px)/2))] md:block lg:-right-[calc(max(0px,(100vw-1280px)/2))]" />
				<div className="absolute inset-0 flex max-w-[45%] flex-col gap-6">
					<Image
						src="/icons/logo-rgu-dark.svg"
						alt=""
						width={131}
						height={59}
						aria-hidden="true"
					/>
					<SectionHeading
						as="h1"
						size="hero"
					>
						Профессиональный трекинг и акселерация
					</SectionHeading>
					<div className="max-w-sm space-y-4 text-xl font-semibold">
						<p className="leading-none">
							Университет выступает партнёром каждого студента и выпускника
							программы.
						</p>
						<p className="leading-none">
							Команды получают экспертное сопровождение на всех ключевых этапах
							работы над продуктом.
						</p>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<div className="flex flex-col gap-8 md:hidden">
				<Image
					src="/icons/logo-rgu-dark.svg"
					alt=""
					width={131}
					height={59}
					aria-hidden="true"
				/>
				<SectionHeading
					as="h1"
					size="hero"
				>
					Профессиональный трекинг и акселерация
				</SectionHeading>
				<div className="space-y-4 text-xl leading-tight font-semibold">
					<p>
						Университет выступает партнёром каждого студента и выпускника
						программы.
					</p>
					<p>
						Команды получают экспертное сопровождение на всех ключевых этапах
						работы над продуктом.
					</p>
				</div>
				<TrackingDiagramMobile className="w-full" />
			</div>
		</Section>
	)
}
