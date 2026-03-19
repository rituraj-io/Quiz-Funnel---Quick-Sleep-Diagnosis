import type { Metadata } from 'next';
import { Suspense } from 'react';
import ResultsFlow from '@/components/results/ResultsFlow';

export const metadata: Metadata = {
	title: 'Your Sleep Diagnosis — Drift',
	description: 'Your personalized sleep type diagnosis and 21-day protocol.',
};

export default function ResultsPage() {
	return (
		<Suspense>
			<ResultsFlow />
		</Suspense>
	);
}
