import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'UST Landing',
	description: 'UST Landing page'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				{children}
				<Toaster
					position="bottom-center"
					richColors
				/>
			</body>
		</html>
	)
}
