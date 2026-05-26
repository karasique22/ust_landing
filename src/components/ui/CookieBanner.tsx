'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const PRIVACY_ROUTE = '/privacy'

export default function CookieBanner() {
	const [accepted, setAccepted] = useState<boolean | null>(null)

	const isDev =
		process.env.NODE_ENV === 'development' ||
		(typeof window !== 'undefined' &&
			(window.location.hostname === 'localhost' ||
				window.location.hostname.startsWith('127.') ||
				window.location.hostname === '0.0.0.0'))

	useEffect(() => {
		if (isDev) {
			// Always show in dev for testing
			setAccepted(false)
			return
		}

		try {
			const stored = localStorage.getItem('cookie_consent')
			setAccepted(stored === '1')
		} catch {
			setAccepted(false)
		}
	}, [isDev])

	if (accepted) return null

	return (
		<div className="fixed right-4 bottom-4 left-4 z-50 md:right-8 md:left-auto">
			<div className="rounded-2xl border bg-white/95 p-4 text-sm shadow-lg backdrop-blur-sm transition-all duration-200">
				<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<div className="max-w-[70%] text-sm">
						Мы используем cookie для работы сайта и аналитики. Подробнее —{' '}
						<a href={PRIVACY_ROUTE} target="_blank" rel="noopener noreferrer" className="underline">
							в Политике конфиденциальности
						</a>
					</div>

					<div className="flex items-center gap-2">
						<Button
							variant="gradient"
							size="sm"
							onClick={() => {
								try {
									localStorage.setItem('cookie_consent', '1')
								} catch {
									/* ignore */
								}
								setAccepted(true)
							}}
						>
							Принять
						</Button>

						<Button asChild variant="link" size="sm">
							<a href={PRIVACY_ROUTE} target="_blank" rel="noopener noreferrer">
								Подробнее
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
