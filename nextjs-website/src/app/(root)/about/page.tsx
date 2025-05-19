import AboutHero from '@/components/About/Hero';
import OurMission from '@/components/About/OurMission';
import ProductValuesSection from '@/components/About/ProductValuesSection';
import WhatWeDo from '@/components/About/WhatWeDo';
export default async function AboutPage() {
	return (
		<main className='min-h-screen @container flex flex-col px-12 xl:px-32 py-14 space-y-60'>
			<AboutHero />
			<ProductValuesSection />

			<OurMission />
			<WhatWeDo />
		</main>
	);
}
