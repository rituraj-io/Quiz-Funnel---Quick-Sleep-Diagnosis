'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation, type Locale } from '@/i18n';

const LANGUAGES: { code: Locale; label: string; short: string }[] = [
	{ code: 'en', label: 'English', short: 'EN' },
	{ code: 'ru', label: 'Русский', short: 'RU' },
	{ code: 'ar', label: 'العربية', short: 'AR' },
];

export default function LanguageSwitcher() {
	const { locale, setLocale } = useTranslation();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	// Close on outside click
	useEffect(() => {
		if (!open) return;
		function handleClick(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [open]);

	// Close on Escape
	useEffect(() => {
		if (!open) return;
		function handleKey(e: KeyboardEvent) {
			if (e.key === 'Escape') setOpen(false);
		}
		document.addEventListener('keydown', handleKey);
		return () => document.removeEventListener('keydown', handleKey);
	}, [open]);

	const current = LANGUAGES.find(l => l.code === locale)!;

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="flex items-center gap-1.5 text-stormy-teal cursor-pointer font-[family-name:var(--font-heading)] font-semibold text-[14px] leading-none"
				aria-label="Switch language"
				aria-expanded={open}>
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round">
					<circle cx="12" cy="12" r="10" />
					<path d="M2 12h20" />
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
				</svg>
				{current.short}
			</button>

			<div
				className="absolute top-full mt-2 end-0 z-[60] min-w-[160px] rounded-xl bg-white/95 backdrop-blur-[12px] py-1.5 transition-all duration-200"
				style={{
					boxShadow: '0px 20px 40px rgba(0, 34, 36, 0.06)',
					opacity: open ? 1 : 0,
					transform: open ? 'translateY(0)' : 'translateY(-4px)',
					pointerEvents: open ? 'auto' : 'none',
				}}>
				{LANGUAGES.map(lang => (
					<button
						key={lang.code}
						type="button"
						onClick={() => {
							setLocale(lang.code);
							setOpen(false);
						}}
						className={`w-full flex items-center justify-between px-4 py-2 text-start font-[family-name:var(--font-heading)] text-[14px] leading-[20px] cursor-pointer transition-colors hover:bg-black/[0.03] ${
							locale === lang.code
								? 'font-semibold text-dark-teal'
								: 'font-normal text-stormy-teal opacity-70'
						}`}>
						<span>
							{lang.label} <span className="opacity-50">({lang.short})</span>
						</span>
						{locale === lang.code && (
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round">
								<polyline points="20 6 9 17 4 12" />
							</svg>
						)}
					</button>
				))}
			</div>
		</div>
	);
}
