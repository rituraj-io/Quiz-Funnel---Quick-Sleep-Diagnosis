import Header from '@/components/shared/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import WhatYouGetSection from '@/components/landing/WhatYouGetSection';
import SocialProofSection from '@/components/landing/SocialProofSection';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTASection from '@/components/landing/FinalCTASection';
import Footer from '@/components/shared/Footer';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<ProblemSection />
				<HowItWorksSection />

				<ScrollReveal>
					<WhatYouGetSection />
				</ScrollReveal>

				<SocialProofSection />

				<ScrollReveal>
					<FAQSection />
				</ScrollReveal>

				<ScrollReveal>
					<FinalCTASection />
				</ScrollReveal>
			</main>

			<ScrollReveal>
				<Footer />
			</ScrollReveal>
		</>
	);
}
