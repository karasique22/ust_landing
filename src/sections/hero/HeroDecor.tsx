import RingsEllipse from '@/components/common/RingsEllipse'

export default function HeroDecor() {
	return (
		<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 hidden md:block w-[800px] opacity-20 pointer-events-none">
			<RingsEllipse color="white" />
		</div>
	)
}
