import { type IconType } from 'react-icons';

import {
	SiFacebook,
	SiGithub,
	SiLinkedin,
	SiX,
	SiYoutube,
} from 'react-icons/si';

type SocialMediaBanner = {
	bannerId: string;
	Icon: IconType;
	recommendedSize: {
		height: number;
		width: number;
	};
	title: string;
};

export const socialMediaBanners: SocialMediaBanner[] = [
	{
		bannerId: 'linkedin-banner',
		Icon: SiLinkedin,
		recommendedSize: { height: 396, width: 1584 },
		title: 'LinkedIn',
	},
	{
		bannerId: 'x-banner',
		Icon: SiX,
		recommendedSize: { height: 500, width: 1500 },
		title: 'X',
	},
	{
		bannerId: 'facebook-banner',
		Icon: SiFacebook,
		recommendedSize: { height: 315, width: 851 },
		title: 'Facebook',
	},
	{
		bannerId: 'github-banner',
		Icon: SiGithub,
		recommendedSize: { height: 640, width: 1280 },
		title: 'GitHub',
	},
	{
		bannerId: 'youtube-banner',
		Icon: SiYoutube,
		recommendedSize: { height: 338, width: 2560 },
		title: 'YouTube',
	},
];
