import Link from 'next/link';
import { socialLinks } from './social-links';

function SocialColumn({ links }: { links: typeof socialLinks }) {
	return (
		<div className='flex flex-col justify-end gap-3'>
			{links.map(({ href, label, icon: Icon, iconClass, btnClass }) => (
				<Link
					key={label}
					href={href}
					className={`bg-white rounded-full size-10 flex items-center justify-center ${btnClass}`}
					aria-label={label}
				>
					<Icon className={`text-black ${iconClass}`} />
				</Link>
			))}
		</div>
	);
}

export default function SocialLinks() {
	const midpoint = Math.ceil(socialLinks.length / 2);
	const leftColumn = socialLinks.slice(0, midpoint);
	const rightColumn = socialLinks.slice(midpoint);

	return (
		<div className='flex flex-row h-full gap-3'>
			<SocialColumn links={leftColumn} />
			<SocialColumn links={rightColumn} />
		</div>
	);
}
