import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: '--font-plus-jakarta-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

const manrope = Manrope({
	variable: '--font-manrope',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Drift — Sleep better in 21 nights',
	description:
		'Drift identifies the root pattern behind your restless nights — then gives you a personalized 21-day protocol to fix it.',
	metadataBase: new URL('https://drift-sleep.vercel.app'),
	keywords: [
		'sleep quiz',
		'sleep diagnosis',
		'sleep architecture',
		'sleep improvement',
		'21-day sleep protocol',
		'personalized sleep plan',
	],
	openGraph: {
		title: 'Drift — Sleep better in 21 nights',
		description:
			'Identify your unique Sleep Architecture and get a personalized path to deep, restorative rest.',
		url: 'https://drift-sleep.vercel.app',
		siteName: 'Drift',
		images: [
			{
				url: '/images/drift-homepage.png',
				width: 1200,
				height: 630,
				alt: 'Drift — Your sleep problems aren\'t random',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Drift — Sleep better in 21 nights',
		description:
			'Identify your unique Sleep Architecture and get a personalized path to deep, restorative rest.',
		images: ['/images/drift-homepage.png'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${plusJakartaSans.variable} ${manrope.variable}`}>
			<body className="min-h-screen antialiased">{children}</body>
		</html>
	);
}
