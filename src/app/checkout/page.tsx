import type { Metadata } from 'next';
import { Suspense } from 'react';
import CheckoutFlow from '@/components/checkout/CheckoutFlow';

export const metadata: Metadata = {
	title: 'Choose Your Plan — Drift',
	description: 'Start your personalized 21-day sleep protocol.',
};

export default function CheckoutPage() {
	return (
		<Suspense>
			<CheckoutFlow />
		</Suspense>
	);
}
