import { cn } from '@/lib/utils'

interface SectionProps {
	id?: string
	variant?: 'light' | 'dark'
	className?: string
	innerClassName?: string
	children: React.ReactNode
}

export default function Section({
	id,
	variant = 'light',
	className,
	innerClassName,
	children,
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				'relative isolate scroll-mt-24 py-[var(--spacing-section-y)]',
				variant === 'dark'
					? 'bg-[var(--color-surface-dark)] text-[var(--color-fg-dark)]'
					: 'bg-[var(--color-surface)] text-[var(--color-fg)]',
				className
			)}
		>
			<div
				className={cn(
					'mx-auto max-w-[var(--container-w)] px-4 md:px-8 lg:px-12',
					innerClassName
				)}
			>
				{children}
			</div>
		</section>
	)
}
