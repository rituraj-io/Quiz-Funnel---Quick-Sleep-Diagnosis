'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from '@/i18n';

const cardIcons = [
	{ icon: '/images/icon-racing-mind.svg', iconAlt: 'Racing mind icon' },
	{ icon: '/images/icon-low-recovery.svg', iconAlt: 'Low recovery icon' },
];

export default function ProblemSection() {
	const { ref, isVisible } = useScrollReveal(0.1);
	const { t } = useTranslation();

	return (
		<section ref={ref} className="bg-[#F6F3F4] py-16 md:py-32">
			<div className="mx-auto max-w-[1280px] px-5 md:px-8">
				{/* Header */}
				<div className={`flex flex-col gap-4 md:gap-6 reveal ${isVisible ? 'is-visible' : ''}`}>
					<h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold leading-[1.1] md:leading-[48px] text-[#002224]">
						{t.problem.heading}
					</h2>
					<p className="font-[family-name:var(--font-body)] text-base md:text-lg font-normal leading-7 text-[#2C666E] max-w-[576px]">
						{t.problem.subtitle}
					</p>
				</div>

				<div className="mt-10 md:mt-20" />

				{/* Cards grid — staggered reveal */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
					{t.problem.cards.map((card, i) => (
						<div
							key={card.title}
							className={`flex flex-col rounded-2xl md:rounded-3xl bg-white p-7 md:p-12 reveal ${isVisible ? 'is-visible' : ''}`}
							style={{ transitionDelay: `${200 + i * 150}ms` }}>
							<div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl md:rounded-3xl bg-[#07393C]">
								<Image
									src={cardIcons[i].icon}
									alt={cardIcons[i].iconAlt}
									width={30}
									height={36}
									className="-scale-y-100 w-6 h-7 md:w-[30px] md:h-9"
								/>
							</div>
							<div className="mt-5 md:mt-6" />
							<h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-[30px] font-bold leading-8 md:leading-9 text-[#002224]">
								{card.title}
							</h3>
							<div className="mt-4 md:mt-[23px]" />
							<p className="font-[family-name:var(--font-body)] text-base md:text-lg font-normal leading-7 md:leading-[29.25px] text-[#404849]">
								{card.description}
							</p>
							<div className="mt-auto pt-6 md:pt-8">
								<a
									href="#"
									className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-base font-semibold text-[#2C666E]">
									{card.linkText}
									<Image
										src="/images/arrow-right-small.svg"
										alt=""
										width={14}
										height={16}
										className="-scale-y-100 rtl-flip"
										aria-hidden="true"
									/>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
