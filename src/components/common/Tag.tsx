import { cn } from '@/lib/utils'

interface TagProps {
	variant?: 'light' | 'dark'
	size?: 'sm' | 'md'
	className?: string
	children: React.ReactNode
}

export default function Tag({
	variant = 'light',
	size = 'md',
	className,
	children,
}: TagProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-[var(--radius-tag)] border border-solid bg-transparent text-sm',
				variant === 'dark'
					? 'border-[var(--color-line-dark)]'
					: 'border-[var(--color-line)]',
				size === 'sm' ? 'px-3 py-1' : 'px-5 py-2',
				className
			)}
		>
			{children}
		</span>
	)
}
