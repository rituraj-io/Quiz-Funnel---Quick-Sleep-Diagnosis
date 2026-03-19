'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from '@/i18n';

export default function HowItWorksSection() {
	const { ref, isVisible } = useScrollReveal(0.1);
	const { t } = useTranslation();

	return (
		<section ref={ref} className="py-16 md:py-[128px]" style={{ backgroundColor: 'var(--color-vista-white)' }}>
			<div className="mx-auto max-w-[1280px] px-5 md:px-8">
				{/* Heading */}
				<h2
					className={`text-center font-[family-name:var(--font-heading)] font-extrabold text-swamp text-[32px] leading-[34px] tracking-[-1.5px] md:text-[60px] md:leading-[60px] md:tracking-[-3px] reveal ${isVisible ? 'is-visible' : ''}`}>
					{t.howItWorks.heading}
				</h2>

				<div className="mt-12 md:mt-[96px]" />

				{/* Steps — staggered */}
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-[64px]">
					{t.howItWorks.steps.map((step, i) => (
						<div
							key={step.number}
							className={`relative isolate flex flex-col reveal ${isVisible ? 'is-visible' : ''}`}
							style={{ transitionDelay: `${200 + i * 150}ms` }}>
							<div className="relative">
								<div
									className="absolute bottom-0 left-0 h-[64px] w-[64px] rounded-full blur-[12px]"
									style={{ backgroundColor: 'rgba(133,210,229,0.1)' }}
									aria-hidden="true"
								/>
								<span
									className="relative font-[family-name:var(--font-heading)] font-bold select-none text-[48px] leading-[48px] md:text-[60px] md:leading-[60px]"
									style={{ color: 'rgba(133,210,229,0.4)' }}>
									{step.number}
								</span>
							</div>
							<div className="mt-5 md:mt-[32px]" />
							<h3
								className="font-[family-name:var(--font-heading)] font-bold text-swamp text-xl md:text-2xl"
								style={{ lineHeight: '32px' }}>
								{step.title}
							</h3>
							<div className="mt-3 md:mt-[16px]" />
							<p
								className="font-[family-name:var(--font-body)] font-normal text-cape-cod"
								style={{ fontSize: '16px', lineHeight: '26px' }}>
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
