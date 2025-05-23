import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function Ellipse10({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#1A1A1A'
			width={805}
			height={1151}
			viewBox='0 0 805 1151'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g opacity={0.5} filter='url(#filter0_f_708_5380)'>
				<path
					d='M928 534.5C928 668.981 826.219 778 700.667 778 575.114 778 400 581.974 400 447.493 400 313.011 575.114 291 700.667 291 826.219 291 928 400.019 928 534.5z'
					fill='url(#paint0_linear_708_5380)'
					fillOpacity={0.5}
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_5380'
					x={0}
					y={-109}
					width={1328}
					height={1287}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={200} result='effect1_foregroundBlur_708_5380' />
				</filter>
				<linearGradient
					id='paint0_linear_708_5380'
					x1={557.385}
					y1={326.045}
					x2={904.983}
					y2={720.716}
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

export default Ellipse10;
