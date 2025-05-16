import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function GradientSparklesSVG({
	className,
	...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			width={25}
			height={25}
			viewBox='0 0 25 25'
			{...props}
		>
			<path
				d='M10.084 15.618a2 2 0 00-1.437-1.437l-6.135-1.582a.5.5 0 010-.962l6.135-1.583a2 2 0 001.437-1.436l1.582-6.135a.5.5 0 01.963 0l1.58 6.135a2 2 0 001.438 1.437l6.135 1.58a.5.5 0 010 .965l-6.135 1.58a2 2 0 00-1.437 1.438l-1.582 6.135a.5.5 0 01-.963 0l-1.581-6.135z'
				stroke='url(#paint0_linear_708_5414)'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M20.148 3.118v4'
				stroke='url(#paint1_linear_708_5414)'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M22.148 5.118h-4'
				stroke='url(#paint2_linear_708_5414)'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4.148 17.118v2'
				stroke='url(#paint3_linear_708_5414)'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5.148 18.118h-2'
				stroke='url(#paint4_linear_708_5414)'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_708_5414'
					x1={2.14844}
					y1={2.11755}
					x2={25.9242}
					y2={8.91672}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#6CD3EF' />
					<stop offset={0.650677} stopColor='#4648FF' />
					<stop offset={1} stopColor='#3971FF' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_708_5414'
					x1={20.1484}
					y1={3.1178}
					x2={21.4279}
					y2={3.20927}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#6CD3EF' />
					<stop offset={0.650677} stopColor='#4648FF' />
					<stop offset={1} stopColor='#3971FF' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_708_5414'
					x1={18.1484}
					y1={5.1178}
					x2={20.3767}
					y2={7.66667}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#6CD3EF' />
					<stop offset={0.650677} stopColor='#4648FF' />
					<stop offset={1} stopColor='#3971FF' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_708_5414'
					x1={4.14844}
					y1={17.1178}
					x2={5.40864}
					y2={17.298}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#6CD3EF' />
					<stop offset={0.650677} stopColor='#4648FF' />
					<stop offset={1} stopColor='#3971FF' />
				</linearGradient>
				<linearGradient
					id='paint4_linear_708_5414'
					x1={3.14844}
					y1={18.1178}
					x2={5.08643}
					y2={19.2262}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#6CD3EF' />
					<stop offset={0.650677} stopColor='#4648FF' />
					<stop offset={1} stopColor='#3971FF' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default GradientSparklesSVG;
