import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function LongArrowRightSVG({
	className,
	stroke = '#060606',
	...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { stroke?: string; className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			xmlns='http://www.w3.org/2000/svg'
			width={20}
			height={20}
			viewBox='0 0 20 20'
			fill='none'
			{...props}
		>
			<path
				d='M15 6.666l3.333 3.333L15 13.333M1.664 10h16.667'
				stroke={stroke}
				strokeWidth={1.04167}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export default LongArrowRightSVG;
