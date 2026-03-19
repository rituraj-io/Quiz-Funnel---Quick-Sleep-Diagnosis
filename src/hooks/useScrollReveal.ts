'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean `isVisible`.
 * Once the element enters the viewport, `isVisible` becomes true permanently.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
	const ref = useRef<T>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(el);
				}
			},
			{ threshold }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);

	return { ref, isVisible };
}
