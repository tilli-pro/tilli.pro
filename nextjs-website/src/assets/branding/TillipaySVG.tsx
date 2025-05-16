import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function TillipaySVG({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto size-14', className)}
			xmlns='http://www.w3.org/2000/svg'
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			{...props}
		>
			<path
				d='M15.103 1.53h-4.4l-1.07 4.25h5.28c4.19.77 3.91 6.65-.49 6.9-.32.02-2.01-.06-2.13.06l-1.77 3.98.05.15c.11.02.22.05.33.06 1.76.13 4.6.1 6.23-.5 7.69-2.81 6.06-14.23-2.03-14.9z'
				fill='#A6A6A6'
			/>
			<path
				d='M14.641 7.09l-5.4.02-5.4-.02c-1.54.16-2.45 1.81-1.66 3.19.94 1.63 3.02.88 4.6 1.07l-4.89 10.89.06.2 4.41.02.11-.07 4.96-11c1.6-.33 3.88.62 4.87-1.11.79-1.38-.11-3.03-1.66-3.19z'
				fill='#A6A6A6'
			/>
		</svg>
	);
}

export default TillipaySVG;
