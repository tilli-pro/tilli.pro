import SocialLinks from './RightSection/SocialLinks';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import TilliWordmark from '@/assets/branding/TilliWordmark';
import { copyrightLinks, description } from './data';
import GradientLinkButton from '../GradientLinkButton';

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
				<p className='max-w-sm text-figma-gray-medium'>{description}</p>

				{/* Button */}
				<GradientLinkButton
					href='/about'
					backgroundColor='black'
					linkClassName='w-50 bg-gradient-to-r from-[#448DE6] to-[#98B2E9] p-[1px] hover:!bg-pink-400'
					divClassName='hover:bg-black/50'
				>
					<p>More about us</p>
					<ChevronRightIcon className='size-5' />
				</GradientLinkButton>
			</div>

			{/* Bottom Section/Row */}
			<div className='flex justify-between items-end gap-4 justify-self-end'>
				{/* Social Links */}
				<SocialLinks />

				{/* Copyright */}
				<div className='text-xs flex flex-col mt-6 text-right text-figma-gray-medium gap-1'>
					<span>© {thisYear} — Copyright</span>
					<span>All Rights reserved</span>
					<div className='row items-center justify-end gap-1'>
						{copyrightLinks.map((link, idx) => (
							<span key={link.label}>
								<Link href={link.href}>{link.label}</Link>
								{idx < copyrightLinks.length - 1 && <span className='mx-1'>|</span>}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
