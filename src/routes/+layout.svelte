<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	
	let { children } = $props();
	
	// Check if current page is landing page using Svelte 5 runes + $app/state
	const isLandingPage = $derived(page.url.pathname === '/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Navigation - Glassmorphism for Landing Page -->
	<Header isSticky={isLandingPage} />

	<!-- Main Content -->
	<main class="grow">
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="bg-gray-900 text-gray-400">
		<div class="container mx-auto px-6 py-12">
			<div class="grid md:grid-cols-4 gap-8">
				<div>
					<div class="flex items-center gap-2 mb-4">
						<div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
							<span class="text-white font-bold">D</span>
						</div>
						<span class="font-bold text-white">Digital Workspace Ecosystem</span>
					</div>
					<p class="text-sm text-gray-400 leading-relaxed">
						Platform manajemen operasional open source yang akuntable, berdaulat, dan transparan untuk bisnis dan pemerintahan. Dibangun bersama komunitas untuk mendukung kedaulatan data Indonesia.
					</p>
				</div>

				<div>
					<h3 class="font-bold text-white mb-4">Navigation</h3>
					<ul class="space-y-2 text-sm">
						<li><a href="/about" class="hover:text-white transition-colors">Tentang</a></li>
						<li><a href="/docs" class="hover:text-white transition-colors">Documentation</a></li>
						<li><a href="/roadmap" class="hover:text-white transition-colors">Roadmap</a></li>
						<li><a href="/government" class="hover:text-white transition-colors">Pemerintahan</a></li>
						<li><a href="/contributors" class="hover:text-white transition-colors">Berkontribusi</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-bold text-white mb-4">Quick Links</h3>
					<ul class="space-y-2 text-sm">
						<li><a href="/demo" class="hover:text-white transition-colors">Demo</a></li>
						<li><a href="https://github.com" class="hover:text-white transition-colors">GitHub</a></li>
						<li><a href="/docs/INDEX" class="hover:text-white transition-colors">Complete Index</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-bold text-white mb-4">Features</h3>
					<ul class="space-y-2 text-sm">
						<li>👥 SDM Tracking</li>
						<li>💼 Business Management</li>
						<li>📊 Analytics & Reports</li>
					</ul>
				</div>
			</div>

			<div class="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
				<p>© 2025 Digital Workspace Ecosystem. Open Source dengan MIT License.</p>
				<p class="mt-2">Dibangun dengan ❤️ oleh komunitas untuk organisasi modern</p>
			</div>
		</div>
	</footer>
</div>
