import { Banner } from './banner';

type BannerSectionProps = {
	bannerId: string;
	jobTitle: string;
	name: string;
	recommendedSize: { height: number; width: number };
};

export const BannerSection = ({
	bannerId,
	jobTitle,
	name,
	recommendedSize,
}: BannerSectionProps) => {
	return (
		<section className='flex flex-col items-center justify-center w-full'>
			<Banner
				bannerId={bannerId}
				name={name}
				recommendedSize={recommendedSize}
				title={jobTitle}
			/>
		</section>
	);
};
