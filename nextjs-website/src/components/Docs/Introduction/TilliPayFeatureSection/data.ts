import { ShoppingCartIcon } from 'lucide-react';

import { PlugIcon } from 'lucide-react';

import { WalletIcon } from 'lucide-react';

import { TagsIcon } from 'lucide-react';

export type Feature = {
	Icon: React.ElementType;
	title: string;
	desc: string;
};

export const features: Feature[] = [
	{
		Icon: WalletIcon,
		title: 'Online Payments',
		desc: 'Enable seamless acceptance of web and mobile payments with our customizable components and powerful APIs.',
	},
	{
		Icon: TagsIcon,
		title: 'Point-of-Sale Payments',
		desc: 'Leverage our terminal payment API to accept in-person payments.',
	},
	{
		Icon: PlugIcon,
		title: 'Plugins',
		desc: 'Seamlessly integrate our payment functionalities into your existing applications for smooth payment flow.',
	},
	{
		Icon: ShoppingCartIcon,
		title: 'eCommerce Platforms & Marketplace',
		desc: 'Accept payments and process transactions with ease on your online store or marketplace.',
	},
];

export const productTabs = ['tilliPay', 'Nudge', 'tilliX'];
