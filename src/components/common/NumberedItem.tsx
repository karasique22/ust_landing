import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const numberClass = cva('font-semibold', {
	variants: {
		size: { default: 'text-4xl', sm: 'text-[30px]' },
		align: { left: '', right: 'text-end' }
	},
	defaultVariants: { size: 'default', align: 'left' }
})

const titleClass = cva('text-left leading-tight font-semibold', {
	variants: {
		size: { default: 'text-xl', sm: 'text-[14px]' },
		align: {
			left: 'ml-12',
			right: 'mr-12 self-end text-end'
		},
		compact: {
			true: '',
			false: ''
		}
	},
	compoundVariants: [
		{ align: 'left', compact: true, class: 'ml-3' },
		{ align: 'right', compact: true, class: 'mr-3' }
	],
	defaultVariants: { size: 'default', align: 'left', compact: false }
})

interface NumberedItemProps {
	number: number
	title: React.ReactNode
	subtitle?: React.ReactNode
	className?: string
	numberRight?: boolean
	size?: 'default' | 'sm'
	compact?: boolean
}

export default function NumberedItem({
	number,
	title,
	subtitle,
	className,
	numberRight,
	size = 'default',
	compact = false
}: NumberedItemProps) {
	const align = numberRight ? 'right' : 'left'

	return (
		<div
			className={cn(
				'flex flex-col self-baseline',
				numberRight && 'ml-auto',
				className
			)}
		>
			<span className={numberClass({ size, align })}>({number})</span>
			<span className={titleClass({ size, align, compact })}>{title}</span>
			{subtitle && <span className="text-sm opacity-60">{subtitle}</span>}
		</div>
	)
}
