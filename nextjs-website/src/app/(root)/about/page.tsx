import AboutHero from '@/components/About/Hero';
import LeadershipTeam from '@/components/About/LeadershipTeam';
import TeamEvolutionSection from '@/components/About/TeamEvolutionSection';
import OurMission from '@/components/About/OurMission';
import OurStory from '@/components/About/OurStory';
import ProductValuesSection from '@/components/About/ProductValuesSection';
import TeamIdentitySection from '@/components/About/TeamIdentitySection';
import WhatWeDo from '@/components/About/WhatWeDo';
import TimelineCarousel from '@/components/About/TimelineCarousel';
import JoinUsSection from '@/components/About/JoinUsSection';
import InfoCardsSection from '@/components/About/InfoCardsSection';

export default async function AboutPage() {
	return (
		<main className='min-h-screen @container flex flex-col px-12 xl:px-32 py-14 space-y-60'>
			<AboutHero />
			<ProductValuesSection />
			<OurMission />
			<WhatWeDo />
			<TeamIdentitySection />
			<OurStory />
			<LeadershipTeam />
			<TeamEvolutionSection />
			<TimelineCarousel />
			<div className='space-y-30'>
				<JoinUsSection />
				<InfoCardsSection />
			</div>
		</main>
	);
}
