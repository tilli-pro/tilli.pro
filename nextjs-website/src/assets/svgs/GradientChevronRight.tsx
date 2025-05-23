import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function GradientChevronRightSVG({
	className,
	...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			xmlns='http://www.w3.org/2000/svg'
			width={30}
			height={31}
			viewBox='0 0 30 31'
			fill='none'
			{...props}
		>
			<path
				d='M11.25 23.275l7.5-7.5-7.5-7.5'
				stroke='url(#paint0_linear_765_38724)'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_765_38724'
					x1={11.25}
					y1={15.7754}
					x2={18.75}
					y2={15.7754}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#448DE6' />
					<stop offset={1} stopColor='#98B2E9' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default GradientChevronRightSVG;
