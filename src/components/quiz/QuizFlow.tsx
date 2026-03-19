'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { quizQuestions } from '@/data/quizQuestions';
import { useTranslation } from '@/i18n';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizFlow() {
	const router = useRouter();
	const { t, locale } = useTranslation();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
	const [slideDirection, setSlideDirection] = useState<'enter-right' | 'enter-left' | null>(null);
	const [isAnimating, setIsAnimating] = useState(false);

	const question = t.quiz.questions[currentIndex];
	const selectedOption = answers[currentIndex];
	const isFirstQuestion = currentIndex === 0;
	const isLastQuestion = currentIndex === quizQuestions.length - 1;

	// Progress: filled segments = answered questions up to current
	const answeredCount = answers.filter(a => a !== null).length;
	const progress = (answeredCount / quizQuestions.length) * 100;

	const handleSelect = useCallback(
		(optionIndex: number) => {
			if (isAnimating) return;
			setAnswers(prev => {
				const next = [...prev];
				next[currentIndex] = optionIndex;
				return next;
			});
		},
		[currentIndex, isAnimating]
	);

	const animateTo = useCallback(
		(nextIndex: number, direction: 'enter-right' | 'enter-left') => {
			if (isAnimating) return;
			setIsAnimating(true);
			setSlideDirection(direction === 'enter-right' ? 'enter-left' : 'enter-right');

			setTimeout(() => {
				setCurrentIndex(nextIndex);
				setSlideDirection(direction);
				requestAnimationFrame(() => {
					setTimeout(() => {
						setSlideDirection(null);
						setIsAnimating(false);
					}, 50);
				});
			}, 300);
		},
		[isAnimating]
	);

	const handleContinue = useCallback(() => {
		if (selectedOption === null || isAnimating) return;

		if (!isLastQuestion) {
			animateTo(currentIndex + 1, locale === 'ar' ? 'enter-left' : 'enter-right');
		} else {
			// Calculate final scores
			let rm = 0;
			let lr = 0;
			answers.forEach((ansIdx, qIdx) => {
				if (ansIdx !== null) {
					rm += quizQuestions[qIdx].options[ansIdx].rm;
					lr += quizQuestions[qIdx].options[ansIdx].lr;
				}
			});
			const resultType = lr > rm ? 'low_recovery' : 'racing_mind';
			router.push(`/results?type=${resultType}&rm=${rm}&lr=${lr}`);
		}
	}, [selectedOption, isAnimating, isLastQuestion, currentIndex, answers, animateTo, router, locale]);

	const handleBack = useCallback(() => {
		if (isFirstQuestion || isAnimating) return;
		animateTo(currentIndex - 1, locale === 'ar' ? 'enter-right' : 'enter-left');
	}, [isFirstQuestion, isAnimating, currentIndex, animateTo, locale]);

	return (
		<div
			className="min-h-dvh flex flex-col relative overflow-hidden"
			style={{ background: 'linear-gradient(180deg, #002224 0%, #07393C 100%)' }}>
			{/* Ambient background blurs */}
			<div
				className="absolute rounded-full pointer-events-none"
				style={{
					width: '384px',
					height: '384px',
					top: '25%',
					right: '-80px',
					background: 'rgba(133, 210, 229, 0.05)',
					filter: 'blur(60px)',
				}}
			/>
			<div
				className="absolute rounded-full pointer-events-none"
				style={{
					width: '384px',
					height: '384px',
					bottom: '25%',
					left: '-80px',
					background: 'rgba(7, 57, 60, 0.2)',
					filter: 'blur(60px)',
				}}
			/>

			{/* Top bar: logo + progress */}
			<div
				className="animate-fade-up relative z-10 mx-auto max-w-[1280px] w-full px-5 md:px-8 pt-5 md:pt-6 pb-4"
				style={{ animationDelay: '0.1s' }}>
				{/* Logo */}
				<div className="flex items-center justify-between mb-6 md:mb-8">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/images/drift-logo-light.svg"
							alt="Drift logo"
							width={20}
							height={24}
							className="-scale-y-100"
							unoptimized
						/>
						<span
							className="font-[family-name:var(--font-heading)] font-bold text-[18px] leading-none"
							style={{ color: '#FCF8F9', letterSpacing: '-0.9px' }}>
							Drift
						</span>
					</Link>

					{/* Question counter */}
					<span
						className="font-[family-name:var(--font-body)] font-normal text-[14px]"
						style={{ color: 'rgba(120, 163, 166, 0.6)' }}>
						{currentIndex + 1} {t.quiz.of} {quizQuestions.length}
					</span>
				</div>

				{/* Progress bar */}
				<div
					className="w-full rounded-full overflow-hidden"
					style={{ height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
					<div
						className="h-full rounded-full"
						style={{
							width: `${progress}%`,
							backgroundColor: '#90DDF0',
							transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
						}}
					/>
				</div>
			</div>

			{/* Main content area */}
			<div
				className="animate-fade-up flex-1 flex flex-col items-center justify-center relative z-10 mx-auto max-w-[1280px] w-full px-5 md:px-8 pb-8"
				style={{ animationDelay: '0.3s' }}>
				{/* Question container with animation */}
				<div
					className="w-full max-w-[1024px] quiz-slide"
					style={{
						opacity: slideDirection ? 0 : 1,
						transform:
							slideDirection === 'enter-right'
								? 'translateX(60px)'
								: slideDirection === 'enter-left'
									? 'translateX(-60px)'
									: 'translateX(0)',
						transition:
							slideDirection === null
								? 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
								: 'opacity 0.25s ease-out, transform 0.25s ease-out',
					}}>
					{/* Question heading */}
					<div className="text-center mb-8 md:mb-12">
						<h1
							className="font-[family-name:var(--font-heading)] font-semibold text-[28px] leading-[34px] md:text-[48px] md:leading-[52px] lg:text-[60px] lg:leading-[64px] mb-4 md:mb-6"
							style={{ color: '#FFFFFF', letterSpacing: '-1.5px' }}>
							{question.question}
						</h1>
						<p
							className="font-[family-name:var(--font-body)] font-normal text-[15px] md:text-[17px]"
							style={{ color: 'rgba(120, 163, 166, 0.8)', lineHeight: '28px' }}>
							{question.subtext}
						</p>
					</div>

					{/* Options grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 max-w-[1024px] mx-auto">
						{question.options.map((option, idx) => {
							const isSelected = selectedOption === idx;
							return (
								<button
									key={`${currentIndex}-${idx}`}
									type="button"
									onClick={() => handleSelect(idx)}
									className="group relative flex items-center gap-4 md:gap-6 rounded-xl overflow-hidden text-start cursor-pointer px-5 py-5 md:px-8 md:py-7 transition-all duration-300"
									style={{
										backgroundColor: isSelected
											? 'rgba(7, 57, 60, 0.4)'
											: 'rgba(255, 255, 255, 0.05)',
										border: `1px solid ${isSelected ? 'rgba(133, 210, 229, 0.4)' : 'rgba(44, 102, 110, 0.2)'}`,
										boxShadow: isSelected ? '0px 20px 40px rgba(0, 34, 36, 0.1)' : 'none',
									}}>
									{/* Letter circle */}
									<div
										className="shrink-0 flex items-center justify-center rounded-full transition-colors duration-300"
										style={{
											width: '48px',
											height: '48px',
											backgroundColor: isSelected ? '#85D2E5' : '#07393C',
											border: isSelected ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
										}}>
										<span
											className="font-[family-name:var(--font-heading)] font-bold text-[16px] transition-colors duration-300"
											style={{
												color: isSelected ? '#002224' : 'rgba(133, 210, 229, 0.6)',
											}}>
											{OPTION_LETTERS[idx]}
										</span>
									</div>

									{/* Option text */}
									<span
										className="font-[family-name:var(--font-heading)] font-medium text-[15px] md:text-[17px] leading-[24px] flex-1"
										style={{ color: '#FFFFFF' }}>
										{option}
									</span>

									{/* Check indicator */}
									<div
										className="shrink-0 transition-opacity duration-300"
										style={{ opacity: isSelected ? 1 : 0 }}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="#85D2E5" />
											<path
												d="M7 12.5L10.5 16L17 9"
												stroke="#002224"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</button>
							);
						})}
					</div>
				</div>

				{/* Navigation buttons */}
				<div
					className="w-full max-w-[1024px] mt-8 md:mt-12 flex items-center"
					style={{ justifyContent: isFirstQuestion ? 'flex-end' : 'space-between' }}>
					{/* Back button — hidden on Q1 */}
					{!isFirstQuestion && (
						<button
							type="button"
							onClick={handleBack}
							disabled={isAnimating}
							className="flex items-center gap-2 bg-transparent border-none font-[family-name:var(--font-heading)] font-semibold text-[15px] md:text-[16px] cursor-pointer transition-opacity duration-200 hover:opacity-100 disabled:opacity-40"
							style={{ color: 'rgba(252, 248, 249, 0.8)' }}>
							<Image
								src="/images/arrow-right.svg"
								alt=""
								width={20}
								height={24}
								className="-scale-y-100 rotate-180 rtl-flip"
								unoptimized
							/>
							{t.quiz.back}
						</button>
					)}

					{/* Continue button */}
					<button
						type="button"
						onClick={handleContinue}
						disabled={selectedOption === null || isAnimating}
						className="font-[family-name:var(--font-heading)] font-bold text-[15px] md:text-[16px] px-10 py-3 md:px-12 md:py-4 rounded-xl cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
						style={{
							backgroundColor: selectedOption !== null ? '#85D2E5' : 'rgba(133, 210, 229, 0.3)',
							color: '#002224',
							boxShadow: selectedOption !== null ? '0px 20px 40px rgba(144, 221, 240, 0.15)' : 'none',
						}}>
						{isLastQuestion ? t.quiz.seeResults : t.quiz.continue}
					</button>
				</div>
			</div>
		</div>
	);
}
