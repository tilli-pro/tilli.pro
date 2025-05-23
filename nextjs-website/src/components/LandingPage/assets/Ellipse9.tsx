import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function Ellipse9({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#1A1A1A'
			width={695}
			height={616}
			viewBox='0 0 695 616'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g opacity={0.5} filter='url(#filter0_f_708_5381)'>
				<path
					d='M175.446 385.99c-47.005-76.452-26.487-174.472 45.829-218.934 72.316-44.462 495.22 4.965 542.226 81.417 47.005 76.452-46.164 150.978-118.48 195.44-72.315 44.463-422.57 18.529-469.575-57.923z'
					fill='url(#paint0_linear_708_5381)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_5381'
					x={0.199219}
					y={0.241119}
					width={926.02}
					height={615.406}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={75} result='effect1_foregroundBlur_708_5381' />
				</filter>
				<linearGradient
					id='paint0_linear_708_5381'
					x1={461.769}
					y1={373.25}
					x2={124.981}
					y2={267.607}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F9EDBF' />
					<stop offset={0.302885} stopColor='#FFE8D6' />
					<stop offset={1} stopColor='#F7B15B' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default Ellipse9;
