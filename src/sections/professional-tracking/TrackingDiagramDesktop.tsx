import Image from 'next/image'

export default function TrackingDiagramDesktop({
	className
}: {
	className?: string
}) {
	return (
		<>
			<Image
				src="/decor/tracking-diagram-desktop.svg"
				alt="Tracking Diagram"
				className={className}
				width={1200}
				height={720}
			/>
		</>
	)
}
