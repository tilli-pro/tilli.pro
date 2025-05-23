import InfoCard from './InfoCard';
import { cards, infoCards } from './card-data';
import LinkCard from './LinkCard';

export default function DocumentationOverviewSection() {
	return (
		<div className='px-4 sm:px-6 lg:px-10 py-20 space-y-6 z-30'>
			<h2 className='text-3xl @md:text-4xl @xl:text-5xl'>tilli Documentation</h2>

			<div className='grid grid-cols-1 @3xl:grid-cols-2 @4xl:grid-cols-3 gap-6'>
				{cards.map((card) => (
					<LinkCard key={card.label} {...card} />
				))}
			</div>

			<div className='grid grid-cols-1 @3xl:grid-cols-2 @4xl:grid-cols-3 gap-6'>
				{infoCards.map((card) => (
					<InfoCard key={card.title} {...card} />
				))}
			</div>
		</div>
	);
}
