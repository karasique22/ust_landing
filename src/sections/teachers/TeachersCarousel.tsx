'use client'
import { useState } from 'react'
import { teachers } from '@/data/teachers'
import { TeacherCard } from './TeacherCard'

export function TeachersCarousel() {
	const [index, setIndex] = useState(0)

	const canPrev = index > 0
	const canNext = index < teachers.length - 1

	return (
		<div className="relative">
			{/* Arrow prev */}
			<button
				onClick={() => setIndex(i => Math.max(0, i - 1))}
				disabled={!canPrev}
				className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center disabled:opacity-30 hover:bg-white hover:text-black transition-colors"
				aria-label="Предыдущий"
			>‹</button>

			{/* Track */}
			<div className="overflow-hidden">
				<div
					className="flex gap-4 transition-transform duration-300"
					style={{ transform: `translateX(calc(-${index} * (100% / 4 + 1rem)))` }}
				>
					{teachers.map(teacher => <TeacherCard key={teacher.id} teacher={teacher} />)}
				</div>
			</div>

			{/* Arrow next */}
			<button
				onClick={() => setIndex(i => Math.min(teachers.length - 1, i + 1))}
				disabled={!canNext}
				className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center disabled:opacity-30 hover:bg-white hover:text-black transition-colors"
				aria-label="Следующий"
			>›</button>
		</div>
	)
}
