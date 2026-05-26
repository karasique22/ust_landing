import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import CookieBanner from '@/components/ui/CookieBanner'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://онлайнпродукты.рф'

export const metadata: Metadata = {
	title:
		'Устойчивые продукты онлайн-образования | Магистратура Университета Косыгина',
	description:
		'Магистерская программа нового поколения. Диплом как стартап, профессиональный трекинг, 2 квалификации в одном дипломе. Поступление по портфолио.',
	keywords: [
		'магистратура',
		'онлайн-образование',
		'EdTech',
		'диплом как стартап',
		'профессиональный трекинг',
		'Университет Косыгина'
	],
	metadataBase: new URL(SITE_URL),
	openGraph: {
		title: 'Устойчивые продукты онлайн-образования',
		description:
			'Магистерская программа нового поколения Университета Косыгина',
		type: 'website',
		locale: 'ru_RU',
		url: SITE_URL,
		siteName: 'Устойчивые продукты онлайн-образования',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				type: 'image/jpeg',
				alt: 'Устойчивые продукты онлайн-образования — Университет Косыгина'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Устойчивые продукты онлайн-образования',
		description: 'Магистерская программа нового поколения Университета Косыгина',
		images: ['/og-image.jpg']
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
		],
		apple: [{ url: '/apple-touch-icon.png' }]
	},
	manifest: '/site.webmanifest',
	robots: { index: true, follow: true }
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
				<CookieBanner />
				<Toaster position="bottom-center" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'EducationalOrganization',
							name: 'Университет Косыгина',
							url: 'https://rguk.ru',
							description:
								'Магистерская программа «Устойчивые продукты онлайн-образования»',
							hasOfferCatalog: {
								'@type': 'OfferCatalog',
								name: 'Магистерские программы',
								itemListElement: [
									{
										'@type': 'Course',
										name: 'Устойчивые продукты онлайн-образования',
										description: 'Магистерская программа нового поколения',
										teaches: [
											'Разработка образовательных продуктов',
											'Управление EdTech-платформами',
											'ИИ в образовании'
										]
									}
								]
							}
						})
					}}
				/>
			</body>
		</html>
	)
}
