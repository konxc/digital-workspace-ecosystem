<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav class="bg-white shadow-sm border-b border-gray-200">
		<div class="container mx-auto px-6 py-4">
			<div class="flex items-center justify-between">
				<a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
					<div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
						<span class="text-white font-bold text-xl">D</span>
					</div>
					<div>
						<div class="font-bold text-gray-900">Digital Workspace</div>
						<div class="text-xs text-gray-500">Ecosystem</div>
					</div>
				</a>

				<div class="hidden md:flex items-center gap-6">
					<a href="/" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
						Home
					</a>
					<a href="/about" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
						Tentang
					</a>
					<a href="/roadmap" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
						Roadmap
					</a>
					<a href="/contributors" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
						Berkontribusi
					</a>
					<a href="/demo" class="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
						Demo
					</a>
				</div>

				<!-- Mobile menu button -->
				<button class="md:hidden p-2 text-gray-600" aria-label="Menu">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</nav>

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
					<p class="text-sm">
						Platform operasional berdaulat untuk Indonesia
					</p>
				</div>

				<div>
					<h3 class="font-bold text-white mb-4">Links</h3>
					<ul class="space-y-2 text-sm">
						<li><a href="/about" class="hover:text-white transition-colors">Tentang</a></li>
						<li><a href="/roadmap" class="hover:text-white transition-colors">Roadmap</a></li>
						<li><a href="/contributors" class="hover:text-white transition-colors">Berkontribusi</a></li>
						<li><a href="/demo" class="hover:text-white transition-colors">Demo</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-bold text-white mb-4">Resources</h3>
					<ul class="space-y-2 text-sm">
						<li><a href="/docs" class="hover:text-white transition-colors">Documentation</a></li>
						<li><a href="https://github.com" class="hover:text-white transition-colors">GitHub</a></li>
						<li><a href="/roadmap" class="hover:text-white transition-colors">Timeline</a></li>
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
