'use client';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function Footer() {
	return (
		<footer className='bg-black flex flex-col md:flex-row justify-between gap-60 text-[#A9A9A9] px-8 md:px-16 py-16'>
			<LeftSection />
			<RightSection />
		</footer>
	);
}
