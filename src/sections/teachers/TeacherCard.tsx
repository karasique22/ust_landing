import Image from 'next/image'
import type { Teacher } from '@/data/teachers'

export function TeacherCard({ teacher }: { teacher: Teacher }) {
	return (
		<div className="flex flex-col gap-3 shrink-0 w-[calc(100vw-4rem)] md:w-[calc(50%-0.5rem)] lg:w-60">
			<div className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden bg-white/10">
				<Image src={teacher.photo} alt={teacher.name} fill className="object-cover" />
			</div>
			<p className="font-semibold text-[var(--color-fg-dark)]">{teacher.name}</p>
			<p className="text-sm opacity-60 text-[var(--color-fg-dark)]">{teacher.role}</p>
			<ul className="flex flex-col gap-1">
				{teacher.achievements.map((a, i) => (
					<li key={i} className="text-sm opacity-80 text-[var(--color-fg-dark)] before:content-['•'] before:mr-2">{a}</li>
				))}
			</ul>
		</div>
	)
}
