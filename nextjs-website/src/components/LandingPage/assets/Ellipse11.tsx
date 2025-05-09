import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function Ellipse11({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#1A1A1A'
			xmlns='http://www.w3.org/2000/svg'
			width={1328}
			height={923}
			viewBox='0 0 1328 923'
			{...props}
		>
			<g opacity={0.2} filter='url(#filter0_f_708_5379)'>
				<path
					d='M928 279.5C928 413.981 826.219 523 700.667 523 575.114 523 400 326.974 400 192.493 400 58.011 575.114 36 700.667 36 826.219 36 928 145.019 928 279.5z'
					fill='url(#paint0_linear_708_5379)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_5379'
					x={0}
					y={-364}
					width={1328}
					height={1287}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={200} result='effect1_foregroundBlur_708_5379' />
				</filter>
				<linearGradient
					id='paint0_linear_708_5379'
					x1={557.385}
					y1={71.0446}
					x2={904.983}
					y2={465.716}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#7E9AFF' />
					<stop offset={0.360577} stopColor='#80A6FF' />
					<stop offset={1} stopColor='#5B9FF7' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default Ellipse11;
