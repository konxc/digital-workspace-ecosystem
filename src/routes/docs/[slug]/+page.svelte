<script lang="ts">
	import type { PageData } from './$types';
	import { docsRegistry } from '$lib/docs';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { onMount } from 'svelte';
	
	let { data }: { data: PageData } = $props();
	
	let showSticky = $state(false);
	let isBreadcrumbSticky = $state(false);
	
	// Add IDs to headings after article is rendered
	onMount(() => {
		const headings = document.querySelectorAll('article h2, article h3, article h4');
		headings.forEach((heading) => {
			if (!heading.id && heading.textContent) {
				const slug = heading.textContent
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/^-|-$/g, '');
				heading.id = slug;
			}
		});
	});
	
	// Calculate reading time
	function estimateReadingTime(html: string): number {
		const text = html.replace(/<[^>]*>/g, ''); // Remove HTML tags
		const words = text.split(/\s+/).length;
		const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words/min
		return readingTime;
	}
	
	const readingTime = estimateReadingTime(data.html);
	
	// Get prev/next docs
	const allDocs = Object.keys(docsRegistry);
	const currentIndex = allDocs.indexOf(data.slug);
	const prevSlug = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
	const nextSlug = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;
	
	function checkScroll() {
		const article = document.querySelector('article');
		if (article) {
			const articleBottom = article.offsetTop + article.offsetHeight;
			const windowBottom = window.scrollY + window.innerHeight;
			showSticky = windowBottom < articleBottom - 50;
		}
		
		// Check if breadcrumb is sticky (scrolled past initial position)
		isBreadcrumbSticky = window.scrollY > 0;
	}
	
	// Setup scroll listener with cleanup using $effect
	$effect(() => {
		if (typeof window !== 'undefined') {
			checkScroll();
			window.addEventListener('scroll', checkScroll);
			
			// Cleanup on unmount
			return () => {
				window.removeEventListener('scroll', checkScroll);
			};
		}
	});
</script>

<svelte:head>
	<title>{data.slug.charAt(0).toUpperCase() + data.slug.slice(1).replace(/_/g, ' ')} - Digital Workspace Ecosystem</title>
	<meta name="description" content={`Documentation: ${data.fileName}`} />
	<meta name="author" content="Digital Workspace Ecosystem Community" />
	<meta property="og:title" content={data.slug.replace(/_/g, ' ')} />
	<meta property="og:description" content={`Read about ${data.slug.replace(/_/g, ' ').toLowerCase()}`} />
	<meta property="og:type" content="article" />
</svelte:head>

<!-- Navigation Breadcrumb - Sticky with dynamic container -->
<nav class={`sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all ${isBreadcrumbSticky ? 'py-2' : 'py-4'}`}>
	{#if isBreadcrumbSticky}
		<!-- Full width saat sticky untuk efficient space -->
		<div class="w-full px-6">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2 text-sm">
					<a href="/" class="text-gray-600 hover:text-indigo-600">Home</a>
					<span class="text-gray-400">/</span>
					<a href="/docs" class="text-gray-600 hover:text-indigo-600">Documentation</a>
					<span class="text-gray-400">/</span>
					<span class="text-gray-900 font-medium">{data.slug.replace(/_/g, ' ')}</span>
				</div>
				<div class="text-xs text-gray-500">
					{readingTime} min read
				</div>
			</div>
		</div>
	{:else}
		<!-- Container saat NOT sticky untuk readability -->
		<div class="container mx-auto px-6">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2 text-sm">
					<a href="/" class="text-gray-600 hover:text-indigo-600">Home</a>
					<span class="text-gray-400">/</span>
					<a href="/docs" class="text-gray-600 hover:text-indigo-600">Documentation</a>
					<span class="text-gray-400">/</span>
					<span class="text-gray-900 font-medium">{data.slug.replace(/_/g, ' ')}</span>
				</div>
				<div class="text-xs text-gray-500">
					{readingTime} min read
				</div>
			</div>
		</div>
	{/if}
</nav>

<!-- Documentation Content -->
<section class="py-6 bg-white">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-8">
			<!-- Main Content -->
			<div class="max-w-4xl">
				<article class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-code:text-indigo-600 prose-pre:bg-gray-50 prose-pre:border prose-blockquote:border-l-4 prose-blockquote:border-indigo-600 prose-table:border-gray-200">
					{@html data.html}
				</article>
			</div>

			<!-- Sidebar - Table of Contents -->
			<aside class="hidden xl:block">
				<div class={`sticky ${isBreadcrumbSticky ? 'top-16':'top-10'}`}>
					<TableOfContents html={data.html} variant="borderless" />
				</div>
			</aside>
		</div>
	</div>
</section>

<!-- Navigation Footer -->
<section class="py-12 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<!-- Divider Line -->
			<div class="border-t border-gray-200 pt-8">
				<!-- Prev/Next Navigation -->
				<div class="flex items-center gap-8">
					{#if prevSlug}
						<a href={`/docs/${prevSlug}`} class="flex-1 group">
							<div class="flex items-center gap-2 text-sm text-gray-500 mb-1">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
								</svg>
								<span>Previous</span>
							</div>
							<div class="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors font-medium">
								{prevSlug.replace(/_/g, ' ')}
							</div>
						</a>
					{:else}
						<div class="flex-1"></div>
					{/if}
					
					<div class="w-px h-12 bg-gray-200"></div>
					
					{#if nextSlug}
						<a href={`/docs/${nextSlug}`} class="flex-1 group text-right">
							<div class="flex items-center gap-2 text-sm text-gray-500 mb-1 justify-end">
								<span>Next</span>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>
							</div>
							<div class="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors font-medium">
								{nextSlug.replace(/_/g, ' ')}
							</div>
						</a>
					{:else}
						<div class="flex-1"></div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Back to Documentation - Sticky Bottom (only visible when scrolled) -->
{#if showSticky}
<div class="fixed bottom-4 left-6 z-50">
	<a href="/docs" class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg">
		← Back to Documentation
	</a>
</div>
{/if}

