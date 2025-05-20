import AboutHero from '@/components/About/Hero';
import OurMission from '@/components/About/OurMission';
import OurStory from '@/components/About/OurStory';
import ProductValuesSection from '@/components/About/ProductValuesSection';
import TeamIdentitySection from '@/components/About/TeamIdentitySection';
import WhatWeDo from '@/components/About/WhatWeDo';

export default async function AboutPage() {
	return (
		<main className='min-h-screen @container flex flex-col px-12 xl:px-32 py-14 space-y-60'>
			<AboutHero />
			<ProductValuesSection />
			<OurMission />
			<WhatWeDo />
			<TeamIdentitySection />
			<OurStory />
		</main>
	);
}
