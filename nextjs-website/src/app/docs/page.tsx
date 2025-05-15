import Section1 from '@/components/Docs/Introduction/Section1';
import Section2 from '@/components/Docs/Introduction/Section2';
import Section3 from '@/components/Docs/Introduction/Section3';
import Section4 from '@/components/Docs/Introduction/Section4';
import Section5 from '@/components/Docs/Introduction/Section5';
import Section6 from '@/components/Docs/Introduction/Section6';
import DocsPageFooter from '@/components/Docs/Footer';

export default function DocsPage() {
	return (
		<div className='pt-10 px-2 space-y-10 py-20'>
			<Section1 />
			<Section2 />
			<Section3 />
			<hr className='border-[#F4F4F4] my-20' />
			<Section4 />
			<Section5 />
			<Section6 />
			<hr />
			<DocsPageFooter />
		</div>
	);
}
