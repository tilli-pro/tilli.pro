import Image from 'next/image';

export default function SaaSControlHighlight() {
	return (
		<div className='flex flex-col xl:flex-row gap-10 justify-between'>
			<div className='flex flex-col gap-4 max-w-xl xl:my-auto'>
				<h3 className='text-3xl'>SaaS – Easy and convenient for your customers</h3>
				<p className='font-inter'>
					Control everything from one unified dashboard, including everything from customer communications to
					subscription billing.
				</p>
			</div>

			<div className='w-full xl:w-auto flex justify-end'>
				<div className='relative inline-block'>
					{/* Floating image relative to the main image */}
					<div className='absolute -bottom-20 -left-60 size-40 md:size-60 xl:size-80 rounded-lg overflow-hidden z-10'>
						<Image
							className='object-cover'
							src='/images/some-dashboard.png'
							alt='A dashboard'
							width={300}
							height={300}
						/>
					</div>

					{/* Main image */}
					<Image
						className='rounded-lg object-cover w-100'
						src='/images/guy-looking-at-phone.png'
						alt='Guy looking at phone'
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</div>
	);
}
