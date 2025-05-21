import Link from 'next/link';
import { Button } from './ui/button';
import { ClipboardIcon } from 'lucide-react';

export default function JoinUsSection() {
	return (
		<section className='w-full flex items-center justify-center'>
			<div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4'>
				<h1 className='text-4xl md:text-5xl text-center md:text-left leading-tight'>
					Join us and shape the future of modern business tools.
				</h1>

				<div className='mt-8 md:mt-0 md:ml-12'>
					<Link href='/careers' className='inline-block p-[1.5px] rounded-full [background:var(--gradient-gradient-4)]'>
						<div className='flex items-center justify-between gap-4 font-inter rounded-full bg-white dark:bg-black px-5 py-2 hover:bg-blue-50 transition-colors'>
							<span className='whitespace-nowrap'>See Our Open Roles</span>
							<ClipboardIcon size={20} strokeWidth={1.75} />
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
