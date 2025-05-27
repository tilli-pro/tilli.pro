import Card from './Card';
import { popularGuides, popularRepos, quickLinks } from './data';

export default function ResourceHighlightsSection() {
	return (
		<section className='px-4 @sm:px-6 @lg:px-10 py-10 @sm:py-16 @lg:py-20 mx-auto grid grid-cols-1 @3xl:grid-cols-2 @6xl:grid-cols-3 gap-6 @xl:gap-8 @6xl:gap-10'>
			<Card title='A Quick Link Title' subtitle='Quick Link' items={quickLinks} />
			<Card title='Popular guides' subtitle='Most visited docs' items={popularGuides} />
			<Card title='Popular repos' subtitle='@tillihq on GitHub' items={popularRepos} />
		</section>
	);
}
