import Image from 'next/image'
import { contacts } from '@/data/contacts'

export function SiteFooter() {
	return (
		<footer className="bg-[var(--color-surface-dark)] text-[var(--color-fg-dark)] px-4 md:px-8 lg:px-12 py-12">
			<div className="max-w-[var(--container-w)] mx-auto">
				<p className="text-sm opacity-60">{contacts.legalName}</p>
				<div className="grid md:grid-cols-2 gap-8 mt-6">
					<div>
						<Image
							src="/icons/logo-kosygin.svg"
							alt="Университет Косыгина"
							width={40}
							height={40}
						/>
						<p className="tracking-widest text-sm mt-2 uppercase">Университет Косыгина</p>
						<p className="text-sm opacity-60 mt-2">{contacts.address}</p>
					</div>
					<div>
						<p className="text-sm opacity-60">Напишите нам:</p>
						<a
							href={`mailto:${contacts.email}`}
							className="text-sm underline hover:no-underline mt-1 inline-block"
						>
							{contacts.email}
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
