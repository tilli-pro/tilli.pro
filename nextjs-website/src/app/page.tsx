import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section1 from '@/components/LandingPage/Section1';

export default async function LandingPage() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Header />

			<Section1 />

			<Footer />
		</main>
	);
}
