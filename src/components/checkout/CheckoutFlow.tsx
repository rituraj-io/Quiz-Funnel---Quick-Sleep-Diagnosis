'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n';
import StripeCheckoutForm from './StripeCheckoutForm';

type SleepType = 'racing_mind' | 'low_recovery';
type PlanType = 'monthly' | 'annual';

export default function CheckoutFlow() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { t } = useTranslation();
	const sleepType: SleepType = searchParams.get('type') === 'low_recovery' ? 'low_recovery' : 'racing_mind';

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
			setError(t.checkout.paymentError);
		} finally {
			setLoading(false);
		}
	}, [t.checkout.paymentError]);

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
			<header className="animate-fade-up mx-auto max-w-[1280px] w-full px-5 md:px-8 pt-5 md:pt-6 pb-4" style={{ animationDelay: '0.1s' }}>
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
				<div className="animate-fade-up text-center pt-8 md:pt-14 mb-8 md:mb-12" style={{ animationDelay: '0.2s' }}>
					<span
						className="inline-block font-[family-name:var(--font-heading)] font-semibold text-[12px] md:text-[13px] uppercase mb-3"
						style={{ color: '#85D2E5', letterSpacing: '1.2px' }}>
						{t.checkout.diagnosisPrefix} {t.checkout.orderSleepLabel[sleepType]}
					</span>
					<h1
						className="font-[family-name:var(--font-heading)] font-bold text-[28px] md:text-[40px]"
						style={{ color: '#FCF8F9', letterSpacing: '-1.2px' }}>
						{t.checkout.heading}
					</h1>
				</div>

				<div className="max-w-[720px] mx-auto">
					{/* ── Plan cards ── */}
					<div className="animate-fade-up grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-10" style={{ animationDelay: '0.35s' }}>
						{(['monthly', 'annual'] as const).map(plan => {
							const info = t.checkout.plans[plan];
							const isSelected = selectedPlan === plan;
							const isRecommended = plan === 'annual';

							return (
								<button
									key={plan}
									type="button"
									onClick={() => handlePlanSelect(plan)}
									className="relative rounded-2xl p-6 md:p-8 text-start cursor-pointer transition-all duration-300"
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.05)',
										backdropFilter: 'blur(12px)',
										border: `2px solid ${isSelected ? '#85D2E5' : 'rgba(44, 102, 110, 0.2)'}`,
										boxShadow: isSelected
											? '0 12px 40px rgba(0, 0, 0, 0.2)'
											: '0 2px 8px rgba(0, 0, 0, 0.1)',
									}}>
									{/* Badge */}
									{plan === 'annual' && (
										<span
											className="absolute -top-3 end-5 font-[family-name:var(--font-heading)] font-bold text-[11px] uppercase px-3 py-1 rounded-full"
											style={{
												backgroundColor: '#85D2E5',
												color: '#002224',
												letterSpacing: '0.5px',
											}}>
											{t.checkout.plans.annual.badge}
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
											{info.name}
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
											className="font-[family-name:var(--font-body)] font-normal text-[14px] ms-1"
											style={{ color: '#78A3A6' }}>
											{t.checkout.perMonthSuffix}
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
						className="animate-fade-up rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 md:mb-8"
						style={{
							animationDelay: '0.5s',
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
								{t.checkout.orderHeading}
							</h3>
							<div className="flex justify-between items-start">
								<div>
									<p
										className="font-[family-name:var(--font-body)] font-medium text-[15px]"
										style={{ color: '#FCF8F9' }}>
										{t.checkout.orderTitle}
									</p>
									<p
										className="font-[family-name:var(--font-body)] font-normal text-[13px] mt-0.5"
										style={{ color: 'rgba(120, 163, 166, 0.8)' }}>
										{t.checkout.orderSleepLabel[sleepType]} · {t.checkout.plans[selectedPlan].perMonth}
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
									{t.checkout.tryAgain}
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
										{t.checkout.demoNotice}
									</p>
								</div>

								<button
									type="button"
									onClick={handleDemoSuccess}
									className="btn-primary w-full rounded-xl py-4 font-[family-name:var(--font-heading)] font-bold text-[16px] cursor-pointer"
									style={{ backgroundColor: '#85D2E5', color: '#002224' }}>
									{t.checkout.demoButton}
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
							{t.checkout.microText}
						</p>
					</div>

					{/* ── Trust signals ── */}
					<div className="animate-fade-up flex flex-wrap items-center justify-center gap-6 md:gap-10" style={{ animationDelay: '0.65s' }}>
						{t.checkout.trustSignals.map(signal => (
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
