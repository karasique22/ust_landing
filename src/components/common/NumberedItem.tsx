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
	className,
}: NumberedItemProps) {
	return (
		<div className={cn('flex flex-col', className)}>
			<span className='text-sm opacity-60'>({number})</span>
			<span className='text-base font-medium'>{title}</span>
			{subtitle && <span className='text-sm opacity-60'>{subtitle}</span>}
		</div>
	)
}
