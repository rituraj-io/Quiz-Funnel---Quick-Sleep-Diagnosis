'use client';

import Image from 'next/image';
import { useTranslation } from '@/i18n';

export default function WhatYouGetSection() {
	const { t } = useTranslation();

	return (
		<section style={{ backgroundColor: '#07393C' }}>
			<div className="mx-auto max-w-[1280px] px-5 md:px-8 py-16 md:py-32">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Left column */}
					<div className="flex flex-col justify-center">
						{/* Heading */}
						<h2
							className="font-[family-name:var(--font-heading)] font-bold text-[32px] leading-[34px] md:text-[48px] md:leading-[48px]"
							style={{ color: '#FCF8F9' }}>
							{t.whatYouGet.heading}
						</h2>

						{/* Gap */}
						<div className="h-8 md:h-12" />

						{/* Feature list */}
						<div className="flex flex-col gap-6 md:gap-8">
							{t.whatYouGet.features.map(feature => (
								<div key={feature.title} className="flex flex-row gap-3 md:gap-4">
									{/* Check icon */}
									<div className="mt-0.5 shrink-0">
										<Image
											src="/images/check-circle.svg"
											alt=""
											width={24}
											height={28}
											className="-scale-y-100"
										/>
									</div>

									{/* Text block */}
									<div className="flex flex-col">
										<p
											className="font-[family-name:var(--font-heading)] font-bold text-lg md:text-xl"
											style={{
												lineHeight: '28px',
												color: '#FCF8F9',
											}}>
											{feature.title}
										</p>
										<p
											className="font-[family-name:var(--font-body)] font-normal"
											style={{
												fontSize: '16px',
												lineHeight: '26px',
												color: '#78A3A6',
											}}>
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right column */}
					<div className="flex items-center justify-center relative">
						{/* Blurred teal background circle */}
						<div
							className="absolute rounded-full opacity-30 hidden lg:block"
							style={{
								width: '384px',
								height: '384px',
								filter: 'blur(50px)',
								background: 'linear-gradient(135deg, #002224, #2C666E)',
								top: '-32px',
								right: '-32px',
							}}
						/>

						{/* Glassmorphic card */}
						<div
							className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full"
							style={{
								backdropFilter: 'blur(32px)',
								WebkitBackdropFilter: 'blur(32px)',
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								border: '1px solid rgba(255, 255, 255, 0.1)',
								padding: '20px',
							}}>
							{/* Card image */}
							<div className="relative rounded-xl md:rounded-2xl overflow-hidden">
								<Image
									src="/images/what-you-get-3d.png"
									alt="Drift sleep wellness 3D visual"
									width={512}
									height={512}
									className="rounded-xl md:rounded-2xl w-full h-auto"
									style={{ mixBlendMode: 'saturation' }}
									sizes="(max-width: 768px) 100vw, 512px"
								/>
								{/* Overlay */}
								<div
									className="absolute inset-0 rounded-xl md:rounded-2xl"
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.08)',
										boxShadow: 'inset 0 0 40px rgba(0,0,0,0.3)',
									}}
								/>
							</div>

							{/* Below image */}
							<div className="flex flex-row items-center justify-between mt-5 md:mt-8">
								{/* Left side */}
								<div className="flex flex-col gap-1">
									<span
										className="font-[family-name:var(--font-heading)] font-normal uppercase text-[11px] md:text-[12px]"
										style={{
											letterSpacing: '1.2px',
											color: '#85D2E5',
										}}>
										{t.whatYouGet.cardLabel}
									</span>
									<span
										className="font-[family-name:var(--font-body)] font-bold text-base md:text-lg"
										style={{
											lineHeight: '28px',
											color: '#FCF8F9',
										}}>
										{t.whatYouGet.cardTitle}
									</span>
								</div>

								{/* Circle badge */}
								<div
									className="flex items-center justify-center rounded-full shrink-0 w-11 h-11 md:w-12 md:h-12"
									style={{
										border: '2px solid #85D2E5',
									}}>
									<span
										className="font-[family-name:var(--font-body)] font-bold text-sm md:text-base"
										style={{ color: '#85D2E5' }}>
										88%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
