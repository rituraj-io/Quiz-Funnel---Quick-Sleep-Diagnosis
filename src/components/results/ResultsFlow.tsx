'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { resultContent, type SleepType } from '@/data/resultContent';

/* ── Social proof stats (same as landing page) ── */
const STATS = [
	{ value: '12,000+', label: 'Sleepers diagnosed' },
	{ value: '4.8/5', label: 'Average rating' },
	{ value: '92%', label: 'Report better sleep by day 14' },
];

const TESTIMONIALS = [
	{
		quote: 'I used to dread bedtime. By week 2, I was falling asleep in under 15 minutes.',
		name: 'Sarah M.',
		type: 'Racing Mind type',
	},
	{
		quote: 'I thought I was just a bad sleeper. The protocol changed my mornings completely.',
		name: 'James K.',
		type: 'Low Recovery type',
	},
	{
		quote: "Simple, no BS. I actually stuck with this one because it's only 15 minutes a night.",
		name: 'Priya R.',
		type: 'Drift member',
	},
];

export default function ResultsFlow() {
	const searchParams = useSearchParams();
	const typeParam = searchParams.get('type') as SleepType | null;
	const sleepType: SleepType = typeParam === 'low_recovery' ? 'low_recovery' : 'racing_mind';
	const content = resultContent[sleepType];

	const [phase, setPhase] = useState<'analyzing' | 'results'>('analyzing');

	useEffect(() => {
		const timer = setTimeout(() => setPhase('results'), 2800);
		return () => clearTimeout(timer);
	}, []);

	/* ── Analyzing / Loading screen ── */
	if (phase === 'analyzing') {
		return (
			<div
				className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
				style={{ background: 'linear-gradient(180deg, #0A090C 0%, #07393C 100%)' }}>
				{/* Pulsing orb */}
				<div
					className="absolute rounded-full"
					style={{
						width: '320px',
						height: '320px',
						background: 'radial-gradient(circle, rgba(133,210,229,0.15) 0%, transparent 70%)',
						animation: 'analyzeOrb 2s ease-in-out infinite',
					}}
				/>

				{/* Animated bars */}
				<div className="flex gap-1.5 mb-8">
					{[0, 1, 2, 3, 4].map(i => (
						<div
							key={i}
							className="rounded-full"
							style={{
								width: '4px',
								height: '32px',
								backgroundColor: '#85D2E5',
								animation: `analyzeBar 1.2s ease-in-out ${i * 0.15}s infinite`,
							}}
						/>
					))}
				</div>

				<p
					className="font-[family-name:var(--font-heading)] font-semibold text-[20px] md:text-[24px] mb-3"
					style={{ color: '#FCF8F9' }}>
					Analyzing your sleep pattern...
				</p>
				<p
					className="font-[family-name:var(--font-body)] font-normal text-[14px] md:text-[16px]"
					style={{ color: 'rgba(120, 163, 166, 0.6)' }}>
					Matching your responses to clinical sleep profiles
				</p>
			</div>
		);
	}

	/* ── Results page ── */
	return (
		<div
			className="min-h-screen relative overflow-x-clip"
			style={{ background: 'linear-gradient(180deg, #0A090C 0%, #07393C 50%, #002224 100%)' }}>
			{/* Ambient glow */}
			<div
				className="absolute pointer-events-none"
				style={{
					width: '600px',
					height: '600px',
					top: '10%',
					left: '50%',
					transform: 'translateX(-50%)',
					background: 'radial-gradient(circle, rgba(133,210,229,0.08) 0%, transparent 70%)',
					filter: 'blur(40px)',
				}}
			/>

			{/* ── Header ── */}
			<header className="relative z-10 mx-auto max-w-[1280px] w-full px-5 md:px-8 pt-5 md:pt-6">
				<Link href="/" className="flex items-center gap-2 w-fit">
					<Image
						src="/images/drift-logo-light.svg"
						alt="Drift logo"
						width={20}
						height={24}
						className="-scale-y-100"
						unoptimized
					/>
					<span
						className="font-[family-name:var(--font-heading)] font-bold text-[18px] leading-none"
						style={{ color: '#FCF8F9', letterSpacing: '-0.9px' }}>
						Drift
					</span>
				</Link>
			</header>

			{/* ── Main content ── */}
			<main className="relative z-10 mx-auto max-w-[1280px] w-full px-5 md:px-8">
				{/* ── Two-column grid: stacked on mobile, side-by-side on md+ ── */}
				<div className="md:flex md:gap-10 lg:gap-16">
					{/* ── Left column: Diagnosis + What's happening + Protocol ── */}
					<div className="md:flex-[1_1_0%]">
						{/* ── Section 1: Diagnosis reveal ── */}
						<section className="pt-12 md:pt-20 pb-12 md:pb-16 text-center md:text-left results-reveal">
							{/* Badge */}
							<div
								className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 md:mb-8"
								style={{
									backgroundColor: 'rgba(133, 210, 229, 0.12)',
									border: '1px solid rgba(133, 210, 229, 0.25)',
								}}>
								<div
									className="w-2 h-2 rounded-full"
									style={{ backgroundColor: '#85D2E5', boxShadow: '0 0 8px rgba(133,210,229,0.6)' }}
								/>
								<span
									className="font-[family-name:var(--font-heading)] font-semibold text-[13px] md:text-[14px] uppercase"
									style={{ color: '#85D2E5', letterSpacing: '1px' }}>
									{content.label}
								</span>
							</div>

							{/* Heading */}
							<h1
								className="font-[family-name:var(--font-heading)] font-bold text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] mb-5 md:mb-8"
								style={{ color: '#FCF8F9', letterSpacing: '-1.5px' }}>
								{content.heading}
							</h1>

							{/* Subtitle */}
							<p
								className="font-[family-name:var(--font-body)] font-normal text-[16px] md:text-[19px] max-w-[640px] mx-auto md:mx-0"
								style={{ lineHeight: '1.65', color: 'rgba(120, 163, 166, 0.85)' }}>
								{content.subtitle}
							</p>
						</section>

						{/* ── Section 2: What's happening ── */}
						<section
							className="rounded-2xl md:rounded-3xl p-6 md:p-10 mb-8 md:mb-12 results-reveal"
							style={{
								backgroundColor: 'rgba(255, 255, 255, 0.04)',
								border: '1px solid rgba(255, 255, 255, 0.06)',
								animationDelay: '0.15s',
							}}>
							<h2
								className="font-[family-name:var(--font-heading)] font-bold text-[18px] md:text-[22px] mb-4 md:mb-5"
								style={{ color: '#85D2E5', letterSpacing: '-0.5px' }}>
								What&apos;s happening
							</h2>
							<p
								className="font-[family-name:var(--font-body)] font-normal text-[15px] md:text-[17px]"
								style={{ lineHeight: '1.7', color: 'rgba(120, 163, 166, 0.75)' }}>
								{content.whatsHappening}
							</p>
						</section>

						{/* ── Section 3: Your protocol includes ── */}
						<section
							className="mb-28 md:mb-20 results-reveal"
							style={{ animationDelay: '0.3s' }}>
							<h2
								className="font-[family-name:var(--font-heading)] font-bold text-[22px] md:text-[28px] mb-6 md:mb-10 text-center md:text-left"
								style={{ color: '#FCF8F9', letterSpacing: '-1px' }}>
								Your 21-day Drift program includes
							</h2>

							<div className="flex flex-col gap-4 md:gap-5">
								{content.protocolIncludes.map((item, i) => (
									<div
										key={item.title}
										className="flex gap-4 md:gap-5 rounded-xl md:rounded-2xl p-5 md:p-7"
										style={{
											backgroundColor: 'rgba(255, 255, 255, 0.04)',
											border: '1px solid rgba(44, 102, 110, 0.2)',
										}}>
										{/* Numbered circle */}
										<div
											className="shrink-0 flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12"
											style={{
												backgroundColor: 'rgba(133, 210, 229, 0.1)',
												border: '1px solid rgba(133, 210, 229, 0.2)',
											}}>
											<span
												className="font-[family-name:var(--font-heading)] font-bold text-[14px] md:text-[16px]"
												style={{ color: '#85D2E5' }}>
												{String(i + 1).padStart(2, '0')}
											</span>
										</div>
										<div className="flex flex-col gap-1">
											<span
												className="font-[family-name:var(--font-heading)] font-semibold text-[16px] md:text-[18px]"
												style={{ color: '#FCF8F9', lineHeight: '24px' }}>
												{item.title}
											</span>
											<span
												className="font-[family-name:var(--font-body)] font-normal text-[14px] md:text-[15px]"
												style={{ color: 'rgba(120, 163, 166, 0.65)', lineHeight: '22px' }}>
												{item.description}
											</span>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>

					{/* ── Right column: fixed in viewport on desktop ── */}
					<div className="pb-28 md:pb-0 md:flex-[0_0_42%]">
						<div className="md:fixed md:top-0 md:h-screen md:flex md:items-center results-fixed-right">
						<div className="w-full">
							{/* ── CTA — above the fold ── */}
							<section
								className="text-center mb-6 md:mb-8 results-reveal"
								style={{ animationDelay: '0.15s' }}>
								<h2
									className="font-[family-name:var(--font-heading)] font-bold text-[22px] md:text-[28px] mb-3 md:mb-4"
									style={{ color: '#FCF8F9', letterSpacing: '-1px' }}>
									Ready to fix your sleep?
								</h2>
								<p
									className="font-[family-name:var(--font-body)] font-normal text-[14px] md:text-[16px] mb-5 md:mb-6"
									style={{ color: 'rgba(120, 163, 166, 0.7)', lineHeight: '1.6' }}>
									Your personalized program is ready. Choose a plan and start tonight.
								</p>

								{/* Desktop-only button (mobile uses sticky footer) */}
								<Link
									href={`/checkout?type=${sleepType}`}
									className="hidden md:inline-flex btn-primary items-center justify-center rounded-full px-10 py-4 font-[family-name:var(--font-heading)] font-bold text-[16px]"
									style={{ backgroundColor: '#85D2E5', color: '#002224' }}>
									Start Your Program — See Plans
								</Link>

								<p
									className="hidden md:block font-[family-name:var(--font-body)] font-normal text-[12px] mt-3"
									style={{ color: 'rgba(120, 163, 166, 0.5)' }}>
									7-day money-back guarantee. Cancel anytime.
								</p>
							</section>

							{/* ── Inline stats — single row, no card ── */}
							<div
								className="flex items-center justify-center gap-3 md:gap-5 mb-6 md:mb-8 results-reveal"
								style={{ animationDelay: '0.3s' }}>
								{STATS.map((stat, i) => (
									<div key={stat.label} className="flex items-center gap-3 md:gap-5">
										<div className="text-center">
											<span
												className="font-[family-name:var(--font-heading)] font-bold text-[18px] md:text-[22px] block"
												style={{ color: '#85D2E5', letterSpacing: '-0.5px', lineHeight: '1.2' }}>
												{stat.value}
											</span>
											<span
												className="font-[family-name:var(--font-body)] font-normal text-[10px] md:text-[12px]"
												style={{ color: 'rgba(120, 163, 166, 0.5)' }}>
												{stat.label}
											</span>
										</div>
										{i < STATS.length - 1 && (
											<div
												style={{
													width: '1px',
													height: '32px',
													backgroundColor: 'rgba(133, 210, 229, 0.15)',
												}}
											/>
										)}
									</div>
								))}
							</div>

							{/* ── Single testimonial ── */}
							<div
								className="rounded-xl p-4 md:p-5 results-reveal"
								style={{
									backgroundColor: 'rgba(255, 255, 255, 0.04)',
									border: '1px solid rgba(44, 102, 110, 0.2)',
									animationDelay: '0.45s',
								}}>
								<div className="flex gap-1 mb-2">
									{[...Array(5)].map((_, i) => (
										<svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#85D2E5">
											<path d="M8 0.5L9.79 5.73L15.31 6.18L11.13 9.77L12.44 15.15L8 12.35L3.56 15.15L4.87 9.77L0.69 6.18L6.21 5.73L8 0.5Z" />
										</svg>
									))}
								</div>
								<p
									className="font-[family-name:var(--font-body)] font-normal text-[13px] md:text-[14px] mb-3"
									style={{ lineHeight: '1.6', color: 'rgba(252, 248, 249, 0.8)' }}>
									&ldquo;{TESTIMONIALS[0].quote}&rdquo;
								</p>
								<div>
									<span
										className="font-[family-name:var(--font-heading)] font-semibold text-[13px]"
										style={{ color: '#FCF8F9' }}>
										{TESTIMONIALS[0].name}
									</span>
									<span
										className="font-[family-name:var(--font-body)] font-normal text-[11px] ml-2"
										style={{ color: 'rgba(133, 210, 229, 0.6)' }}>
										{TESTIMONIALS[0].type}
									</span>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</main>

			{/* ── Mobile sticky bottom CTA ── */}
			<div
				className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-5 pb-5 pt-3"
				style={{
					background: 'linear-gradient(0deg, #0A090C 60%, transparent 100%)',
				}}>
				<Link
					href={`/checkout?type=${sleepType}`}
					className="btn-primary flex items-center justify-center rounded-full w-full py-4 font-[family-name:var(--font-heading)] font-bold text-[16px]"
					style={{ backgroundColor: '#85D2E5', color: '#002224' }}>
					Start Your Program — See Plans
				</Link>
				<p
					className="font-[family-name:var(--font-body)] font-normal text-[11px] text-center mt-2"
					style={{ color: 'rgba(120, 163, 166, 0.5)' }}>
					7-day money-back guarantee
				</p>
			</div>
		</div>
	);
}
