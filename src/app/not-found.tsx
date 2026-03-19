'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n';

export default function NotFound() {
	const { t } = useTranslation();

	return (
		<main className="relative min-h-screen w-full bg-gradient-to-b from-[#0A090C] to-[#07393C] flex flex-col items-center justify-center px-5 overflow-hidden">
			{/* Ambient decorative orbs */}
			<div
				className="pointer-events-none absolute top-[15%] left-[10%] w-[260px] h-[260px] rounded-full blur-[120px] opacity-20"
				style={{ background: '#90DDF0' }}
			/>
			<div
				className="pointer-events-none absolute bottom-[10%] right-[8%] w-[340px] h-[340px] rounded-full blur-[140px] opacity-15"
				style={{ background: '#07393C' }}
			/>

			<div className="relative z-10 flex flex-col items-center text-center max-w-[560px]">
				{/* Large 404 display */}
				<span
					className="animate-fade-up font-[family-name:var(--font-heading)] font-extrabold text-[120px] leading-none tracking-[-4px] md:text-[180px] md:tracking-[-6px]"
					style={{
						animationDelay: '0.2s',
						background: 'linear-gradient(180deg, rgba(252,248,249,0.15) 0%, rgba(133,210,229,0.08) 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}>
					404
				</span>

				{/* Heading */}
				<h1
					className="animate-fade-up font-[family-name:var(--font-heading)] font-bold text-[28px] leading-[34px] tracking-[-0.6px] md:text-[40px] md:leading-[46px] md:tracking-[-1px] mt-2"
					style={{ animationDelay: '0.4s' }}>
					<span className="text-[#FCF8F9]">{t.notFound.headingWhite}</span>
					<br />
					<span className="text-[#85D2E5]">{t.notFound.headingBlue}</span>
				</h1>

				{/* Body copy */}
				<p
					className="animate-fade-up font-[family-name:var(--font-body)] font-normal text-base md:text-lg max-w-[420px] mt-5 md:mt-6"
					style={{
						lineHeight: '1.5',
						color: 'rgba(120, 163, 166, 0.8)',
						animationDelay: '0.6s',
					}}>
					{t.notFound.body}
				</p>

				{/* CTA */}
				<div className="animate-fade-up mt-8 md:mt-10" style={{ animationDelay: '0.8s' }}>
					<Link
						href="/"
						className="btn-primary inline-block rounded-full px-8 py-4 bg-[#85D2E5] text-[#002224] font-[family-name:var(--font-heading)] font-bold text-base md:text-lg">
						{t.notFound.button}
					</Link>
				</div>
			</div>
		</main>
	);
}
