import Section2Left from './Section2Left';
import Section2Right from './Section2Right';

export default function Section2() {
	return (
		<section className='lg:p-44 p-22 flex flex-col sm:flex-row md:gap-10 gap-10 items-center justify-between'>
			<Section2Left />
			<Section2Right />
		</section>
	);
}
