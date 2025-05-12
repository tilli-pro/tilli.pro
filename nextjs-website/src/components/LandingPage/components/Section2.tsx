import { Button } from '@/components/ui/button';
import GradientSparklesSVG from '@/assets/svgs/GradientSparklesSVG';

export default function Section2() {
	return (
		<section className='w-full flex justify-center items-center py-44 px-5'>
			<div className='flex flex-col sm:flex-row md:gap-50 gap-10 items-center justify-between'>
				{/* Left Side */}
				<div className=' flex flex-col gap-6'>
					<div className='w-fit space-y-2'>
						<div className='flex items-center gap-2'>
							<GradientSparklesSVG className='size-5' />
							<div
								className='bg-clip-text text-transparent'
								style={{ backgroundImage: 'linear-gradient(106deg, #6cd3ef 0%, #4648ff 65.07%, #3971ff 100%)' }}
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

				{/* Right Side */}
				<div className='flex flex-col gap-6 max-w-lg'>
					<p>
						Tilli is the unified platform designed to help organizations streamline payments, communication, and
						client services. With enterprise-grade security, automation, and an intuitive interface, Tilli empowers
						teams to manage every touchpoint — from invoicing and reminders to insights and support — all in one
						place.
					</p>
					<Button className='border border-black bg-transparent text-black transition-colors w-72'>
						Explore our Products
					</Button>
				</div>
			</div>
		</section>
	);
}
