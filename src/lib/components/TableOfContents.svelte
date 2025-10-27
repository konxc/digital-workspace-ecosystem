<script lang="ts">
	interface TocItem {
		level: number;
		text: string;
		id: string;
	}

	interface Props {
		html: string;
		variant?: 'bordered' | 'borderless';
	}

	let { html, variant = 'bordered' }: Props = $props();

	let tocItems = $state<TocItem[]>([]);

	// Extract headings from HTML
	function extractHeadings(htmlContent: string): TocItem[] {
		const headings: TocItem[] = [];
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlContent, 'text/html');
		
		// Find all h2, h3, h4 elements
		const headingsElements = doc.querySelectorAll('h2, h3, h4');
		
		headingsElements.forEach((heading) => {
			const level = parseInt(heading.tagName.charAt(1));
			const text = heading.textContent || '';
			// Create slug from text (lowercase, replace spaces with hyphens)
			const id = text
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-|-$/g, '');
			
			// Set id on heading element
			heading.id = id;
			
			headings.push({ level, text, id });
		});
		
		return headings;
	}

	// Extract on mount and also set up DOM observer for IDs
	$effect(() => {
		if (typeof window !== 'undefined' && html) {
			tocItems = extractHeadings(html);
			
			// Wait for DOM to be ready, then set IDs on headings
			setTimeout(() => {
				tocItems.forEach((item) => {
					const element = document.getElementById(item.id);
					if (!element) {
						// If element doesn't exist yet, try to find it by text
						const headings = document.querySelectorAll('h2, h3, h4');
						for (const heading of headings) {
							if (heading.textContent?.trim() === item.text) {
								heading.id = item.id;
								break;
							}
						}
					}
				});
			}, 100);
		}
	});

	let activeId = $state('');
	let tocContainer = $state<HTMLElement | null>(null);

	// Auto-scroll TOC to show active item
	$effect(() => {
		if (!activeId || !tocContainer) return;

		// Find the active link element
		const activeLink = tocContainer.querySelector(`a[href="#${activeId}"]`);
		
		if (activeLink) {
			const containerRect = tocContainer.getBoundingClientRect();
			const linkRect = activeLink.getBoundingClientRect();
			
			// Check if link is visible in container
			const isAbove = linkRect.top < containerRect.top;
			const isBelow = linkRect.bottom > containerRect.bottom;
			
			if (isAbove || isBelow) {
				// Scroll the link into view smoothly
				activeLink.scrollIntoView({ 
					behavior: 'smooth', 
					block: 'center' 
				});
			}
		}
	});

	// Update active heading on scroll
	$effect(() => {
		if (typeof window === 'undefined' || tocItems.length === 0) return;

		function updateActiveHeading() {
			// Offset for sticky breadcrumb
			const offset = 150;
			const scrollPosition = window.scrollY + offset;
			
			// Find which heading is currently in view
			let currentHeading = '';
			
			// Check from top to bottom
			for (let i = 0; i < tocItems.length; i++) {
				const item = tocItems[i];
				const element = document.getElementById(item.id);
				
				if (element) {
					const elementTop = element.getBoundingClientRect().top + window.scrollY;
					
					// If we haven't scrolled past this heading yet, it's the current one
					if (scrollPosition < elementTop - 100) {
						break;
					}
					
					currentHeading = item.id;
				}
			}
			
			// Set the active heading
			if (currentHeading) {
				activeId = currentHeading;
			}
		}

		// Initial check
		updateActiveHeading();
		
		// Add scroll listener
		window.addEventListener('scroll', updateActiveHeading, { passive: true });

		// Also check on hash change (when clicking TOC items)
		const handleHashChange = () => {
			if (window.location.hash) {
				const id = window.location.hash.slice(1);
				activeId = id;
			}
		};
		
		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('scroll', updateActiveHeading);
			window.removeEventListener('hashchange', handleHashChange);
		};
	});

	function scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (element) {
			// Calculate scroll position with proper offset for sticky breadcrumb
			const breadcrumbHeight = 60; // Height of sticky breadcrumb + spacing
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - breadcrumbHeight;
			
			// Smooth scroll to position
			window.scrollTo({ 
				top: Math.max(0, offsetPosition), 
				behavior: 'smooth' 
			});
			
			// Update URL hash after scroll
			setTimeout(() => {
				history.pushState(null, '', `#${id}`);
			}, 100);
			
			// Set active state immediately
			activeId = id;
			
			// Add visual highlight after scroll completes
			setTimeout(() => {
				element.classList.add('toc-highlight');
				setTimeout(() => {
					element.classList.remove('toc-highlight');
				}, 1000);
			}, 300);
		}
	}

</script>

{#if tocItems.length > 0}
	<div bind:this={tocContainer} class={`max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin ${
		variant === 'bordered' 
			? 'bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm' 
			: 'p-3'
	}`}>
		<!-- Header -->
		<div class="flex items-center justify-between mb-4">
			<h2 class={`text-xs font-semibold uppercase tracking-wider ${
				variant === 'bordered' ? 'text-gray-500' : 'text-gray-400'
			}`}>
				Contents
			</h2>
			<span class="text-[10px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full font-medium">{tocItems.length}</span>
		</div>
		
		<!-- Navigation -->
		<nav class="space-y-1">
			{#each tocItems as item (item.id)}
			<a
				href="#{item.id}"
				onclick={(e) => {
					e.preventDefault();
					scrollToHeading(item.id);
				}}
				title={item.text}
				aria-label={`Jump to section: ${item.text}`}
				class={`group truncate relative block py-1.5 px-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-indigo-400 ${
					activeId === item.id
						? variant === 'bordered'
							? 'bg-indigo-50 text-indigo-700'
							: 'bg-gray-100 text-gray-900'
						: variant === 'bordered'
							? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
							: 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
				} ${
					item.level === 2 ? 'font-semibold' : 
					item.level === 3 ? 'font-medium' : 
					item.level === 4 ? 'font-normal' : 'font-light'
				}`}
				style="margin-left: {(item.level - 2) * 14}px"
			>
				<!-- Text - Different sizes per level -->
				<span class={`truncate leading-tight ${
					item.level === 2 ? 'text-sm' : 
					item.level === 3 ? 'text-xs' : 
					'text-[11px]'
				}`}>
					{item.text}
				</span>
				
				<!-- Active indicator - Soft -->
				{#if activeId === item.id}
					<span class={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-r-full ${
						variant === 'bordered' ? 'bg-indigo-400' : 'bg-gray-400'
					}`} style={item.level === 2 ? 'height: 18px' : item.level === 3 ? 'height: 14px' : 'height: 10px'}></span>
				{/if}
			</a>
			{/each}
		</nav>
	</div>
{/if}

