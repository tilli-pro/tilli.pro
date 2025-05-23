import HeroSection from '@/components/Docs/Introduction/HeroSection';
import DocumentationOverviewSection from '@/components/Docs/Introduction/DocumentationOverviewSection';
import TilliPayFeatureSection from '@/components/Docs/Introduction/TilliPayFeatureSection';
import ProductCapabilityWidgets from '@/components/Docs/Introduction/ProductCapabilityWidgets';
import ResourceHighlightsSection from '@/components/Docs/Introduction/ResourceHighlightsSection/ResourceHighlightsSection';
import DeveloperSupportLinks from '@/components/Docs/DeveloperSupportLinks';
import DocsPageFooter from '@/components/Docs/Footer';
import BackgroundWaveSVG from '@/components/LandingPage/assets/BackgroundWaveSVG';
import { Fragment } from 'react';

const sections = [
	<HeroSection key='hero' />,
	<DocumentationOverviewSection key='overview' />,
	<TilliPayFeatureSection key='tillipay' />,
	<ProductCapabilityWidgets key='widgets' />,
	<ResourceHighlightsSection key='resources' />,
	<DeveloperSupportLinks key='support' />,
];

export default function DocsPage() {
	return (
		<div className='relative'>
			<div className='@container space-y-20 py-20 z-20 relative text-brand-black'>
				{sections.map((Section) => (
					<Fragment key={Section.key}>
						{Section}
						<hr className='border-figma-gray-light my-20' />
					</Fragment>
				))}
				<DocsPageFooter />
			</div>

			<BackgroundWaveSVG className='absolute -top-270 size-full -right-0 z-0 pointer-events-none' />
		</div>
	);
}
