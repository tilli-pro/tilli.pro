import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function GradientBackgroundSVG({
	className,
	...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto size-14', className)}
			width={571}
			height={369}
			viewBox='0 0 571 369'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g filter='url(#filter0_f_708_12252)'>
				<path
					d='M-29.04 590.46L472.1 548.331s-219.203 10.111-305.73-151.661C79.841 234.899-29.039 199.51-29.039 199.51v390.95z'
					fill='url(#paint0_linear_708_12252)'
				/>
			</g>
			<g filter='url(#filter1_f_708_12252)'>
				<path
					d='M105.363 75.528l-.285-.718 560.266-50.554-101.67 110.376c-116.025 78.594-59.931 120.527-175.939 390.107-153.001-122.431-164.813-152.268-282.372-449.21z'
					fill='url(#paint1_linear_708_12252)'
				/>
			</g>
			<g filter='url(#filter2_f_708_12252)'>
				<ellipse cx={138.245} cy={115.253} rx={193.245} ry={175.253} fill='url(#paint2_linear_708_12252)' />
			</g>
			<g filter='url(#filter3_f_708_12252)'>
				<path
					d='M705.002 322.605c0 186.178-54.881 337.106-122.58 337.106-67.7 0-187.477 28.189-187.477-157.99S514.722-14.502 582.422-14.502c67.699 0 122.58 150.928 122.58 337.107z'
					fill='url(#paint3_linear_708_12252)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_708_12252'
					x={-93.0391}
					y={135.51}
					width={629.141}
					height={518.949}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={32} result='effect1_foregroundBlur_708_12252' />
				</filter>
				<filter
					id='filter1_f_708_12252'
					x={5.07812}
					y={-75.7441}
					width={760.266}
					height={700.482}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={50} result='effect1_foregroundBlur_708_12252' />
				</filter>
				<filter
					id='filter2_f_708_12252'
					x={-111}
					y={-116}
					width={498.492}
					height={462.506}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={28} result='effect1_foregroundBlur_708_12252' />
				</filter>
				<filter
					id='filter3_f_708_12252'
					x={322.945}
					y={-86.502}
					width={454.055}
					height={819.736}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={36} result='effect1_foregroundBlur_708_12252' />
				</filter>
				<linearGradient
					id='paint0_linear_708_12252'
					x1={85.6099}
					y1={532.322}
					x2={239.451}
					y2={418.777}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#122F5A' />
					<stop offset={1} stopColor='#527CA3' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_708_12252'
					x1={536.995}
					y1={24.256}
					x2={233.448}
					y2={333.058}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FFE9B3' />
					<stop offset={1} stopColor='#FFD14D' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_708_12252'
					x1={76.9545}
					y1={91.6614}
					x2={198.936}
					y2={282.672}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#5582A8' />
					<stop offset={1} stopColor='#F2E4FF' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_708_12252'
					x1={487.798}
					y1={84.305}
					x2={720.719}
					y2={190.375}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#3EA2E2' />
					<stop offset={1} stopColor='#102F88' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default GradientBackgroundSVG;
