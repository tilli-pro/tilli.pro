import YoutubeSVG from '@/assets/footer/social-media/YoutubeSVG';
import InstagramSVG from '@/assets/footer/social-media/InstagramSVG';
import FacebookSVG from '@/assets/footer/social-media/FacebookSVG';
import LinkedInSVG from '@/assets/footer/social-media/LinkedInSVG';
import XSVG from '@/assets/footer/social-media/XSVG';


export type SocialLink = {
	href: string;
	label: string;
	icon: React.FC<Record<string, unknown> & { className?: string }>;
	iconClass: string;
	btnClass: string;
} | {};
export const socialLinks: SocialLink[] = [
	{
		href: 'https://www.youtube.com/@tillisoftware',
		label: 'YouTube',
		icon: YoutubeSVG,
		iconClass: 'size-6',
		btnClass: 'p-2',
	},
	{},
	{
		href: 'https://www.linkedin.com/company/tilli-llc',
		label: 'LinkedIn',
		icon: LinkedInSVG,
		iconClass: 'size-5',
		btnClass: 'p-2',
	},
	{
		href: 'https://x.com/tillisoftware',
		label: 'X',
		icon: XSVG,
		iconClass: 'size-5',
		btnClass: 'p-2',
	},
	{
		href: 'https://www.facebook.com/tillisoftware/',
		label: 'Facebook',
		icon: FacebookSVG,
		iconClass: 'size-7',
		btnClass: 'p-1',
	},
	{
		href: 'https://www.instagram.com/tillisoftware',
		label: 'Instagram',
		icon: InstagramSVG,
		iconClass: 'size-6',
		btnClass: 'p-2',
	},
];
