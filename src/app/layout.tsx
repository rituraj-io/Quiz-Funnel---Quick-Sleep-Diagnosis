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
