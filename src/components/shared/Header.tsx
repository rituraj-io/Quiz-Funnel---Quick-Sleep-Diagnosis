'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
	const { t } = useTranslation();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// Close menu when clicking outside
	useEffect(() => {
		if (!menuOpen) return;

		function handleClick(e: MouseEvent) {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target as Node)
			) {
				setMenuOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [menuOpen]);

	// Close on escape key
	useEffect(() => {
		if (!menuOpen) return;
		function handleKey(e: KeyboardEvent) {
			if (e.key === 'Escape') setMenuOpen(false);
		}
		document.addEventListener('keydown', handleKey);
		return () => document.removeEventListener('keydown', handleKey);
	}, [menuOpen]);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	return (
		<header
			className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-[12px] animate-slide-down"
			style={{ boxShadow: '0px 20px 40px rgba(0, 34, 36, 0.06)' }}>
			<div className="mx-auto max-w-[1280px] px-5 md:px-8 py-2 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/images/drift-logo.svg"
						alt="Drift logo"
						width={24}
						height={28}
						className="-scale-y-100"
					/>
					<span className="font-[family-name:var(--font-heading)] font-bold text-[24px] leading-none tracking-[-1.2px] text-onyx">
						Drift
					</span>
				</Link>

				{/* Desktop nav links */}
				<nav className="hidden md:flex items-center gap-8">
					<Link
						href="/"
						className="font-[family-name:var(--font-heading)] font-bold text-[16px] leading-[24px] text-dark-teal">
						{t.header.home}
					</Link>
					<Link
						href="/science"
						className="font-[family-name:var(--font-heading)] font-normal text-[16px] leading-[24px] text-stormy-teal opacity-70">
						{t.header.science}
					</Link>
					<Link
						href="/community"
						className="font-[family-name:var(--font-heading)] font-normal text-[16px] leading-[24px] text-stormy-teal opacity-70">
						{t.header.community}
					</Link>
				</nav>

				{/* Desktop language switcher + CTA */}
				<div className="hidden md:flex items-center gap-4">
					<LanguageSwitcher />
					<Link
						href="/quiz"
						className="btn-primary inline-flex font-[family-name:var(--font-heading)] font-semibold text-[16px] text-white bg-dark-teal px-6 py-3 rounded-full">
						{t.header.takeQuiz}
					</Link>
				</div>

				{/* Mobile hamburger button */}
				<button
					ref={buttonRef}
					type="button"
					className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}>
					<span
						className="block h-[2px] w-6 bg-[#0A090C] rounded-full transition-all duration-300 ease-in-out"
						style={{
							transform: menuOpen ? 'rotate(45deg) translateY(0px)' : 'rotate(0deg) translateY(-4px)',
						}}
					/>
					<span
						className="block h-[2px] w-6 bg-[#0A090C] rounded-full transition-all duration-300 ease-in-out"
						style={{
							opacity: menuOpen ? 0 : 1,
						}}
					/>
					<span
						className="block h-[2px] w-6 bg-[#0A090C] rounded-full transition-all duration-300 ease-in-out"
						style={{
							transform: menuOpen ? 'rotate(-45deg) translateY(0px)' : 'rotate(0deg) translateY(4px)',
						}}
					/>
				</button>
			</div>

			{/* Mobile menu overlay */}
			<div
				ref={menuRef}
				className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
				style={{
					maxHeight: menuOpen ? '400px' : '0px',
					opacity: menuOpen ? 1 : 0,
				}}>
				<nav className="flex flex-col gap-1 px-5 pb-6 pt-2 bg-white/95 backdrop-blur-[12px]">
					<Link
						href="/"
						className="font-[family-name:var(--font-heading)] font-bold text-[16px] leading-[24px] text-dark-teal py-3"
						onClick={() => setMenuOpen(false)}>
						{t.header.home}
					</Link>
					<Link
						href="/science"
						className="font-[family-name:var(--font-heading)] font-normal text-[16px] leading-[24px] text-stormy-teal py-3"
						onClick={() => setMenuOpen(false)}>
						{t.header.science}
					</Link>
					<Link
						href="/community"
						className="font-[family-name:var(--font-heading)] font-normal text-[16px] leading-[24px] text-stormy-teal py-3"
						onClick={() => setMenuOpen(false)}>
						{t.header.community}
					</Link>
					<div className="py-3">
						<LanguageSwitcher />
					</div>
					<Link
						href="/quiz"
						className="btn-primary mt-2 text-center font-[family-name:var(--font-heading)] font-semibold text-[16px] text-white bg-dark-teal px-6 py-3 rounded-full"
						onClick={() => setMenuOpen(false)}>
						{t.header.takeQuiz}
					</Link>
				</nav>
			</div>
		</header>
	);
}
