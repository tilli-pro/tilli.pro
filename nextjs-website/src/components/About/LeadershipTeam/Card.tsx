import Image from 'next/image';

interface CardProps {
	name: string;
	title: string;
	image: string;
}

export default function Card({ name, title, image }: CardProps) {
	return (
		<div
			className='flex flex-col items-center rounded-xl border-[6px] border-background 
            px-6 py-8 text-center shadow-[inset_0_0_0_1px_#BDBDBD] 
            transition-all duration-300 ease-in-out hover:border-pink-200 hover:shadow-none 
            [background:linear-gradient(180deg,rgba(244,244,244,0.5)_5.77%,#FFF_31.73%,#FFF_100%)]'
		>
			<Image src={image} alt={name} width={120} height={120} className='w-auto rounded-full' />

			<div className='mt-8 space-y-2'>
				<h3 className='text-[1.2rem]'>{name}</h3>
				<p className='text-xl font-inter'>{title}</p>
			</div>
		</div>
	);
}
