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
				'inline-flex items-center rounded-full text-xl',
				size === 'sm' ? 'px-3 py-1' : 'px-5 py-2',
				variant === 'dark'
					? [
							'relative overflow-hidden',
							'text-white',
							'bg-[linear-gradient(90deg,#111,#222,#111)]',
							'border border-white/10',
							'before:absolute before:inset-0 before:rounded-full before:content-[""]',
							'before:bg-[linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.02))]'
						].join(' ')
					: 'border-2 border-solid bg-transparent',
				className
			)}
		>
			{children}
		</span>
	)
}
