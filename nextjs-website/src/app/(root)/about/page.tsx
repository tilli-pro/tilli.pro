import AboutHero from '@/components/About/Hero';
import ProductValuesSection from '@/components/About/ProductValuesSection';

export default async function AboutPage() {
	return (
		<main className='min-h-screen @container flex flex-col px-12 xl:px-32 py-14 space-y-20'>
			<AboutHero />
			<ProductValuesSection />
		</main>
	);
}
