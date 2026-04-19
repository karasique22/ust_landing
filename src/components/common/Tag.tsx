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
	children
}: TagProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-full border-2 border-solid bg-transparent text-xl',
				size === 'sm' ? 'px-3 py-1' : 'px-5 py-2',
				className
			)}
		>
			{children}
		</span>
	)
}
