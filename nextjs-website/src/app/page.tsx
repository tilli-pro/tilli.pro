import Footer from '@/components/Footer';
import Section1 from '@/components/LandingPage/Section1';
import Section2 from '@/components/LandingPage/Section2';
export default async function LandingPage() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Section1 />
			<Section2 />

			<Footer />
		</main>
	);
}
