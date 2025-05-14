import Section1 from '@/components/Docs/Introduction/Section1';
import Section2 from '@/components/Docs/Introduction/Section2';
import Section3 from '@/components/Docs/Introduction/Section3';

export default function DocsPage() {
	return (
		<div className='pt-10'>
			<Section1 />
			<Section2 />
			<Section3 />
		</div>
	);
}
