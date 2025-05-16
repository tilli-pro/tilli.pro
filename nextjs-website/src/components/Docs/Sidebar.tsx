import { HomeIcon, HelpCircleIcon } from 'lucide-react';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import Link from 'next/link';
import DocsCommandPalette from './CommandPalette';
import NudgeSVG from '@/assets/branding/NudgeSVG';
import TillipaySVG from '@/assets/branding/TillipaySVG';
import TilliUSVG from '@/assets/branding/TilliUSVG';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const mainItems = [
	{ title: 'Introduction', url: '/docs/introduction' },
	{ title: 'FAQS', url: '/docs/faqs' },
	{ title: 'Page', url: '/docs/page' },
	{ title: 'Page', url: '/docs/page-2' },
];

const bottomItems = [
	{ label: 'Nudge', icon: NudgeSVG },
	{ label: 'tilliPay', icon: TillipaySVG },
	{ label: 'tilliX', icon: TilliUSVG, extraProps: { fill: '#A6A6A6' } },
	{ label: 'Help Center', icon: HelpCircleIcon },
];

const activeGradient =
	'bg-[linear-gradient(106deg,_rgba(108,239,239,0.10)_0%,_rgba(70,72,255,0.10)_65.07%,_rgba(113,47,255,0.10)_100%)]';

export function DocsSidebar() {
	// TODO: Get the active item from the URL
	const active = 'Introduction';

	return (
		<Sidebar className='sticky font-inter'>
			<SidebarContent className='bg-white py-4'>
				<DocsCommandPalette variant='sidebar' />

				{/* Home (collapsible) */}
				<Accordion type='single' collapsible defaultValue='home'>
					<AccordionItem value='home' className='border-none px-6'>
						<AccordionTrigger
							className='font-medium !no-underline justify-start'
							displayChevron={false}
							rotateSVG={false}
						>
							<HomeIcon className='size-5' />
							Home
						</AccordionTrigger>
						<AccordionContent className='pl-1'>
							<div className='border-l-2 border-foreground pl-5 flex flex-col gap-1 ml-1'>
								{mainItems.map(({ title, url }) => (
									<Link
										key={url}
										href={url}
										className={cn(
											'rounded-md px-2 py-1 text-sm transition',
											active === title ? activeGradient : 'hover:bg-muted'
										)}
									>
										{title}
									</Link>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				{/* Other Sections (TODO: not collapsible as of rn and inactive is hardcoded) */}
				<div className='flex flex-col gap-4 text-foreground px-6'>
					{bottomItems.map(({ label, icon: Icon, extraProps }) => (
						<div key={label} className='flex items-center gap-4 cursor-default'>
							<Icon className='size-5 text-foreground' {...(extraProps || {})} />
							{label}
						</div>
					))}
				</div>
			</SidebarContent>
		</Sidebar>
	);
}
