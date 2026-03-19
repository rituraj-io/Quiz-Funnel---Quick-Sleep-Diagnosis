'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import type { SleepType } from '@/data/resultContent';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
	? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
	: null;

function PaymentForm({ sleepType, selectedPlan }: { sleepType: SleepType; selectedPlan: string }) {
	const stripe = useStripe();
	const elements = useElements();
	const router = useRouter();
	const [processing, setProcessing] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!stripe || !elements) return;

		setProcessing(true);
		setError(null);

		const { error: submitError } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${window.location.origin}/checkout/success?type=${sleepType}&plan=${selectedPlan}`,
			},
			redirect: 'if_required',
		});

		if (submitError) {
			setError(submitError.message ?? 'Payment failed. Please try again.');
			setProcessing(false);
		} else {
			router.push(`/checkout/success?type=${sleepType}&plan=${selectedPlan}`);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement
				options={{
					layout: 'tabs',
					fields: {
						billingDetails: {
							address: 'auto',
						},
					},
				}}
			/>

			{error && (
				<p className="font-[family-name:var(--font-body)] text-[14px] mt-3" style={{ color: '#EF4444' }}>
					{error}
				</p>
			)}

			<button
				type="submit"
				disabled={!stripe || processing}
				className="btn-primary w-full rounded-xl py-4 mt-5 font-[family-name:var(--font-heading)] font-bold text-[16px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
				style={{ backgroundColor: '#85D2E5', color: '#002224' }}>
				{processing ? 'Processing...' : 'Start My Program'}
			</button>
		</form>
	);
}

export default function StripeCheckoutForm({
	clientSecret,
	sleepType,
	selectedPlan,
}: {
	clientSecret: string;
	sleepType: SleepType;
	selectedPlan: string;
}) {
	if (!stripePromise) {
		return (
			<p
				className="font-[family-name:var(--font-body)] text-[14px] text-center py-8"
				style={{ color: '#78A3A6' }}>
				Stripe publishable key not configured.
			</p>
		);
	}

	return (
		<Elements
			stripe={stripePromise}
			options={{
				clientSecret,
				appearance: {
					theme: 'night',
					variables: {
						colorPrimary: '#85D2E5',
						colorText: '#FCF8F9',
						colorBackground: 'rgba(10, 9, 12, 0.8)',
						colorDanger: '#EF4444',
						fontFamily: 'system-ui, sans-serif',
						borderRadius: '10px',
					},
				},
			}}>
			<PaymentForm sleepType={sleepType} selectedPlan={selectedPlan} />
		</Elements>
	);
}
