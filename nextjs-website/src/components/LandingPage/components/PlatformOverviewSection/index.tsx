import PlatformOverviewSectionLeft from './PlatformOverviewSectionLeft';
import PlatformOverviewSectionRight from './PlatformOverviewSectionRight';

export default function PlatformOverviewSection() {
	return (
		<section className='lg:p-44 p-22 flex flex-col sm:flex-row md:gap-10 gap-10 items-center justify-between'>
			<PlatformOverviewSectionLeft />
			<PlatformOverviewSectionRight />
		</section>
	);
}
