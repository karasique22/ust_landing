import { contacts } from '@/data/contacts'
import Image from 'next/image'

export function SiteFooter() {
	return (
		<footer className="flex flex-col bg-(--color-surface-dark) px-4 py-12 text-(--color-fg-dark) md:px-8 lg:px-12">
			<div className="mx-auto w-full max-w-(--container-w)">
				<div className="flex items-stretch justify-between gap-8">
					<div className="flex flex-col justify-between gap-8">
						<Image
							src="/icons/logo-rgu.svg"
							alt="Университет Косыгина"
							width={195}
							height={70}
						/>
						<div>
							<p className="text-sm opacity-60">Адрес:</p>
							<a
								href={`https://maps.google.com/?q=${contacts.address}`}
								className="mt-1 inline-block text-sm underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{contacts.address}
							</a>
						</div>
					</div>

					<div className="flex flex-col items-start justify-between gap-8">
						<p className="max-w-xs text-sm opacity-60">{contacts.legalName}</p>
						<div>
							<p className="text-sm opacity-60">Напишите нам:</p>
							<a
								href={`mailto:${contacts.email}`}
								className="mt-1 inline-block text-sm hover:underline"
							>
								{contacts.email}
							</a>
						</div>
					</div>
				</div>

				<div className="mt-6 border-t border-white/10 pt-4 text-sm opacity-80">
					<a
						href="/privacy"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 underline"
					>
						Политика конфиденциальности
					</a>
					<a
						href="/user-agreement"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Пользовательское соглашение
					</a>
					<a
						href="/consent"
						target="_blank"
						rel="noopener noreferrer"
						className="ml-4 underline"
					>
						Согласие на обработку ПД
					</a>
				</div>
			</div>
		</footer>
	)
}
