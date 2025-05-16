import { HomeIcon } from 'lucide-react';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import Link from 'next/link';
import DocsCommandPalette from '../Docs/CommandPalette';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { bottomItems } from './data';
import { activeGradient } from './data';
import { mainItems } from './data';

export function DocsSidebar() {
	// TODO: Get the active item from the URL
	const active = 'Introduction';

	return (
		<Sidebar className='sticky font-inter text-figma-gray-medium'>
			<SidebarContent className='bg-background py-4'>
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
							<div className='border-l-2 border-figma-gray-medium pl-5 flex flex-col gap-1 ml-1'>
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
				<div className='flex flex-col gap-4 px-6'>
					{bottomItems.map(({ label, icon: Icon, extraProps }) => (
						<div key={label} className='flex items-center gap-4 cursor-default'>
							<Icon className='size-5' {...(extraProps || {})} />
							{label}
						</div>
					))}
				</div>
			</SidebarContent>
		</Sidebar>
	);
}
