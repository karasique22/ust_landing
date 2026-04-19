'use client'

import { SiteHeader } from '@/components/layout/SiteHeader'
import { useApplicationDialog } from '@/components/form/useApplicationDialog'
import HeroDecor from './HeroDecor'

export default function Hero() {
	const { open } = useApplicationDialog()

	return (
		<section
			id="top"
			className="relative min-h-svh bg-[var(--color-surface-dark)] text-[var(--color-fg-dark)] overflow-hidden flex flex-col"
		>
			<SiteHeader />
			<div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-12 py-16">
				<HeroDecor />
				<h1 className="text-[var(--text-hero)] font-semibold tracking-[-0.02em] leading-[1.05] max-w-4xl">
					Устойчивые продукты<br className="hidden md:block" /> онлайн-образования
				</h1>
				<p className="text-lg opacity-80 mt-6 max-w-xl">Магистерская программа нового поколения</p>
				<button
					onClick={open}
					className="mt-10 bg-white text-black rounded-full px-8 py-4 font-medium text-sm hover:bg-white/90 transition-colors w-full md:w-auto"
				>
					Оставить заявку
				</button>
			</div>
		</section>
	)
}
