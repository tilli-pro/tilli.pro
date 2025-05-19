import HeroSection from '@/components/LandingPage/components/HeroSection';
import TenantLogos from '@/components/LandingPage/components/TenantLogos';
import PlatformOverviewSection from '@/components/LandingPage/components/PlatformOverviewSection';
import WelcomePopover from '@/components/WelcomePopover';

export default async function LandingPage() {
	return (
		<main className='min-h-screen flex flex-col'>
			<HeroSection />
			<TenantLogos />
			<PlatformOverviewSection />

			<WelcomePopover />
		</main>
	);
}
