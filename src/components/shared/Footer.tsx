'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { useTranslation } from '@/i18n';

const COLUMN_HREFS = [
	['/quiz', '/science', '/pricing'],
	['/about', '/community', '/press'],
	['/privacy', '/terms', '/cookies'],
];

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer style={{ backgroundColor: '#0A090C' }}>
			<ScrollReveal>
			<div className="mx-auto max-w-[1280px] px-5 md:px-8 py-12 md:py-20">
				{/* Top section */}
				<div className="grid grid-cols-2 gap-8 md:grid-cols-6 md:gap-12">
					{/* Brand — spans 2 columns */}
					<div className="col-span-2 flex flex-col gap-[23px]">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-2 w-fit">
							<Image
								src="/images/drift-logo-light.svg"
								alt="Drift logo"
								width={24}
								height={28}
								className="-scale-y-100"
								unoptimized
							/>
							<span
								className="font-[family-name:var(--font-heading)] font-bold text-[20px] leading-7 text-[#FCF8F9]"
								style={{ letterSpacing: '-1px' }}>
								Drift
							</span>
						</Link>

						{/* Description */}
						<p
							className="font-[family-name:var(--font-body)] font-normal text-[14px] max-w-[320px]"
							style={{
								lineHeight: '22.75px',
								color: 'rgba(228, 226, 227, 0.6)',
							}}>
							{t.footer.description}
						</p>
					</div>

					{/* Nav columns */}
					{t.footer.columns.map((col, colIndex) => (
						<div key={col.heading} className="col-span-1 flex flex-col gap-4 md:gap-6">
							<span className="font-[family-name:var(--font-heading)] font-bold text-[15px] md:text-[16px] leading-6 text-[#FCF8F9]">
								{col.heading}
							</span>
							<ul className="flex flex-col gap-3 md:gap-4">
								{col.links.map((link, linkIndex) => (
									<li key={link.label}>
										<Link
											href={COLUMN_HREFS[colIndex][linkIndex]}
											className="font-[family-name:var(--font-body)] font-normal text-[13px] md:text-[14px] leading-5 transition-opacity hover:opacity-80"
											style={{
												letterSpacing: '0.35px',
												color: 'rgba(228, 226, 227, 0.6)',
											}}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom bar */}
				<div className="mt-12 md:mt-20">
					<div
						className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 md:pt-8"
						style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
						{/* Copyright */}
						<p
							className="font-[family-name:var(--font-body)] font-normal text-[12px]"
							style={{
								letterSpacing: '0.3px',
								color: 'rgba(228, 226, 227, 0.4)',
							}}>
							{t.footer.copyright}
						</p>

						{/* Social icons */}
						<div className="flex items-center gap-6">
							<Link href="/" aria-label="Share">
								<Image
									src="/images/social-share.svg"
									alt="Share"
									width={20}
									height={24}
									className="-scale-y-100"
									unoptimized
								/>
							</Link>
							<Link href="/" aria-label="Email">
								<Image
									src="/images/social-email.svg"
									alt="Email"
									width={20}
									height={24}
									className="-scale-y-100"
									unoptimized
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			</ScrollReveal>
		</footer>
	);
}
