export function X2Display() {
	return (
		<div className="relative my-12 flex items-end gap-4">
			<img
				src="/decor/wave-stack-light.svg"
				alt=""
				className="absolute -bottom-8 hidden w-auto md:-right-[calc(max(0px,(100vw-1280px)/2)+2rem)] md:block lg:-right-[calc(max(0px,(100vw-1280px)/2)+3rem)]"
				aria-hidden="true"
			/>
			<div className="flex items-baseline-last gap-4">
				<span className="relative text-[140px] leading-none font-bold tracking-[-0.04em] md:text-[310px]">
					X2
				</span>
				<div className="relative mb-4 rounded-md bg-white p-2 text-xl leading-none font-semibold">
					возможностей <br />
					поступления
				</div>
			</div>
		</div>
	)
}
