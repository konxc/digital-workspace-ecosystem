<script lang="ts">
	interface Props {
		isSticky?: boolean;
	}

	let { isSticky = false }: Props = $props();
</script>

{#if isSticky}
	<!-- Landing Page: Rounded Minimalist Glassmorphism Header -->
	<nav class="fixed top-2 left-2 right-2 lg:left-4 lg:right-4 z-50">
		<div class="backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl shadow-xl shadow-gray-900/10">
			<div class="container mx-auto px-6 py-3">
				<div class="flex items-center justify-between">
					<!-- Logo -->
					<a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
						<div class="w-9 h-9 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
							<span class="text-white font-bold text-lg">D</span>
						</div>
						<div>
							<div class="font-bold text-gray-900 text-sm">Digital Workspace</div>
							<div class="text-[10px] text-gray-500 font-medium">Ecosystem</div>
						</div>
					</a>

					<!-- Desktop Navigation -->
					<div class="hidden md:flex items-center gap-1">
						<a href="/about" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-all">
							Tentang
						</a>
						<a href="/docs" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-all">
							Docs
						</a>
						<a href="/roadmap" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-all">
							Roadmap
						</a>
						<a href="/contributors" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-all">
							Kontribusi
						</a>
						<a href="/demo" class="ml-2 px-4 py-1.5 bg-linear-to-r from-indigo-600 to-indigo-700 text-white text-sm rounded-lg font-semibold hover:shadow-md transition-all">
							Demo
						</a>
					</div>

					<!-- Mobile menu button -->
					<button class="md:hidden p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Menu">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>
{:else}
	<!-- Other Pages: Standard Header -->
	<nav class="bg-white shadow-sm border-b border-gray-200">
		<div class="container mx-auto px-6 py-4">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
					<div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
						<span class="text-white font-bold text-xl">D</span>
					</div>
					<div>
						<div class="font-bold text-gray-900">Digital Workspace</div>
						<div class="text-xs text-gray-500">Ecosystem</div>
					</div>
				</a>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center gap-6">
					<a href="/" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
					<a href="/about" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Tentang</a>
					<a href="/docs" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Docs</a>
					<a href="/roadmap" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Roadmap</a>
					<a href="/contributors" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Berkontribusi</a>
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
{/if}

