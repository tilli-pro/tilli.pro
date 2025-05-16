import SocialLinks from './RightSection/SocialLinks';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import TiiliSVG from '@/assets/branding/TiiliSVG';
import TilliWordmark from '@/assets/branding/TilliWordmark';
const description =
	'We’re devoted to creating a global consumer environment that feels more personalized and connected than ever before. Through cloud-based, customer-centric tools, we’re revolutionizing CPaaS and payment processing landscapes to create avenues that help businesses and people connect, collaborate, and make payments in real-time.';

const copyrightLinks = [
	{ label: 'Terms', href: '/terms' },
	{ label: 'Privacy', href: '/privacy' },
	{ label: 'Cookies', href: '/cookies' },
];

export default function LeftSection() {
	const thisYear = new Date().getFullYear();

	return (
		<div className='flex flex-col gap-20'>
			{/* Top Section */}
			<div className='flex-1 flex flex-col gap-6'>
				{/* Logo */}
				{/* <TiiliSVG /> */}
				<TilliWordmark size={48} />

				{/* Description */}
				<p className='max-w-sm'>{description}</p>

				{/* Button */}
				<Link href='/about' className='w-52 rounded-full bg-gradient-to-r from-[#448DE6] to-[#98B2E9] p-[1px]'>
					<div className='flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-black'>
						<p>More about us</p>
						<ChevronRightIcon className='size-5' />
					</div>
				</Link>
			</div>

			{/* Bottom Section/Row */}
			<div className='flex justify-between items-end gap-4 justify-self-end'>
				{/* Social Links */}
				<SocialLinks />

				{/* Copyright */}
				<div className='text-xs flex flex-col mt-6 text-right gap-1'>
					<span>© {thisYear} — Copyright</span>
					<span>All Rights reserved</span>
					<div>
						{copyrightLinks.map((link, idx) => (
							<span key={link.label}>
								<Link href={link.href} className='mx-1'>
									{link.label}
								</Link>
								{idx < copyrightLinks.length - 1 && <span className='mx-1'>|</span>}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
