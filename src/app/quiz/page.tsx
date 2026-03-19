import type { Metadata } from 'next';
import QuizFlow from '@/components/quiz/QuizFlow';

export const metadata: Metadata = {
	title: 'Sleep Quiz — Drift',
	description: 'Take a 2-minute quiz to discover your sleep type and get a personalized 21-day protocol.',
};

export default function QuizPage() {
	return <QuizFlow />;
}
