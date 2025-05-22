import AddAccountWidgetSVG from '@/assets/widget-svgs/AddAccountWidgetSVG';
import MacbookDisplayingInvoicesPage from './MacbookDisplayingInvoicesPage';
import GlassComponent1SVG from '@/assets/widget-svgs/GlassComponent1SVG';
import LongInvoiceWidgetSVG from '@/assets/widget-svgs/LongInvoiceWidgetSVG';
import PartiallyPaidInvoicesWidgetSVG from '@/assets/widget-svgs/PartiallyPaidInvoicesWidgetSVG';

// TODO: fix all these widgets to be aligned exactly like in figma
export default function HeroSectionRight() {
	return (
		<>
			<PartiallyPaidInvoicesWidgetSVG className='z-20 size-100 absolute top-60 right-0' />
			<AddAccountWidgetSVG className='z-5 size-100 absolute bottom-40 left-150 w-fit backdrop-blur-xl' />
			<LongInvoiceWidgetSVG className='z-5 size-20 absolute top-90 left-148 w-fit backdrop-blur-xl' />
			<GlassComponent1SVG className='z-10 size-100 absolute bottom-40 -right-10' />
			<MacbookDisplayingInvoicesPage className='z-10 absolute bottom-40 right-40 xl:w-250' />
		</>
	);
}
