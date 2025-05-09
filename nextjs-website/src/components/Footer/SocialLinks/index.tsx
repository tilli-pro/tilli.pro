import Link from 'next/link';
import { socialLinks } from './social-links';

export default function SocialLinks() {
	return (
		<div className='grid grid-cols-2 gap-3'>
			{socialLinks.map(({ href, label, icon: Icon, iconClass, btnClass }) => (
				<Link
					key={label}
					href={href}
					className={`bg-white rounded-full size-12 flex items-center justify-center ${btnClass}`}
					aria-label={label}
				>
					<Icon className={`text-black ${iconClass}`} />
				</Link>
			))}
		</div>
	);
}
