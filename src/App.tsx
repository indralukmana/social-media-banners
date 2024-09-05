import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BannerSection } from '@/components/banner-section';
import { socialMediaBanners } from '@/data/social-media-banners';

export default function App() {
	return (
		<main className='flex flex-col items-center justify-center max-w-7xl mx-auto py-12'>
			<h1 className='text-3xl font-bold  mb-8'>Social Media Banners</h1>
			<Tabs
				defaultValue={socialMediaBanners[0].bannerId}
				className='w-full'
			>
				<TabsList className='grid w-full grid-cols-5'>
					{socialMediaBanners.map((banner) => (
						<TabsTrigger
							key={banner.bannerId}
							value={banner.bannerId}
						>
							<banner.Icon className='mr-2 h-4 w-4' />
							{banner.title}
						</TabsTrigger>
					))}
				</TabsList>
				{socialMediaBanners.map((banner) => (
					<TabsContent
						key={banner.bannerId}
						value={banner.bannerId}
					>
						<BannerSection
							bannerId={banner.bannerId}
							recommendedSize={banner.recommendedSize}
							jobTitle='Adventurer Extraordinaire'
							name='John Doe'
						/>
					</TabsContent>
				))}
			</Tabs>
		</main>
	);
}
