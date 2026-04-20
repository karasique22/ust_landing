'use client'
import { AdmissionLink } from '@/components/common/AdmissionLink'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import { useApplicationDialog } from '@/components/form/useApplicationDialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function FinalCta() {
	const { open } = useApplicationDialog()
	return (
		<Section
			id="admission"
			variant="light"
			className="overflow-hidden"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 bottom-0 flex h-full justify-center"
			>
				<Image
					src="/decor/final-cta-rings.svg"
					alt=""
					width={1441}
					height={774}
					className="h-auto w-full max-w-243 scale-150 antialiased"
				/>
			</div>
			<div className="relative z-10 flex flex-col items-center text-center">
				<SectionHeading
					size="hero"
					as="h1"
					align="center"
					className="leading-[1.21]"
				>
					Создавайте{' '}
					<span className="bg-gray-300">образовательные продукты будущего</span>{' '}
					вместе с Университетом Косыгина
				</SectionHeading>
				<p className="text-h3 mt-6 max-w-4xl text-sm leading-tight font-semibold">
					Подайте документы и станьте частью нового поколения специалистов,
					которые формируют будущее онлайн-образования.
				</p>
				<div className="mt-10 flex w-full flex-col justify-center gap-4 md:w-auto">
					<Button onClick={open}>Получить консультацию</Button>
					<Button
						asChild
						variant="outline"
					>
						<Link
							className="w-full text-center"
							href="https://rguk.ru/applicant/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Подать документы
						</Link>
					</Button>
				</div>
			</div>
		</Section>
	)
}
