'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n';

export default function FinalCTASection() {
	const { t } = useTranslation();

	return (
		<section className="relative w-full overflow-hidden bg-[#002224] py-16 md:py-[128px] px-5 md:px-6">
			{/* Subtle radial glow */}
			<div
				className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#85D2E5] opacity-10"
				style={{
					width: '800px',
					height: '800px',
					filter: 'blur(100px)',
				}}
				aria-hidden="true"
			/>

			{/* Content */}
			<div className="relative mx-auto flex max-w-[896px] flex-col items-center text-center">
				{/* Heading */}
				<h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[#FCF8F9] text-[40px] leading-[42px] tracking-[-2px] md:text-[72px] md:leading-[72px] md:tracking-[-3.6px]">
					{t.finalCta.heading}
				</h2>

				{/* Gap */}
				<div className="mt-5 md:mt-8" />

				{/* Subtitle */}
				<p
					className="max-w-[576px] pb-4 font-[family-name:var(--font-body)] font-normal text-base md:text-xl"
					style={{
						lineHeight: '1.5',
						color: 'rgba(120,163,166,0.8)',
					}}>
					{t.finalCta.subtitle}
				</p>

				{/* CTA button */}
				<Link
					href="/quiz"
					className="btn-primary rounded-full bg-[#FCF8F9] px-8 py-4 font-[family-name:var(--font-heading)] font-bold text-[#002224] text-base md:text-lg"
					style={{ lineHeight: '28px' }}>
					{t.finalCta.button}
				</Link>

				{/* Gap */}
				<div className="mt-6 md:mt-8" />

				{/* Micro-text */}
				<p
					className="font-[family-name:var(--font-body)] font-normal text-xs md:text-sm"
					style={{
						color: 'rgba(120,163,166,0.4)',
					}}>
					{t.finalCta.microText}
				</p>
			</div>
		</section>
	);
}
