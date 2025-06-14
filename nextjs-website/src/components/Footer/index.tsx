'use client';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function Footer() {
	return (
		<footer className='bg-brand-black text-white flex flex-col xl:flex-row justify-between gap-30 xl:gap-40 2xl:gap-80 px-8 md:px-32 py-24'>
			<LeftSection />
			<RightSection />
		</footer>
	);
}
