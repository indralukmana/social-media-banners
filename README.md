# Social Media Banners Generator

This project is a React application built with TypeScript and Vite that allows
users to generate custom social media banners for various platforms.

## Features

- Generate banners for LinkedIn, X (Twitter), Facebook, GitHub, and YouTube
- Customizable banner size with a slider
- Toggle border visibility
- Download generated banners as PNG files
- Responsive design with dark mode support

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI components
- html-to-image for image generation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (preferred package manager)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/social-media-banners.git
   cd social-media-banners
   ```

2. Install dependencies:

   ```shell
   pnpm install
   ```

3. Start the development server:

   ```shell
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build, run:

```shell
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/`: Source files
  - `components/`: React components
  - `lib/`: Utility functions
  - `data/`: Static data (social media banner configurations)
- `public/`: Static assets

## Customization

### Adding New Social Media Platforms

To add support for a new social media platform, update the `socialMediaBanners`
array in `src/data/social-media-banners.ts`:

### Styling

This project uses Tailwind CSS for styling. The main configuration file is
`tailwind.config.js`. Custom styles and theme extensions can be added there.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
