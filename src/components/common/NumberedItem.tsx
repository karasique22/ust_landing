import { cn } from '@/lib/utils'

interface NumberedItemProps {
	number: number
	title: React.ReactNode
	subtitle?: React.ReactNode
	className?: string
}

export default function NumberedItem({
	number,
	title,
	subtitle,
	className
}: NumberedItemProps) {
	return (
		<div className={cn('flex flex-col', className)}>
			<span className="text-4xl font-semibold">({number})</span>
			<span className="ml-12 text-left text-xl leading-tight font-semibold">
				{title}
			</span>
			{subtitle && <span className="text-sm opacity-60">{subtitle}</span>}
		</div>
	)
}
