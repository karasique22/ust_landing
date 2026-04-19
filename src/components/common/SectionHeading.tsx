import { cn } from '@/lib/utils'

interface SectionHeadingProps {
	as?: 'h1' | 'h2' | 'h3'
	align?: 'left' | 'center' | 'right'
	size?: 'hero' | 'h2' | 'h3'
	className?: string
	children: React.ReactNode
}

export default function SectionHeading({
	as: Tag = 'h2',
	align = 'left',
	size = 'h2',
	className,
	children
}: SectionHeadingProps) {
	return (
		<Tag
			className={cn(
				'leading-none font-semibold tracking-tight',
				size === 'hero' && 'text-hero',
				size === 'h2' && 'text-h2',
				size === 'h3' && 'text-h3',
				align === 'center' && 'text-center',
				align === 'left' && 'self-start text-left',
				align === 'right' && 'self-end text-right',
				className
			)}
		>
			{children}
		</Tag>
	)
}
