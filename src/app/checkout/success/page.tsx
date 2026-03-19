import type { Metadata } from 'next';
import { Suspense } from 'react';
import SuccessFlow from '@/components/checkout/SuccessFlow';

export const metadata: Metadata = {
	title: "You're In — Drift",
	description: 'Your personalized 21-day sleep protocol is ready.',
};

export default function SuccessPage() {
	return (
		<Suspense>
			<SuccessFlow />
		</Suspense>
	);
}
