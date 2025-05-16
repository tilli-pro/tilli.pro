import Section1 from '@/components/Docs/Introduction/Section1';
import Section2 from '@/components/Docs/Introduction/Section2';
import Section3 from '@/components/Docs/Introduction/Section3';
import Section4 from '@/components/Docs/Introduction/Section4';
import Section5 from '@/components/Docs/Introduction/Section5';
import Section6 from '@/components/Docs/Introduction/Section6';
import DocsPageFooter from '@/components/Docs/Footer';
import BackgroundWaveSVG from '@/components/LandingPage/assets/BackgroundWaveSVG';

export default function DocsPage() {
	return (
		<div className='relative'>
			<div className='pt-10 space-y-20 py-20 z-20 relative'>
				<Section1 />
				<Section2 />
				<hr className='border-[#F4F4F4] my-20' />
				<Section3 />
				<hr className='border-[#F4F4F4] my-20' />
				<Section4 />
				<hr className='border-[#F4F4F4] my-20' />
				<Section5 />
				<hr className='border-[#F4F4F4] my-20' />
				<Section6 />
				<hr className='border-foreground-muted' />
				<DocsPageFooter />
			</div>
			<BackgroundWaveSVG className='absolute -top-270 size-full -right-0 z-0 pointer-events-none' />
		</div>
	);
}
