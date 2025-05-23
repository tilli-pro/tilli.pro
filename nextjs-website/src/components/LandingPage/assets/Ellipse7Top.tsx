import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function Ellipse7Top({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#1A1A1A'
			width={600}
			height={578}
			viewBox='0 0 724 578'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g opacity={0.5} filter='url(#filter0_f_708_5375)'>
				<path
					d='M574.001 149.5c0 112.942-135.819 277.572-220.709 277.572C268.401 427.072 150 262.442 150 149.5 150 36.558 335.402-55 420.292-55c84.891 0 153.709 91.558 153.709 204.5z'
					fill='url(#paint0_linear_708_5375)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_5375'
					x={0}
					y={-205}
					width={724}
					height={782.072}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={75} result='effect1_foregroundBlur_708_5375' />
				</filter>
				<linearGradient
					id='paint0_linear_708_5375'
					x1={323.413}
					y1={-25.5683}
					x2={616.514}
					y2={242.357}
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

export default Ellipse7Top;
