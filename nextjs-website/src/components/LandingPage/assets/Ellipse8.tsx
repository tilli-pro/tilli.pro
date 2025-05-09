import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function Ellipse8({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#1A1A1A'
			width={793}
			height={1067}
			viewBox='0 0 793 1067'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g opacity={0.2} filter='url(#filter0_f_708_5378)'>
				<path
					d='M393 423.5C393 557.981 291.219 667 165.667 667 40.114 667-135 470.974-135 336.493-135 202.011 40.114 180 165.667 180 291.219 180 393 289.019 393 423.5z'
					fill='url(#paint0_linear_708_5378)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_5378'
					x={-535}
					y={-220}
					width={1328}
					height={1287}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={200} result='effect1_foregroundBlur_708_5378' />
				</filter>
				<linearGradient
					id='paint0_linear_708_5378'
					x1={22.3846}
					y1={215.045}
					x2={369.983}
					y2={609.716}
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

export default Ellipse8;
