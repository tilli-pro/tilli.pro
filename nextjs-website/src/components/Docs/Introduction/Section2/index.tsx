import InfoCard from './InfoCard';
import { cards, infoCards } from './card-data';
import LinkCard from './LinkCard';

export default function Section2() {
	return (
		<div className='text-black py-20 px-10 space-y-10'>
			<h2 className='text-5xl'>tilli Documentation</h2>

			<div className='flex gap-2 justify-between'>
				{cards.map((card) => (
					<LinkCard key={card.label} {...card} />
				))}
			</div>

			<div className='flex gap-6 justify-between mt-8'>
				{infoCards.map((card) => (
					<InfoCard key={card.title} {...card} />
				))}
			</div>
		</div>
	);
}
