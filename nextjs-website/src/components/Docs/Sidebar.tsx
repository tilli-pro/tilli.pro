import { HomeIcon, ZapIcon, CreditCardIcon, ShieldIcon, HelpCircleIcon } from 'lucide-react';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import Link from 'next/link';
import DocsCommandPalette from './CommandPalette';

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
		<Sidebar className='sticky p-4 font-inter text-sm'>
			<SidebarContent className='bg-white'>
				<DocsCommandPalette />

				{/* Main Navigation */}
				<div className='mb-6'>
					<div className='flex items-center gap-2 px-4 pb-2 font-medium'>
						<HomeIcon className='size-5' />
						Home
					</div>
					<div className='ml-7 border-l-2 border-foreground pl-3 flex flex-col gap-1'>
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
				<div className='flex flex-col gap-1 text-muted-foreground'>
					<div className='flex items-center gap-2 py-1 cursor-default'>
						<ZapIcon className='size-4' />
						Nudge
					</div>
					<div className='flex items-center gap-2 py-1 cursor-default'>
						<CreditCardIcon className='size-4' />
						Tillipay
					</div>
					<div className='flex items-center gap-2 py-1 cursor-default'>
						<ShieldIcon className='size-4' />
						tilliX
					</div>
					<div className='flex items-center gap-2 py-1 cursor-default'>
						<HelpCircleIcon className='size-4' />
						Help Center
					</div>
				</div>
			</SidebarContent>
		</Sidebar>
	);
}
