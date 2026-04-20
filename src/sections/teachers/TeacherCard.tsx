import type { Teacher } from '@/data/teachers'
import Image from 'next/image'

export function TeacherCard({ teacher }: { teacher: Teacher }) {
	return (
		<div className="group flex w-[calc(100vw-4rem)] grow flex-col gap-3 select-none md:w-[calc(50%-0.5rem)] lg:w-60">
			<div className="relative aspect-video overflow-hidden rounded-lg bg-white/10">
				<Image
					src={teacher.photo}
					alt={teacher.name}
					fill
					className="object-cover grayscale transition-all group-hover:grayscale-0"
				/>
			</div>
			<div className="flex flex-1 flex-col gap-3 rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))] p-3">
				<div className="space-y-2">
					<p className="leading-tight font-semibold text-(--color-fg-dark) select-text">
						{teacher.name}
					</p>
					<p className="text-xs tracking-wide text-(--color-fg-dark) opacity-60">
						{teacher.role}
					</p>
				</div>
				<ul className="flex flex-col gap-1.5 text-sm text-(--color-fg-dark)">
					{teacher.achievements.map((a, i) => (
						<li
							key={i}
							className="opacity-85"
						>
							• {a}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
