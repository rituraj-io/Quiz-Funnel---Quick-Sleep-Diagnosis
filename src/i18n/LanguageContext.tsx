'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Translations } from './types';
import { en } from './translations/en';
import { ru } from './translations/ru';
import { ar } from './translations/ar';

export type Locale = 'en' | 'ru' | 'ar';

const TRANSLATIONS: Record<Locale, Translations> = { en, ru, ar };

const STORAGE_KEY = 'drift-lang';

type LanguageContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Translations;
};

const LanguageContext = createContext<LanguageContextValue>({
	locale: 'en',
	setLocale: () => {},
	t: en,
});

function getInitialLocale(): Locale {
	if (typeof window === 'undefined') return 'en';
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'ru' || stored === 'ar') return stored;
	} catch {}
	return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

	const setLocale = (newLocale: Locale) => {
		setLocaleState(newLocale);
		try {
			localStorage.setItem(STORAGE_KEY, newLocale);
		} catch {}
	};

	// Sync <html> attributes when locale changes
	useEffect(() => {
		const html = document.documentElement;
		html.lang = locale;
		html.dir = locale === 'ar' ? 'rtl' : 'ltr';

		html.classList.remove('font-arabic', 'font-russian');
		if (locale === 'ar') {
			html.classList.add('font-arabic');
		} else if (locale === 'ru') {
			html.classList.add('font-russian');
		}
	}, [locale]);

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t: TRANSLATIONS[locale] }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useTranslation() {
	return useContext(LanguageContext);
}
