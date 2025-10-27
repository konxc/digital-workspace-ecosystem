import { error } from '@sveltejs/kit';
import { docsRegistry } from '$lib/docs';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const loader = docsRegistry[slug];

	if (!loader) {
		throw error(404, 'Documentation not found');
	}

	try {
		// Load markdown content (bundled at build time)
		const module = await loader();
		const markdown = module.default;
		
		// Parse markdown to HTML
		const html = await marked(markdown);

		// Note: HTML is already relatively safe from marked
		// For production, consider adding basic XSS protection if needed
		// DOMPurify + JSDOM doesn't work in Cloudflare Workers

		return {
			slug,
			html,
			fileName: `${slug}.md`
		};
	} catch (err) {
		console.error('Failed to load documentation:', err);
		throw error(500, 'Failed to parse documentation');
	}
};

