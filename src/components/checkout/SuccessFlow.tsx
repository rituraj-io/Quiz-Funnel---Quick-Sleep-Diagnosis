'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { SleepType } from '@/data/resultContent';

const NEXT_STEPS = [
	{
		step: '01',
		title: 'Check your email',
		description: 'Your login and program access link are on the way.',
	},
	{
		step: '02',
		title: 'Start tonight',
		description: 'Begin Day 1 of your wind-down routine — takes 15 minutes.',
	},
	{
		step: '03',
		title: 'Log tomorrow morning',
		description: 'Record your first sleep journal entry when you wake up.',
	},
];

export default function SuccessFlow() {
	const searchParams = useSearchParams();
	const sleepType: SleepType = searchParams.get('type') === 'low_recovery' ? 'low_recovery' : 'racing_mind';
	const sleepLabel = sleepType === 'racing_mind' ? 'Racing Mind' : 'Low Recovery';

	return (
		<div
			className="min-h-screen relative overflow-hidden"
			style={{ background: 'linear-gradient(180deg, #0A090C 0%, #07393C 100%)' }}>
			{/* Ambient particles / glow */}
			<div
				className="absolute pointer-events-none"
				style={{
					width: '500px',
					height: '500px',
					top: '5%',
					left: '50%',
					transform: 'translateX(-50%)',
					background: 'radial-gradient(circle, rgba(133,210,229,0.1) 0%, transparent 60%)',
					filter: 'blur(60px)',
				}}
			/>

			{/* Floating orbs */}
			{[...Array(6)].map((_, i) => (
				<div
					key={i}
					className="absolute rounded-full pointer-events-none"
					style={{
						width: `${4 + i * 2}px`,
						height: `${4 + i * 2}px`,
						backgroundColor: 'rgba(133, 210, 229, 0.3)',
						top: `${15 + i * 12}%`,
						left: `${20 + (i % 3) * 25}%`,
						animation: `successFloat ${3 + i * 0.5}s ease-in-out ${i * 0.4}s infinite alternate`,
					}}
				/>
			))}

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
			<main className="relative z-10 mx-auto max-w-[640px] w-full px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24 text-center">
				{/* Animated checkmark */}
				<div className="mx-auto mb-8 md:mb-10 success-checkmark">
					<div
						className="mx-auto flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24"
						style={{
							background: 'linear-gradient(135deg, #4ADE80 0%, #85D2E5 100%)',
							boxShadow: '0 0 60px rgba(74, 222, 128, 0.25)',
						}}>
						<svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="md:w-11 md:h-11">
							<path
								d="M8 18L15 25L28 11"
								stroke="#002224"
								strokeWidth="3.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="success-check-path"
							/>
						</svg>
					</div>
				</div>

				{/* Heading */}
				<h1
					className="font-[family-name:var(--font-heading)] font-bold text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] mb-4 md:mb-5 success-reveal"
					style={{ color: '#FCF8F9', letterSpacing: '-1.5px', animationDelay: '0.3s' }}>
					You&apos;re in. Let&apos;s fix your sleep.
				</h1>

				<p
					className="font-[family-name:var(--font-body)] font-normal text-[16px] md:text-[18px] mb-10 md:mb-14 success-reveal"
					style={{ color: 'rgba(120, 163, 166, 0.8)', lineHeight: '1.6', animationDelay: '0.45s' }}>
					Your personalized 21-day protocol is ready. Here&apos;s what happens next:
				</p>

				{/* Next steps */}
				<div className="flex flex-col gap-4 md:gap-5 mb-10 md:mb-14 text-left">
					{NEXT_STEPS.map((item, i) => (
						<div
							key={item.step}
							className="flex gap-4 md:gap-5 rounded-xl md:rounded-2xl p-5 md:p-6 success-reveal"
							style={{
								backgroundColor: 'rgba(255, 255, 255, 0.04)',
								border: '1px solid rgba(44, 102, 110, 0.2)',
								animationDelay: `${0.6 + i * 0.12}s`,
							}}>
							<div
								className="shrink-0 flex items-center justify-center rounded-full w-10 h-10"
								style={{
									backgroundColor: 'rgba(133, 210, 229, 0.1)',
									border: '1px solid rgba(133, 210, 229, 0.2)',
								}}>
								<span
									className="font-[family-name:var(--font-heading)] font-bold text-[14px]"
									style={{ color: '#85D2E5' }}>
									{item.step}
								</span>
							</div>
							<div>
								<p
									className="font-[family-name:var(--font-heading)] font-semibold text-[16px] md:text-[17px] mb-0.5"
									style={{ color: '#FCF8F9' }}>
									{item.title}
								</p>
								<p
									className="font-[family-name:var(--font-body)] font-normal text-[14px]"
									style={{ color: 'rgba(120, 163, 166, 0.65)', lineHeight: '1.5' }}>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Sleep type reminder */}
				<div
					className="rounded-xl p-5 md:p-6 mb-8 md:mb-10 text-center success-reveal"
					style={{
						backgroundColor: 'rgba(133, 210, 229, 0.06)',
						border: '1px solid rgba(133, 210, 229, 0.15)',
						animationDelay: '0.96s',
					}}>
					<span
						className="font-[family-name:var(--font-heading)] font-semibold text-[13px] uppercase block mb-1"
						style={{ color: '#85D2E5', letterSpacing: '1px' }}>
						Your sleep type
					</span>
					<span
						className="font-[family-name:var(--font-heading)] font-bold text-[20px] md:text-[24px]"
						style={{ color: '#FCF8F9' }}>
						{sleepLabel}
					</span>
					<p
						className="font-[family-name:var(--font-body)] font-normal text-[13px] md:text-[14px] mt-2"
						style={{ color: 'rgba(120, 163, 166, 0.6)', lineHeight: '1.5' }}>
						Your protocol has been built around this diagnosis. Everything you see is tailored to you.
					</p>
				</div>

				{/* CTA */}
				<div className="success-reveal" style={{ animationDelay: '1.1s' }}>
					<Link
						href="/"
						className="btn-primary inline-flex items-center justify-center rounded-full px-10 py-4 font-[family-name:var(--font-heading)] font-bold text-[16px]"
						style={{ backgroundColor: '#85D2E5', color: '#002224' }}>
						Go to Your Program
					</Link>

					<p
						className="font-[family-name:var(--font-body)] font-normal text-[12px] mt-4"
						style={{ color: 'rgba(120, 163, 166, 0.4)' }}>
						Questions? Reach us at support@getdrift.co
					</p>
				</div>
			</main>
		</div>
	);
}
