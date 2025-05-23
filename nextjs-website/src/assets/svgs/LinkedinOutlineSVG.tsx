import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function LinkedinOutlineSVG({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			xmlns='http://www.w3.org/2000/svg'
			width={40}
			height={41}
			viewBox='0 0 40 41'
			fill='none'
			{...props}
		>
			<g stroke='#fff' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
				<path d='M26.668 14.108a10 10 0 0110 10v11.667h-6.667V24.108a3.333 3.333 0 10-6.666 0v11.667h-6.667V24.108a10 10 0 0110-10zM9.999 15.775H3.332v20h6.667v-20zM6.665 10.775a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667z' />
			</g>
		</svg>
	);
}

export default LinkedinOutlineSVG;
