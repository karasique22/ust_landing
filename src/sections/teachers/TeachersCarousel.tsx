'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { teachers } from '@/data/teachers'

import { TeacherCard } from './TeacherCard'

export function TeachersCarousel() {
	return (
		<Carousel opts={{ loop: true, slidesToScroll: 1, align: 'start' }}>
			<CarouselContent>
				{teachers.map((teacher, i) => (
					<CarouselItem
						className="flex basis-1/4 flex-col"
						key={i}
					>
						<TeacherCard teacher={teacher} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
