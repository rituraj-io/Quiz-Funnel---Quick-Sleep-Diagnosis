import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className="w-full bg-gradient-to-b from-[#0A090C] to-[#07393C] pt-36 pb-12 px-5 md:pt-48 md:pb-20 md:px-6">
			<div className="mx-auto max-w-[1100px] flex flex-col items-start text-left md:items-center md:text-center">
				{/* Badge */}
				<span
					className="animate-fade-up inline-block rounded-full px-4 py-1.5 text-[#85D2E5] bg-[#07393C] font-[family-name:var(--font-heading)] font-semibold text-xs md:text-sm uppercase"
					style={{ letterSpacing: '0.7px', animationDelay: '0.2s' }}>
					The Science of Rest
				</span>

				<div className="mt-2" />

				{/* Heading */}
				<h1
					className="animate-fade-up font-[family-name:var(--font-heading)] font-extrabold text-left md:text-center text-[40px] leading-[42px] tracking-[-1.2px] md:text-[72px] md:leading-[72px] md:tracking-[-2px] lg:text-[96px] lg:leading-[96px] lg:tracking-[-2.4px]"
					style={{ animationDelay: '0.4s' }}>
					<span className="text-[#FCF8F9]">Your sleep problems</span>
					<br />
					<span className="text-[#85D2E5]">aren&apos;t random.</span>
				</h1>

				<div className="mt-5 md:mt-8" />

				{/* Subtitle */}
				<p
					className="animate-fade-up font-[family-name:var(--font-body)] font-normal text-left md:text-center max-w-[672px] text-base md:text-2xl"
					style={{
						lineHeight: '1.45',
						color: 'rgba(120, 163, 166, 0.8)',
						animationDelay: '0.6s',
					}}>
					Identify your unique Sleep Architecture and get a personalized path to deep, restorative rest.
				</p>

				<div className="mt-6 md:mt-8" />

				{/* Buttons */}
				<div
					className="animate-fade-up flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-2 md:pt-4 w-full"
					style={{ animationDelay: '0.8s' }}>
					<Link
						href="/quiz"
						className="btn-primary rounded-full px-8 py-4 bg-[#85D2E5] text-[#002224] font-[family-name:var(--font-heading)] font-bold text-base md:text-lg text-center w-full md:w-auto">
						Find Your Sleep Type — Free Quiz
					</Link>

					<button className="flex flex-row items-center justify-center gap-2 text-[#FCF8F9] font-[family-name:var(--font-heading)] font-semibold text-base bg-transparent border-none cursor-pointer">
						Explore the Science
						<Image
							src="/images/arrow-right.svg"
							alt=""
							width={24}
							height={28}
							className="-scale-y-100"
							unoptimized
						/>
					</button>
				</div>

				{/* Video thumbnail area */}
				<div className="animate-fade-up pt-10 md:pt-20 w-full max-w-[1024px]" style={{ animationDelay: '1s' }}>
					<div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
						<Image
							src="/images/video-thumbnail.png"
							alt="The Science of Drift — watch video"
							width={1456}
							height={816}
							className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
							sizes="(max-width: 1024px) 100vw, 1024px"
							preload
						/>
						{/* Subtle dark overlay that lightens on hover */}
						<div
							className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60 opacity-40"
							style={{ backgroundColor: '#002224' }}
						/>
						{/* Play button — scales up on hover */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div
								className="flex items-center justify-center backdrop-blur-sm w-16 h-16 md:w-[96px] md:h-[96px] rounded-full transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(133,210,229,0.3)]"
								style={{
									border: '1.5px solid rgba(133,210,229,0.5)',
									backgroundColor: 'rgba(0,34,36,0.4)',
								}}>
								<Image
									src="/images/play-icon.svg"
									alt="Play"
									width={36}
									height={44}
									className="-scale-y-100 w-5 h-6 md:w-7 md:h-8"
									unoptimized
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
