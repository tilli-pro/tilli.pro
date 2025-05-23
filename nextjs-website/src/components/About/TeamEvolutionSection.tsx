import { Users2Icon } from 'lucide-react';

export default function TeamEvolutionSection() {
	return (
		<div className='bg-background @lg:px-20 flex flex-col @4xl:flex-row items-center @5xl:gap-60 @4xl:gap-20 gap-10'>
			<div className='space-y-6'>
				<div className='flex flex-row gap-2'>
					<Users2Icon className='text-figma-gray-medium' strokeWidth={1.5} />
					<p className='text-figma-gray-medium whitespace-nowrap'>OUR TEAM</p>
				</div>

				<h2 className='text-4xl whitespace-nowrap'>
					Our endless <br /> evolution
				</h2>
			</div>

			<p>
				For over two decades, we have evolved from a consulting firm to a leading force in payment automation and
				financial technology. Every milestone reflects our commitment to innovation, compliance, and seamless business
				operations. Explore the key moments that shaped tilliX into the trusted platform it is today.
			</p>
		</div>
	);
}
