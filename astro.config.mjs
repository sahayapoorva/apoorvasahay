// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.sahayapoorva.net',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Source Serif 4',
			cssVariable: '--font-serif',
			fallbacks: ['Georgia', 'serif'],
			weights: [400, 600, 700],
			styles: ['normal', 'italic'],
		},
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			fallbacks: ['system-ui', 'sans-serif'],
			weights: [400, 500, 600],
			styles: ['normal'],
		},
	],
});
