import { HomeIcon, HelpCircleIcon } from 'lucide-react';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import Link from 'next/link';
import DocsCommandPalette from './CommandPalette';
import NudgeSVG from '@/assets/branding/NudgeSVG';
import TillipaySVG from '@/assets/branding/TillipaySVG';
import TilliUSVG from '@/assets/branding/TilliUSVG';

const mainItems = [
	{ title: 'Introduction', url: '/docs/introduction' },
	{ title: 'FAQS', url: '/docs/faqs' },
	{ title: 'Page', url: '/docs/page' },
	{ title: 'Page', url: '/docs/page-2' },
];

export function DocsSidebar() {
	// TODO get active tab from URL
	const active = 'Introduction';

	return (
		<Sidebar className='sticky font-inter'>
			<SidebarContent className='bg-white py-4 px-6 space-y-4'>
				<DocsCommandPalette />

				{/* Main Navigation */}
				<div className='space-y-2'>
					<div className='flex items-center gap-4 font-medium'>
						<HomeIcon className='size-5' />
						Home
					</div>
					<div className='ml-2 border-l-2 border-foreground pl-5 flex flex-col gap-1'>
						{mainItems.map((item) => (
							<Link
								key={item.url}
								href={item.url}
								className={`rounded-md px-2 py-1 text-sm font-medium transition
                  ${active === item.title ? 'bg-gradient-to-r from-[#bd73a0] to-[#ffffff] text-black' : 'hover:bg-muted'}
                `}
							>
								{item.title}
							</Link>
						))}
					</div>
				</div>

				{/* Lower Sections */}
				<div className='flex flex-col gap-4 text-muted-foreground'>
					<div className='flex items-center gap-4 cursor-default'>
						<NudgeSVG className='size-5' />
						Nudge
					</div>
					<div className='flex items-center gap-4 cursor-default'>
						<TillipaySVG className='size-5' />
						Tillipay
					</div>
					<div className='flex items-center gap-4 cursor-default'>
						<TilliUSVG className='size-5' fill='#A6A6A6' />
						tilliX
					</div>
					<div className='flex items-center gap-4 cursor-default'>
						<HelpCircleIcon className='size-5' />
						Help Center
					</div>
				</div>
			</SidebarContent>
		</Sidebar>
	);
}
