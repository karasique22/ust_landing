import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'Устойчивые продукты онлайн-образования | Магистратура Университета Косыгина',
	description:
		'Магистерская программа нового поколения. Диплом как стартап, профессиональный трекинг, 2 квалификации в одном дипломе. Поступление по портфолио.',
	keywords: [
		'магистратура',
		'онлайн-образование',
		'EdTech',
		'диплом как стартап',
		'профессиональный трекинг',
		'Университет Косыгина',
	],
	openGraph: {
		title: 'Устойчивые продукты онлайн-образования',
		description: 'Магистерская программа нового поколения Университета Косыгина',
		type: 'website',
		locale: 'ru_RU',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Устойчивые продукты онлайн-образования',
		description: 'Магистерская программа нового поколения Университета Косыгина',
	},
	robots: { index: true, follow: true },
}

export default function RootLayout({
	children,
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
											'ИИ в образовании',
										],
									},
								],
							},
						}),
					}}
				/>
			</body>
		</html>
	)
}
