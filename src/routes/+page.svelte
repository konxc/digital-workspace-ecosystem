<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Digital Workspace Ecosystem - Platform Manajemen Operasional Open Source</title>
	<meta name="description" content="Platform manajemen HR dan operasional bisnis yang akuntable, self-hosted, dan modular" />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-blue-50">
	<div class="container mx-auto px-6 py-12">
		<div class="text-center space-y-8 animate-fade-in">
			<div class="space-y-4">
				<h1 class="text-6xl font-bold text-gray-900 leading-tight">
					<span class="text-indigo-600">Digital Workspace</span>
					<br />
					<span class="text-gray-700">Ecosystem</span>
				</h1>
				<p class="text-2xl text-gray-600 max-w-3xl mx-auto">
					Platform manajemen operasional yang modern dan fleksibel
				</p>
				<p class="text-lg text-gray-500 max-w-2xl mx-auto">
					Kelola SDM, operasional bisnis, dan analitik dalam satu ekosistem yang transparan dan terintegrasi
				</p>
			</div>

			<div class="flex gap-4 justify-center">
				<a href="/demo" class="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
					Coba Demo
				</a>
				<a href="/about" class="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
					Pelajari Lebih Lanjut
				</a>
			</div>

			<!-- 3 Pilar Badge -->
			<div class="flex justify-center gap-8 pt-8">
				<div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
					<div class="text-3xl mb-2">👥</div>
					<h3 class="font-bold text-gray-900">SDM</h3>
					<p class="text-sm text-gray-600">Pengelolaan Talenta</p>
				</div>
				<div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
					<div class="text-3xl mb-2">💼</div>
					<h3 class="font-bold text-gray-900">Operasional</h3>
					<p class="text-sm text-gray-600">Manajemen Bisnis</p>
				</div>
				<div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
					<div class="text-3xl mb-2">📊</div>
					<h3 class="font-bold text-gray-900">Transparansi</h3>
					<p class="text-sm text-gray-600">Analitik & Pelaporan</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-4">Kenapa Platform Ini?</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Platform yang dibangun dengan prinsip transparansi, demokrasi, dan kedaulatan data
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<!-- Feature 1 -->
			<div class="p-8 bg-indigo-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="text-4xl mb-4">🔒</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Kedaulatan Data</h3>
				<p class="text-gray-600">
					Self-hosted ready dengan GitLab integration. Data Anda tetap di control Anda, bukan vendor.
				</p>
			</div>

			<!-- Feature 2 -->
			<div class="p-8 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="text-4xl mb-4">🌐</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Open Source</h3>
				<p class="text-gray-600">
					Core platform open source (MIT License). Build dengan community, untuk community.
				</p>
			</div>

			<!-- Feature 3 -->
			<div class="p-8 bg-purple-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="text-4xl mb-4">🎯</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Transparansi Built-in</h3>
				<p class="text-gray-600">
					Audit trail lengkap, benchmarking vendor, dan tools analitik yang komprehensif.
				</p>
			</div>

			<!-- Feature 4 -->
			<div class="p-8 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="text-4xl mb-4">🔧</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Modular</h3>
				<p class="text-gray-600">
					Install hanya module yang Anda butuhkan. CRM, SDM Tracking, atau Analytics Tools.
				</p>
			</div>

			<!-- Feature 5 -->
			<div class="p-8 bg-yellow-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="text-4xl mb-4">🤝</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Community-Driven</h3>
				<p class="text-gray-600">
					Dikembangkan bersama komunitas. Kontribusi terbuka untuk evolusi platform yang berkelanjutan.
				</p>
			</div>

			<!-- Feature 6 -->
			<div class="p-8 bg-pink-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="text-4xl mb-4">🚀</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Modern Tech Stack</h3>
				<p class="text-gray-600">
					SvelteKit 5, TypeScript, Tailwind CSS 4. Fast, reliable, dan developer-friendly.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Deployment Options Section -->
