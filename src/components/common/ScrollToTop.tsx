'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 400)
		const raf = requestAnimationFrame(onScroll)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => {
			cancelAnimationFrame(raf)
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return (
		<button
			type="button"
			aria-label="Наверх"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			className={`fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(90deg,#111,#222,#111)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_30px_rgba(0,0,0,0.6)] md:size-14 ${
				visible
					? 'pointer-events-auto opacity-100'
					: 'pointer-events-none translate-y-2 opacity-0'
			}`}
		>
			<ArrowUp className="size-6" />
		</button>
	)
}
