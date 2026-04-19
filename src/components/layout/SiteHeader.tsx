'use client'

import { useState } from 'react'
import { navigation } from '@/data/navigation'
import { useApplicationDialog } from '@/components/form/useApplicationDialog'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

export function SiteHeader() {
	const dialog = useApplicationDialog()
	const [sheetOpen, setSheetOpen] = useState(false)

	function handleApply() {
		setSheetOpen(false)
		dialog.open()
	}

	return (
		<header className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-6 w-full">
			<span className="text-white font-medium italic tracking-tight text-lg select-none">
				онлайн…продукты.
			</span>

			<nav className="hidden md:flex gap-6 md:gap-8">
				{navigation.map(item => (
					<a
						key={item.href}
						href={item.href}
						className="text-sm text-white/80 hover:text-white transition-colors"
					>
						{item.label}
					</a>
				))}
			</nav>

			<button
				className="hidden md:block border border-white text-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition-colors"
				onClick={dialog.open}
			>
				Оставить заявку
			</button>

			<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
				<SheetTrigger asChild>
					<button className="md:hidden text-white text-2xl leading-none" aria-label="Открыть меню">
						☰
					</button>
				</SheetTrigger>
				<SheetContent side="right" className="bg-white flex flex-col p-6">
					<nav className="flex flex-col gap-6 mt-8">
						{navigation.map(item => (
							<SheetClose asChild key={item.href}>
								<a
									href={item.href}
									className="text-base text-black/80 hover:text-black transition-colors"
								>
									{item.label}
								</a>
							</SheetClose>
						))}
					</nav>
					<div className="mt-auto">
						<button
							className="w-full border border-black text-black rounded-full px-5 py-2 text-sm hover:bg-black hover:text-white transition-colors"
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
