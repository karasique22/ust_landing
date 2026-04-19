'use client'
import Section from '@/components/common/Section'
import Image from 'next/image'
import { AdmissionLink } from '@/components/common/AdmissionLink'
import { useApplicationDialog } from '@/components/form/useApplicationDialog'

export default function FinalCta() {
	const { open } = useApplicationDialog()
	return (
		<Section id="admission" variant="light" className="overflow-hidden">
			<Image
				src="/decor/final-cta-rings.svg"
				alt=""
				aria-hidden="true"
				width={1441}
				height={774}
				className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-auto w-full md:block"
			/>
			<div className="relative z-10 flex flex-col items-center text-center">
				<h2 className="text-[var(--text-h2)] font-semibold tracking-[-0.02em] leading-[1.05] max-w-3xl">
					Создавайте образовательные продукты будущего вместе с Университетом Косыгина
				</h2>
				<p className="mt-6 text-sm opacity-60 max-w-lg leading-relaxed">
					Подайте документы на поступление в магистратуру или получите консультацию по программе.
				</p>
				<div className="mt-10 flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
					<button
						onClick={open}
						className="bg-[var(--color-surface-dark)] text-[var(--color-fg-dark)] rounded-full px-8 py-4 font-medium text-sm hover:opacity-90 transition-opacity w-full md:w-auto"
					>
						Получить консультацию
					</button>
					<AdmissionLink className="border border-[var(--color-fg)] text-[var(--color-fg)] rounded-full px-8 py-4 font-medium text-sm hover:bg-[var(--color-fg)] hover:text-[var(--color-fg-dark)] transition-colors w-full md:w-auto text-center">
						Подать документы
					</AdmissionLink>
				</div>
			</div>
		</Section>
	)
}
