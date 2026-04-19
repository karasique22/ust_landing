'use client'

import { useApplicationDialog } from '@/components/form/useApplicationDialog'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger
} from '@/components/ui/sheet'
import { navigation } from '@/data/navigation'
import Image from 'next/image'
import { useState } from 'react'

export function SiteHeader() {
	const dialog = useApplicationDialog()
	const [sheetOpen, setSheetOpen] = useState(false)

	function handleApply() {
		setSheetOpen(false)
		dialog.open()
	}

	return (
		<header className="flex w-full items-center justify-between px-4 py-6 sm:px-12 md:px-8">
			<Image
				className="md:hidden"
				src="/icons/logo-mini.svg"
				alt="Онлайн продукты."
				width={40}
				height={45}
			/>

			<Image
				className="hidden md:block"
				src="/icons/logo.svg"
				alt="Онлайн продукты."
				width={288}
				height={45}
			/>

			<nav className="hidden gap-6 md:flex md:gap-15">
				{navigation.map(item => (
					<a
						key={item.href}
						href={item.href}
						className="text-lg text-white/80 transition-colors hover:text-white"
					>
						{item.label}
					</a>
				))}
			</nav>

			<Sheet
				open={sheetOpen}
				onOpenChange={setSheetOpen}
			>
				<SheetTrigger asChild>
					<button
						className="text-2xl leading-none text-white md:hidden"
						aria-label="Открыть меню"
					>
						☰
					</button>
				</SheetTrigger>
				<SheetContent
					side="right"
					className="flex flex-col bg-white p-6"
				>
					<nav className="mt-8 flex flex-col gap-6">
						{navigation.map(item => (
							<SheetClose
								asChild
								key={item.href}
							>
								<a
									href={item.href}
									className="text-base text-black/80 transition-colors hover:text-black"
								>
									{item.label}
								</a>
							</SheetClose>
						))}
					</nav>
					<div className="mt-auto">
						<button
							className="w-full rounded-full border border-black px-5 py-2 text-sm text-black transition-colors hover:bg-black hover:text-white"
							onClick={handleApply}
						>
							Оставить заявку
						</button>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	)
}
