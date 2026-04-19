import WaveStack from '@/components/common/WaveStack'

export function X2Display() {
	return (
		<div className="relative flex items-end gap-4 my-12">
			<span className="text-[var(--text-display)] font-bold leading-none tracking-[-0.04em]">X2</span>
			<span className="text-sm opacity-60 mb-4 max-w-[120px] leading-tight">возможностей поступления</span>
			<WaveStack
				className="absolute inset-0 w-full h-full hidden md:block text-[var(--color-fg)]"
				count={4}
				color="currentColor"
				strokeWidth={0.8}
			/>
		</div>
	)
}