<section class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Dua Model untuk Setiap Kebutuhan</h2>
				<p class="text-xl text-gray-600">
					Pilih model yang sesuai dengan kebutuhan organisasi Anda
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-8">
				<!-- Open Source Model -->
				<div class="bg-indigo-50 p-8 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
					<div class="flex items-center gap-3 mb-4">
						<div class="text-4xl">🔓</div>
						<h3 class="text-2xl font-bold text-gray-900">Open Source</h3>
					</div>
					<p class="text-gray-700 mb-6">
						Platform open source yang dapat Anda deploy sendiri di infrastruktur Anda.
					</p>
					
					<ul class="space-y-3 mb-6">
						<li class="flex items-start gap-3">
							<span class="text-green-600">✓</span>
							<span class="text-gray-700">100% open source (MIT License)</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600">✓</span>
							<span class="text-gray-700">Self-hosted - full control data</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600">✓</span>
							<span class="text-gray-700">Fully customizable</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600">✓</span>
							<span class="text-gray-700">Kedaulatan data penuh</span>
						</li>
					</ul>

					<a href="/docs" class="block w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center">
						Lihat Dokumentasi
					</a>
				</div>

				<!-- Hub Model -->
				<div class="bg-purple-50 p-8 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-colors">
					<div class="flex items-center gap-3 mb-4">
						<div class="text-4xl">🌐</div>
						<h3 class="text-2xl font-bold text-gray-900">Managed Hub</h3>
					</div>
					<p class="text-gray-700 mb-6">
						Marketplace terpusat yang menghubungkan SDM, vendors, dan klien dalam ekosistem.
					</p>
					
					<ul class="space-y-3 mb-6">
						<li class="flex items-start gap-3">
							<span class="text-purple-600">✓</span>
							<span class="text-gray-700">Marketplace terintegrasi</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-purple-600">✓</span>
							<span class="text-gray-700">Connect SDM, vendors, klien</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-purple-600">✓</span>
							<span class="text-gray-700">Policy operations tools</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-purple-600">✓</span>
							<span class="text-gray-700">Kedaulatan data tetap terjaga</span>
						</li>
					</ul>

					<a href="/about" class="block w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center">
						Pelajari Lebih Lanjut
					</a>
				</div>
			</div>

			<div class="mt-12 bg-blue-50 p-6 rounded-xl">
				<p class="text-center text-gray-700">
					Keduanya dapat saling terintegrasi sesuai kebutuhan organisasi Anda. 
					<span class="font-semibold">Prinsip kedaulatan data tetap dijaga</span> dalam kedua model.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Use Case Section -->
<section class="py-24 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Solusi untuk Organisasi</h2>
				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<div class="text-2xl">💼</div>
						<div>
							<h3 class="font-bold text-gray-900">CRM Terintegrasi</h3>
							<p class="text-gray-600">Kelola client, project, dan invoice dalam satu dashboard terpusat</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="text-2xl">👥</div>
						<div>
							<h3 class="font-bold text-gray-900">Manajemen SDM</h3>
							<p class="text-gray-600">Track talent, performance, dan development tim dengan transparan</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="text-2xl">📊</div>
						<div>
							<h3 class="font-bold text-gray-900">Analitik Cerdas</h3>
							<p class="text-gray-600">Insight data yang actionable untuk keputusan bisnis yang tepat</p>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-white p-8 rounded-xl shadow-lg">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Keunggulan</h2>
				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<div class="text-2xl">🔒</div>
						<div>
							<h3 class="font-bold text-gray-900">Data Sovereignty</h3>
							<p class="text-gray-600">Self-hosted untuk kontrol penuh atas data organisasi</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="text-2xl">🔧</div>
						<div>
							<h3 class="font-bold text-gray-900">Modular & Fleksibel</h3>
							<p class="text-gray-600">Install sesuai kebutuhan, customize sesuai workflow</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="text-2xl">🌱</div>
						<div>
							<h3 class="font-bold text-gray-900">Open Source Core</h3>
							<p class="text-gray-600">Transparansi kode, community-driven development</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-indigo-600">
	<div class="container mx-auto px-6 text-center">
		<h2 class="text-4xl font-bold text-white mb-6">Mulai Gunakan Platform</h2>
		<p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
			Platform modern untuk manajemen operasional organisasi dengan prinsip transparansi dan fleksibilitas
		</p>
		<div class="flex gap-4 justify-center">
			<a href="/roadmap" class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
				Lihat Roadmap
			</a>
			<a href="/about" class="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
				Pelajari Lebih Lanjut
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}
</style>
