import HeroSection from '@/components/Docs/Introduction/HeroSection';
import DocumentationOverviewSection from '@/components/Docs/Introduction/DocumentationOverviewSection';
import TilliPayFeatureSection from '@/components/Docs/Introduction/TilliPayFeatureSection';
import ProductCapabilityWidgets from '@/components/Docs/Introduction/ProductCapabilityWidgets';
import ResourceHighlightsSection from '@/components/Docs/Introduction/Section5/ResourceHighlightsSection';
import DeveloperSupportLinks from '@/components/Docs/DeveloperSupportLinks';
import DocsPageFooter from '@/components/Docs/Footer';
import BackgroundWaveSVG from '@/components/LandingPage/assets/BackgroundWaveSVG';

export default function DocsPage() {
	return (
		<div className='relative'>
			<div className='pt-10 space-y-20 py-20 z-20 relative'>
				<HeroSection />
				<DocumentationOverviewSection />
				<hr className='border-[#F4F4F4] my-20' />
				<TilliPayFeatureSection />
				<hr className='border-[#F4F4F4] my-20' />
				<ProductCapabilityWidgets />
				<hr className='border-[#F4F4F4] my-20' />
				<ResourceHighlightsSection />
				<hr className='border-[#F4F4F4] my-20' />
				<DeveloperSupportLinks />
				<hr className='border-foreground-muted' />
				<DocsPageFooter />
			</div>
			<BackgroundWaveSVG className='absolute -top-270 size-full -right-0 z-0 pointer-events-none' />
		</div>
	);
}
