'use client';

import { useState } from 'react';
import { useTranslation } from '@/i18n';

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const { t } = useTranslation();

	function toggle(index: number) {
		setOpenIndex(openIndex === index ? null : index);
	}

	return (
		<section className="w-full bg-white py-16 md:py-[128px] px-5 md:px-6">
			<div className="mx-auto max-w-[768px]">
				{/* Heading */}
				<h2
					className="text-center font-[family-name:var(--font-heading)] font-bold text-[#002224] text-2xl md:text-4xl"
					style={{ lineHeight: '1.2' }}>
					{t.faq.heading}
				</h2>

				{/* Gap */}
				<div className="mt-10 md:mt-16" />

				{/* FAQ list */}
				<ul className="flex flex-col gap-6">
					{t.faq.items.map((faq, index) => {
						const isOpen = openIndex === index;
						return (
							<li
								key={index}
								className="pb-5 md:pb-[25px]"
								style={{ borderBottom: '1px solid rgba(192,200,200,0.3)' }}>
								{/* Question row */}
								<button
									type="button"
									className="flex w-full cursor-pointer items-center justify-between gap-4 text-start"
									onClick={() => toggle(index)}
									aria-expanded={isOpen}>
									<span
										className="font-[family-name:var(--font-body)] font-bold text-[#002224] text-base md:text-xl"
										style={{ lineHeight: '1.4' }}>
										{faq.question}
									</span>
									{/* Plus/Minus icon */}
									<span
										className="relative flex h-7 w-6 shrink-0 items-center justify-center"
										aria-hidden="true">
										<span className="absolute h-[2px] w-[16px] rounded-full bg-[#2C666E] transition-transform duration-300 ease-in-out" />
										<span
											className="absolute h-[2px] w-[16px] rounded-full bg-[#2C666E] transition-transform duration-300 ease-in-out"
											style={{
												transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
											}}
										/>
									</span>
								</button>

								{/* Answer — CSS grid row trick for smooth height animation */}
								<div
									className="grid transition-[grid-template-rows] duration-300 ease-in-out"
									style={{
										gridTemplateRows: isOpen ? '1fr' : '0fr',
									}}>
									<div className="overflow-hidden">
										<p
											className="pt-4 font-[family-name:var(--font-body)] font-normal text-[#404849] text-sm md:text-base"
											style={{ lineHeight: '26px' }}>
											{faq.answer}
										</p>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
