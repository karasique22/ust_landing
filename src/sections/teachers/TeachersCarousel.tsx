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
		<Carousel
			className="md:mx-6 lg:mx-10"
			opts={{ loop: true, slidesToScroll: 1, align: 'start' }}
		>
			<CarouselContent>
				{teachers.map((teacher, i) => (
					<CarouselItem
						className="flex basis-full flex-col md:basis-1/3 lg:basis-1/4"
						key={i}
					>
						<TeacherCard teacher={teacher} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden md:-left-10 md:flex" />
			<CarouselNext className="hidden md:-right-10 md:flex" />
		</Carousel>
	)
}
