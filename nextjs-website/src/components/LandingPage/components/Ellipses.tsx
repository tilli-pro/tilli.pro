import Ellipse7Top from '../assets/Ellipse7Top';
import Ellipse7Left from '../assets/Ellipse7Left';
import Ellipse10 from '../assets/Ellipse10';
import Ellipse12 from '../assets/Ellipse12';

// TODO: fix the ellipses to be aligned exactly like in figma
export default function Ellipses() {
	return (
		<>
			{/* top middle */}
			<Ellipse7Top className='absolute -top-50 left-220 -translate-x-1/2' />
			{/* <Ellipse11 className='absolute -top-50 left-1/2 -translate-x-1/2' /> */}

			{/* left middle */}
			<Ellipse7Left className='absolute top-2 -left-20' />
			{/* <Ellipse8 className='absolute top-0 left-50' /> */}

			{/* right middle */}
			<Ellipse10 className='absolute top-40 right-0' />
			{/* <Ellipse9 className='absolute top-50 right-0 border-blue-500 border-2' /> */}
			<Ellipse12 className='absolute top-50 -right-60' />
		</>
	);
}
