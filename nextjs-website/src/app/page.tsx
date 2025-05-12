import Footer from '@/components/Footer';
import Section1 from '@/components/LandingPage/components/Section1';
import TenantLogos from '@/components/LandingPage/components/TenantLogos';

export default async function LandingPage() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Section1 />
			<TenantLogos />

			<Footer />
		</main>
	);
}
