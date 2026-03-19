'use client';

import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from '@/i18n';

// ── Count-up hook ──
function useCountUp(end: number, duration: number, start: boolean, decimals = 0) {
	const [value, setValue] = useState(0);
	const rafRef = useRef<number | null>(null);

	const animate = useCallback(() => {
		const startTime = performance.now();
		function tick(now: number) {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			// ease-out cubic
			const eased = 1 - Math.pow(1 - progress, 3);
			setValue(parseFloat((eased * end).toFixed(decimals)));
			if (progress < 1) {
				rafRef.current = requestAnimationFrame(tick);
			}
		}
		rafRef.current = requestAnimationFrame(tick);
	}, [end, duration, decimals]);

	useEffect(() => {
		if (start) animate();
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [start, animate]);

	return value;
}

// ── Stat with count-up ──
function AnimatedStat({
	end,
	decimals,
	suffix,
	label,
	isVisible,
	fontSize,
	lineHeight,
}: {
	end: number;
	decimals?: number;
	suffix: string;
	label: string;
	isVisible: boolean;
	fontSize: string;
	lineHeight: string;
}) {
	const count = useCountUp(end, 1800, isVisible, decimals ?? 0);

	const formatted =
		decimals && decimals > 0
			? count.toFixed(decimals)
			: count >= 1000
				? Math.round(count).toLocaleString()
				: Math.round(count).toString();

	return (
		<div className="flex flex-col items-center gap-2">
			<span
				className="font-[family-name:var(--font-heading)] text-center tabular-nums"
				style={{ fontWeight: 800, fontSize, lineHeight, color: '#002224' }}>
				{formatted}
				{suffix}
			</span>
			<span
				className="font-[family-name:var(--font-heading)] text-center"
				style={{ fontWeight: 600, fontSize: '16px', lineHeight: '24px', color: '#2C666E' }}>
				{label}
			</span>
		</div>
	);
}

function StarRow() {
	return (
		<div className="flex flex-row items-center gap-1">
			{Array.from({ length: 5 }).map((_, i) => (
				<Image
					key={i}
					src="/images/star-filled.svg"
					alt="star"
					width={24}
					height={28}
					className="-scale-y-100 w-5 h-6 md:w-6 md:h-7"
					unoptimized
				/>
			))}
		</div>
	);
}

function Divider({ className = '' }: { className?: string }) {
	return <div className={className} style={{ backgroundColor: 'rgba(192,200,200,0.3)', flexShrink: 0 }} />;
}

export default function SocialProofSection() {
	const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal(0.1);
	const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.15);
	const { t } = useTranslation();

	return (
		<section className="w-full" style={{ backgroundColor: '#FCF8F9' }}>
			<div className="mx-auto max-w-[1280px] px-5 md:px-8 py-16 md:py-32">
				{/* Testimonials */}
				<div ref={testimonialsRef} className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
					{t.socialProof.testimonials.map((testimonial, i) => (
						<div
							key={i}
							className={`flex flex-col reveal ${testimonialsVisible ? 'is-visible' : ''}`}
							style={{ transitionDelay: `${i * 150}ms` }}>
							<StarRow />
							<div className="h-4 md:h-[21px]" />
							<p
								className="font-[family-name:var(--font-heading)] text-base md:text-xl"
								style={{ fontWeight: 500, lineHeight: '1.6', color: '#1B1B1C' }}>
								{testimonial.quote}
							</p>
							<div className="h-4 md:h-6" />
							<p
								className="font-[family-name:var(--font-body)] uppercase text-xs md:text-sm"
								style={{ fontWeight: 400, letterSpacing: '0.7px', color: '#404849' }}>
								{testimonial.attribution}
							</p>
						</div>
					))}
				</div>

				<div className="h-16 md:h-32" />

				{/* Stat Bar */}
				<div
					ref={statsRef}
					className={`rounded-2xl md:rounded-3xl py-10 md:py-16 px-6 md:px-12 reveal ${statsVisible ? 'is-visible' : ''}`}
					style={{ backgroundColor: '#F6F3F4' }}>
					{/* Desktop */}
					<div className="hidden md:flex items-center justify-evenly">
						<AnimatedStat
							end={12000}
							suffix="+"
							label={t.socialProof.stats.activeSleepers}
							isVisible={statsVisible}
							fontSize="56px"
							lineHeight="56px"
						/>
						<Divider className="w-px h-16" />
						<AnimatedStat
							end={4.8}
							decimals={1}
							suffix="/5"
							label={t.socialProof.stats.appStoreRating}
							isVisible={statsVisible}
							fontSize="56px"
							lineHeight="56px"
						/>
						<Divider className="w-px h-16" />
						<AnimatedStat
							end={92}
							suffix="%"
							label={t.socialProof.stats.betterRecovery}
							isVisible={statsVisible}
							fontSize="56px"
							lineHeight="56px"
						/>
					</div>

					{/* Mobile */}
					<div className="flex md:hidden flex-col items-center gap-8">
						<AnimatedStat
							end={12000}
							suffix="+"
							label={t.socialProof.stats.activeSleepers}
							isVisible={statsVisible}
							fontSize="40px"
							lineHeight="40px"
						/>
						<Divider className="h-px w-24" />
						<AnimatedStat
							end={4.8}
							decimals={1}
							suffix="/5"
							label={t.socialProof.stats.appStoreRating}
							isVisible={statsVisible}
							fontSize="40px"
							lineHeight="40px"
						/>
						<Divider className="h-px w-24" />
						<AnimatedStat
							end={92}
							suffix="%"
							label={t.socialProof.stats.betterRecovery}
							isVisible={statsVisible}
							fontSize="40px"
							lineHeight="40px"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
