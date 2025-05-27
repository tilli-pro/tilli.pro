import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function LongArrowUpRightSVG({
	className,
	stroke = '#060606',
	...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { stroke?: string; className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			xmlns='http://www.w3.org/2000/svg'
			width={25}
			height={24}
			viewBox='0 0 25 24'
			fill='none'
			{...props}
		>
			<g stroke={stroke} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
				<path d='M13.531 5h6v6M19.531 5l-14 14' />
			</g>
		</svg>
	);
}

export default LongArrowUpRightSVG;
