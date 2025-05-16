import Link from 'next/link';
import { socialLinks } from './social-links';
import { cn } from '@/lib/utils';

function SocialColumn({ links }: { links: typeof socialLinks }) {
	return (
		// <div className='flex flex-col justify-end gap-3'>
			links.map((link, i) => {
				if(!("label" in link)) {
					return <div key={`empty-${i}`} className="h-10 w-10" />
				}
				const { href, label, icon: Icon, iconClass, btnClass } = link;
				return (
				<Link
					key={label}
					href={href}
					className={cn(`bg-white rounded-full size-10 flex items-center justify-center`, btnClass)}
					aria-label={label}
				>
					<Icon className={cn("fill-black", iconClass)} />
				</Link>
			)})
		// </div>
	);
}

// FIXME: we hackily insert a blank data element here in order to get our "reverse" column order in the CSS grid to work. In order to properly do this, we need to redefine how we define grid template columns and rows, and then adjust how the autoflow within the grid works.
export default function SocialLinks() {
	return (
		<div className="h-full gap-3 grid grid-cols-2 grid-rows-3 grid-cols-direction-[reverse]">
			<SocialColumn links={socialLinks} />
		</div>
	);
}
