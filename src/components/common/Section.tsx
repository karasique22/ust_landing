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
	children
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				'py-section-y relative isolate scroll-mt-24',
				variant === 'dark'
					? 'bg-(--color-surface-dark) text-(--color-fg-dark)'
					: 'bg-(--color-surface) text-(--color-fg)',
				className
			)}
		>
			<div
				className={cn(
					'mx-auto max-w-(--container-w) px-4 md:px-8 lg:px-12',
					innerClassName
				)}
			>
				{children}
			</div>
		</section>
	)
}
