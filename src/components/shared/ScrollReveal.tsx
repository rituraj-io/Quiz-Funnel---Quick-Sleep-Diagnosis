'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * A wrapper that applies a fade-up reveal animation when the element scrolls into view.
 * Children inside can use `delay-100`, `delay-200`, etc. for stagger effects.
 */
export default function ScrollReveal({
	children,
	className = '',
	delay = '',
}: {
	children: React.ReactNode;
	className?: string;
	delay?: string;
}) {
	const { ref, isVisible } = useScrollReveal(0.1);

	return (
		<div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${delay} ${className}`}>
			{children}
		</div>
	);
}
