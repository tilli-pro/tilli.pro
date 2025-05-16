import GradientSparklesSVG from '@/assets/svgs/GradientSparklesSVG';

export default function Section2Left() {
	return (
		<div className='flex flex-col gap-6'>
			<div className='w-fit space-y-2'>
				<div className='flex items-center gap-2'>
					<GradientSparklesSVG className='size-5' />
					<div
						className='bg-clip-text text-transparent'
						style={{
							backgroundImage: 'linear-gradient(106deg, #6cd3ef 0%, #4648ff 65.07%, #3971ff 100%)',
						}}
					>
						The Tilli Platform
					</div>
				</div>
				<hr className='border-t border-[#F4F4F4]' />
			</div>
			<h2 className='text-5xl leading-tight mt-2'>
				Build for
				<br />
				seamless service delivery
			</h2>
		</div>
	);
}
