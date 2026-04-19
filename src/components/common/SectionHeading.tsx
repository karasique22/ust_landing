import { cn } from '@/lib/utils'

interface SectionHeadingProps {
	as?: 'h1' | 'h2' | 'h3'
	align?: 'left' | 'center'
	size?: 'hero' | 'h2' | 'h3'
	className?: string
	children: React.ReactNode
}

export default function SectionHeading({
	as: Tag = 'h2',
	align = 'left',
	size = 'h2',
	className,
	children,
}: SectionHeadingProps) {
	return (
		<Tag
			className={cn(
				'font-semibold tracking-[-0.02em] leading-[1.05]',
				size === 'hero' && 'text-[var(--text-hero)]',
				size === 'h2' && 'text-[var(--text-h2)]',
				size === 'h3' && 'text-[var(--text-h3)]',
				align === 'center' && 'text-center',
				className
			)}
		>
			{children}
		</Tag>
	)
}
