import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function Ellipse12({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#1A1A1A'
			width={555}
			height={783}
			viewBox='0 0 555 783'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g opacity={0.5} filter='url(#filter0_f_708_5376)'>
				<path
					d='M574.001 354.5c0 112.942-135.819 277.572-220.709 277.572C268.401 632.072 150 467.442 150 354.5 150 241.558 335.402 150 420.292 150c84.891 0 153.709 91.558 153.709 204.5z'
					fill='url(#paint0_linear_708_5376)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_5376'
					x={0}
					y={0}
					width={724}
					height={782.072}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={75} result='effect1_foregroundBlur_708_5376' />
				</filter>
				<linearGradient
					id='paint0_linear_708_5376'
					x1={323.413}
					y1={179.432}
					x2={616.514}
					y2={447.357}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#99C0FF' />
					<stop offset={0.360577} stopColor='#9980FF' />
					<stop offset={1} stopColor='#FF0FFF' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default Ellipse12;
