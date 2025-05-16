import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function Ellipse7Left({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#1A1A1A'
			width={437}
			height={584}
			viewBox='0 0 437 584'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g opacity={0.5} filter='url(#filter0_f_708_5377)'>
				<path
					d='M287 292c0-78.424-60.721-142-135.625-142S-28 264.315-28 342.739C-28 421.164 76.471 434 151.375 434S287 370.424 287 292z'
					fill='url(#paint0_linear_708_5377)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_5377'
					x={-178}
					y={0}
					width={615}
					height={584}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={75} result='effect1_foregroundBlur_708_5377' />
				</filter>
				<linearGradient
					id='paint0_linear_708_5377'
					x1={65.8942}
					y1={413.563}
					x2={267.967}
					y2={178.842}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#99C0FF' />
					<stop offset={0.360577} stopColor='#9980FF' />
					<stop offset={1} stopColor='#91E8FE' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default Ellipse7Left;
