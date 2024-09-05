'use client';
import { useState } from 'react';

import { DownloadIcon } from '@radix-ui/react-icons';
import { getFontEmbedCSS, toPng } from 'html-to-image';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

type BannerProps = {
	bannerId: string;
	name: string;
	recommendedSize: { height: number; width: number };
	title: string;
};

export const Banner = ({
	bannerId,
	name,
	recommendedSize,
	title,
}: BannerProps) => {
	const showJobTitle = bannerId.toLowerCase().includes('linkedin');

	const heightMultiplier = recommendedSize.height / recommendedSize.width;

	const defaultWidth = 1024;
	const defaultHeight = defaultWidth * heightMultiplier;

	const [size, setSize] = useState<{ height: number; width: number }>({
		height: defaultHeight,
		width: defaultWidth,
	});

	const [showBorder, setShowBorder] = useState<boolean>(true);

	const handleSizeChange = (width: number) => {
		setSize({ height: width * heightMultiplier, width });
	};

	const handleSave = async () => {
		const banner = document.querySelector<HTMLDivElement>(`#${bannerId}`);

		if (!banner) {
			return;
		}

		try {
			// Get the embedded font CSS
			const fontEmbedCSS = await getFontEmbedCSS(banner);

			const options = {
				fontEmbedCSS,
			};

			const dataUrl = await toPng(banner, options);

			const img = new Image();
			img.src = dataUrl;

			document.querySelector('#preview')?.append(img);

			// Create and trigger download
			const link = document.createElement('a');
			link.download = `${bannerId}.png`;
			link.href = dataUrl;
			link.target = '_blank';
			link.click();
		} catch (error) {
			console.error('Error saving banner:', error);
		}
	};

	return (
		<div className='flex flex-col w-full'>
			<div className='mb-4 flex items-center justify-between space-x-6 w-full'>
				<Slider
					max={defaultWidth}
					min={100}
					onValueChange={(value) => {
						handleSizeChange(value?.[0] ?? 0);
					}}
					title='Width Slider'
					value={[size.width]}
				/>
				<div className='flex flex-grow items-center space-x-2'>
					<Switch
						checked={showBorder}
						id='show-border'
						onCheckedChange={setShowBorder}
						title='Show Border'
					/>
					<Label
						className='sr-only'
						htmlFor='show-border'
					>
						Show Border
					</Label>
				</div>
				<Button
					onClick={handleSave}
					title='Save'
				>
					<DownloadIcon className='h-4 w-4' />
				</Button>
			</div>
			<div
				className={`flex items-center justify-end overflow-hidden bg-background px-12 py-10 text-primary`}
				id={bannerId}
				style={{
					border: showBorder ? '1px solid hsl(var(--primary))' : 'none',
					height: size.height,
					width: size.width,
				}}
			>
				<div className={`flex flex-col items-end space-y-6 `}>
					<h1 className='text-4xl font-bold'>{name}</h1>
					{showJobTitle && <p className={`text-2xl`}>{title}</p>}
				</div>
			</div>
		</div>
	);
};
