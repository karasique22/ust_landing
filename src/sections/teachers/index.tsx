import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Image from 'next/image'

import { TeachersCarousel } from './TeachersCarousel'

export default function Teachers() {
	return (
		<Section
			variant="dark"
			className="overflow-hidden"
		>
			<div className="">
				<Image
					src="/decor/teacher-rings.svg"
					alt=""
					aria-hidden="true"
					width={1441}
					height={713}
					className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover md:block"
				/>
				<div className="relative z-10">
					<SectionHeading
						as="h1"
						size="hero"
						align="right"
						className="mb-12 ml-auto max-w-8/12"
					>
						Обучение вместе с практиками рынка
					</SectionHeading>
					<TeachersCarousel />
				</div>
			</div>
		</Section>
	)
}
