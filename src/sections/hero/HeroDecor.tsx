import Image from 'next/image'

export default function HeroDecor() {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
		>
			<Image
				src="/decor/hero-rings.svg"
				alt=""
				width={972}
				height={939}
				priority
				className="h-auto max-w-243 antialiased"
			/>
		</div>
	)
}
