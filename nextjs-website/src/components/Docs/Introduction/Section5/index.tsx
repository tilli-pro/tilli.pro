import Card from './Card';
import { popularGuides, popularRepos, quickLinks } from './data';

export default function Section5() {
	return (
		<section className='w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				<Card title='A Quick Link Title' subtitle='Quick Link' items={quickLinks} />
				<Card title='Popular guides' subtitle='Most visited docs' items={popularGuides} />
				<Card title='Popular repos' subtitle='@tillihq on GitHub' items={popularRepos} />
			</div>
		</section>
	);
}
