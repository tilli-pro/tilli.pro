import InfoCard from './InfoCard';
import { cards, infoCards } from './card-data';
import LinkCard from './LinkCard';

export default function Section2() {
	return (
		<div className='text-black px-4 sm:px-6 lg:px-10 space-y-6'>
			<h2 className='text-3xl sm:text-4xl lg:text-5xl'>tilli Documentation</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				{cards.map((card) => (
					<LinkCard key={card.label} {...card} />
				))}
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				{infoCards.map((card) => (
					<InfoCard key={card.title} {...card} />
				))}
			</div>
		</div>
	);
}
