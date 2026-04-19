'use client'

import { useApplicationDialog } from '@/components/form/useApplicationDialog'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import HeroDecor from './HeroDecor'

export default function Hero() {
	const { open } = useApplicationDialog()

	return (
		<section
			id="top"
			className="relative flex min-h-svh flex-col overflow-hidden bg-(--color-surface-dark) text-(--color-fg-dark)"
		>
			<SiteHeader />
			<div className="relative flex flex-1 flex-col items-center justify-center px-4 py-16 text-center md:px-8 lg:px-12">
				<HeroDecor />
				<Image
					className="relative mb-8 md:hidden"
					src="/icons/logo.svg"
					alt="Онлайн продукты."
					width={220}
					height={34}
				/>
				<h1 className="text-hero relative max-w-4xl leading-[1.05] font-semibold tracking-[-0.02em]">
					Устойчивые продукты
					<br className="hidden md:block" /> онлайн-образования
				</h1>
				<p className="relative mt-6 max-w-xl text-lg font-medium md:text-xl">
					Магистерская программа нового поколения
				</p>
				<Button
					onClick={open}
					variant={'gradient'}
					className="relative mt-10 w-full font-medium md:w-auto"
				>
					Оставить заявку
				</Button>
			</div>
		</section>
	)
}
