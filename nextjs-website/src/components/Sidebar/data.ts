import NudgeSVG from '@/assets/branding/NudgeSVG';
import TillipaySVG from '@/assets/branding/TillipaySVG';
import TilliUSVG from '@/assets/branding/TilliUSVG';
import { HelpCircleIcon } from 'lucide-react';

export const mainItems = [
	{ title: 'Introduction', url: '/docs/introduction' },
	{ title: 'FAQS', url: '/docs/faqs' },
	{ title: 'Page', url: '/docs/page' },
	{ title: 'Page', url: '/docs/page-2' },
];

export const bottomItems = [
	{ label: 'Nudge', icon: NudgeSVG },
	{ label: 'tilliPay', icon: TillipaySVG },
	{ label: 'tilliX', icon: TilliUSVG, extraProps: { fill: '#A6A6A6' } },
	{ label: 'Help Center', icon: HelpCircleIcon },
];

export const activeGradient =
	'bg-[linear-gradient(106deg,_rgba(108,239,239,0.10)_0%,_rgba(70,72,255,0.10)_65.07%,_rgba(113,47,255,0.10)_100%)]';
