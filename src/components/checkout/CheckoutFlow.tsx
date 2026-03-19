'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { SleepType } from '@/data/resultContent';
import StripeCheckoutForm from './StripeCheckoutForm';

type PlanType = 'monthly' | 'annual';

const PLANS: Record<PlanType, { price: string; perMonth: string; billed: string; badge?: string }> = {
	monthly: {
		price: '$14.99',
		perMonth: '$14.99/mo',
		billed: 'Billed monthly. Cancel anytime.',
	},
	annual: {
		price: '$7.99',
		perMonth: '$7.99/mo',
		billed: 'Billed as $95.88/year',
		badge: 'SAVE 47%',
	},
};

const TRUST_SIGNALS = [
	{ icon: 'lock', text: '256-bit SSL encryption' },
	{ icon: 'card', text: 'Powered by Stripe' },
	{ icon: 'check', text: '7-day money-back guarantee' },
];

export default function CheckoutFlow() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const sleepType: SleepType = searchParams.get('type') === 'low_recovery' ? 'low_recovery' : 'racing_mind';
	const sleepLabel = sleepType === 'racing_mind' ? 'Racing Mind' : 'Low Recovery';

	const [selectedPlan, setSelectedPlan] = useState<PlanType>('annual');
	const [clientSecret, setClientSecret] = useState<string | null>(null);
	const [isDemo, setIsDemo] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const createPaymentIntent = useCallback(async (plan: PlanType) => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch('/api/create-payment-intent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ planType: plan }),
			});
			const data = await res.json();

			if (data.error) {
				setError(data.error);
				return;
			}

			if (data.demo) {
				setIsDemo(true);
				setClientSecret(null);
			} else {
				setIsDemo(false);
				setClientSecret(data.clientSecret);
			}
		} catch {
			setError('Failed to connect to payment service.');
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		createPaymentIntent(selectedPlan);
	}, [selectedPlan, createPaymentIntent]);

	const handlePlanSelect = (plan: PlanType) => {
		setSelectedPlan(plan);
	};

	const handleDemoSuccess = () => {
		router.push(`/checkout/success?type=${sleepType}&plan=${selectedPlan}`);
	};

	const billedAmount = selectedPlan === 'monthly' ? '$14.99' : '$95.88';

	return (
		<div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0A090C 0%, #07393C 100%)' }}>
			{/* ── Header ── */}
			<header className="mx-auto max-w-[1280px] w-full px-5 md:px-8 pt-5 md:pt-6 pb-4">
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

			<main className="mx-auto max-w-[1280px] w-full px-5 md:px-8 pb-16 md:pb-24">
				{/* Page heading */}
				<div className="text-center pt-8 md:pt-14 mb-8 md:mb-12">
					<span
						className="inline-block font-[family-name:var(--font-heading)] font-semibold text-[12px] md:text-[13px] uppercase mb-3"
						style={{ color: '#85D2E5', letterSpacing: '1.2px' }}>
						Your diagnosis: {sleepLabel}
					</span>
					<h1
						className="font-[family-name:var(--font-heading)] font-bold text-[28px] md:text-[40px]"
						style={{ color: '#FCF8F9', letterSpacing: '-1.2px' }}>
						Choose your plan
					</h1>
				</div>

				<div className="max-w-[720px] mx-auto">
					{/* ── Plan cards ── */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-10">
						{(Object.keys(PLANS) as PlanType[]).map(plan => {
							const info = PLANS[plan];
							const isSelected = selectedPlan === plan;
							const isRecommended = plan === 'annual';

							return (
								<button
									key={plan}
									type="button"
									onClick={() => handlePlanSelect(plan)}
									className="relative rounded-2xl p-6 md:p-8 text-left cursor-pointer transition-all duration-300"
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.05)',
										backdropFilter: 'blur(12px)',
										border: `2px solid ${isSelected ? '#85D2E5' : 'rgba(44, 102, 110, 0.2)'}`,
										boxShadow: isSelected
											? '0 12px 40px rgba(0, 0, 0, 0.2)'
											: '0 2px 8px rgba(0, 0, 0, 0.1)',
									}}>
									{/* Badge */}
									{info.badge && (
										<span
											className="absolute -top-3 right-5 font-[family-name:var(--font-heading)] font-bold text-[11px] uppercase px-3 py-1 rounded-full"
											style={{
												backgroundColor: '#85D2E5',
												color: '#002224',
												letterSpacing: '0.5px',
											}}>
											{info.badge}
										</span>
									)}

									{/* Radio indicator */}
									<div className="flex items-center gap-3 mb-4">
										<div
											className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200"
											style={{
												borderColor: isSelected ? '#85D2E5' : 'rgba(120, 163, 166, 0.4)',
											}}>
											{isSelected && (
												<div
													className="w-2.5 h-2.5 rounded-full"
													style={{ backgroundColor: '#85D2E5' }}
												/>
											)}
										</div>
										<span
											className="font-[family-name:var(--font-heading)] font-semibold text-[14px] capitalize"
											style={{ color: 'rgba(120, 163, 166, 0.8)' }}>
											{plan}
										</span>
									</div>

									{/* Price */}
									<div className="mb-2">
										<span
											className="font-[family-name:var(--font-heading)] font-bold text-[32px] md:text-[40px]"
											style={{ color: '#FCF8F9', letterSpacing: '-1.5px' }}>
											{info.price}
										</span>
										<span
											className="font-[family-name:var(--font-body)] font-normal text-[14px] ml-1"
											style={{ color: '#78A3A6' }}>
											/month
										</span>
									</div>

									<p
										className="font-[family-name:var(--font-body)] font-normal text-[14px]"
										style={{ color: '#78A3A6' }}>
										{info.billed}
									</p>
								</button>
							);
						})}
					</div>

					{/* ── Order summary + Payment ── */}
					<div
						className="rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 md:mb-8"
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.04)',
							backdropFilter: 'blur(12px)',
							border: '1px solid rgba(44, 102, 110, 0.2)',
							boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
						}}>
						{/* Summary header */}
						<div
							className="pb-5 mb-5 md:pb-6 md:mb-6"
							style={{ borderBottom: '1px solid rgba(44, 102, 110, 0.2)' }}>
							<h3
								className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-3"
								style={{ color: '#FCF8F9' }}>
								Your order
							</h3>
							<div className="flex justify-between items-start">
								<div>
									<p
										className="font-[family-name:var(--font-body)] font-medium text-[15px]"
										style={{ color: '#FCF8F9' }}>
										Drift — 21-Day Sleep Program
									</p>
									<p
										className="font-[family-name:var(--font-body)] font-normal text-[13px] mt-0.5"
										style={{ color: 'rgba(120, 163, 166, 0.8)' }}>
										{sleepLabel} · {PLANS[selectedPlan].perMonth}
									</p>
								</div>
								<span
									className="font-[family-name:var(--font-heading)] font-bold text-[18px]"
									style={{ color: '#FCF8F9' }}>
									{billedAmount}
								</span>
							</div>
						</div>

						{/* Payment form area */}
						{loading ? (
							<div className="flex items-center justify-center py-12">
								<div
									className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin"
									style={{ borderColor: '#85D2E5', borderTopColor: 'transparent' }}
								/>
							</div>
						) : error ? (
							<div className="text-center py-8">
								<p
									className="font-[family-name:var(--font-body)] text-[15px] mb-3"
									style={{ color: '#EF4444' }}>
									{error}
								</p>
								<button
									type="button"
									onClick={() => createPaymentIntent(selectedPlan)}
									className="font-[family-name:var(--font-heading)] font-semibold text-[14px] underline cursor-pointer"
									style={{ color: '#85D2E5' }}>
									Try again
								</button>
							</div>
						) : isDemo ? (
							/* ── Demo mode: no Stripe keys ── */
							<div>
								<div
									className="rounded-xl p-4 mb-5"
									style={{
										backgroundColor: 'rgba(133, 210, 229, 0.06)',
										border: '1px solid rgba(133, 210, 229, 0.15)',
									}}>
									<p
										className="font-[family-name:var(--font-body)] font-normal text-[13px]"
										style={{ color: 'rgba(120, 163, 166, 0.8)', lineHeight: '1.5' }}>
										Demo mode — Stripe keys not configured. Payment will be simulated.
									</p>
								</div>

								<button
									type="button"
									onClick={handleDemoSuccess}
									className="btn-primary w-full rounded-xl py-4 font-[family-name:var(--font-heading)] font-bold text-[16px] cursor-pointer"
									style={{ backgroundColor: '#85D2E5', color: '#002224' }}>
									Start My Program (Demo)
								</button>
							</div>
						) : clientSecret ? (
							/* ── Live Stripe form ── */
							<StripeCheckoutForm
								clientSecret={clientSecret}
								sleepType={sleepType}
								selectedPlan={selectedPlan}
							/>
						) : null}

						{/* Micro text */}
						<p
							className="font-[family-name:var(--font-body)] font-normal text-[12px] text-center mt-4"
							style={{ color: 'rgba(120, 163, 166, 0.6)' }}>
							7-day money-back guarantee · Cancel anytime · Secure payment via Stripe
						</p>
					</div>

					{/* ── Trust signals ── */}
					<div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
						{TRUST_SIGNALS.map(signal => (
							<div key={signal.text} className="flex items-center gap-2">
								<TrustIcon type={signal.icon} />
								<span
									className="font-[family-name:var(--font-body)] font-normal text-[12px] md:text-[13px]"
									style={{ color: 'rgba(120, 163, 166, 0.7)' }}>
									{signal.text}
								</span>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

function TrustIcon({ type }: { type: string }) {
	const color = 'rgba(120, 163, 166, 0.7)';
	if (type === 'lock') {
		return (
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect x="3" y="7" width="10" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
				<path d="M5 7V5a3 3 0 0 1 6 0v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		);
	}
	if (type === 'card') {
		return (
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect x="1" y="3.5" width="14" height="9" rx="1.5" stroke={color} strokeWidth="1.5" />
				<line x1="1" y1="6.75" x2="15" y2="6.75" stroke={color} strokeWidth="1.5" />
			</svg>
		);
	}
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.5" />
			<path
				d="M5 8.5L7 10.5L11 6"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
