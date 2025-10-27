<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Partnership dengan Pemerintahan - Digital Workspace Ecosystem</title>
	<meta name="description" content="Platform operasional open source untuk pemerintahan desa, daerah, dan nasional. Mendukung transparansi, akuntabilitas, dan kedaulatan data." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-linear-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white py-20">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto text-center space-y-6">
			<div class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
				<span class="text-2xl">🏛️</span>
				<span>Partnership Pemerintahan</span>
			</div>
			
			<h1 class="text-5xl font-bold leading-tight">
				Platform untuk Pemerintahan yang Transparan dan Berdaulat
			</h1>
			
			<p class="text-xl text-indigo-100 max-w-3xl mx-auto">
				Solusi manajemen operasional open source yang mendukung transparansi, akuntabilitas, dan kedaulatan data untuk pemerintahan dari tingkat desa hingga nasional
			</p>

			<div class="flex gap-4 justify-center pt-6">
				<a href="#contact" class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
					Mulai Diskusi
				</a>
				<a href="/docs" class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors">
					Lihat Dokumentasi
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Government Levels -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Tingkatan Pemerintahan</h2>
				<p class="text-xl text-gray-600">Platform ini dirancang untuk semua tingkatan pemerintahan</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Desa -->
				<div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
					<div class="text-5xl mb-6">🏘️</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Tingkat Desa</h3>
					<p class="text-gray-600 mb-6">
						Perangkat desa dapat mengelola operasional, SDM, dan pelaporan dengan platform yang transparan dan akuntable
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Manajemen perangkat desa</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Pelaporan keuangan desa</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Tracking proyek pembangunan</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Audit trail lengkap</span>
						</li>
					</ul>
				</div>

				<!-- Daerah -->
				<div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
					<div class="text-5xl mb-6">🏢</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Tingkat Daerah</h3>
					<p class="text-gray-600 mb-6">
						Pemerintahan daerah dapat mengelola integrasi data, vendor management, dan analitik kebijakan publik
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Integrasi data antar SKPD</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Manajemen vendor & procurement</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Analitik kebijakan publik</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Dashboard real-time</span>
						</li>
					</ul>
				</div>

				<!-- Nasional -->
				<div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
					<div class="text-5xl mb-6">🇮🇩</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Tingkat Nasional</h3>
					<p class="text-gray-600 mb-6">
						Integrasi tingkat nasional dengan REST API yang dapat diolah oleh berbagai pihak terkait untuk transparansi penuh
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">REST API untuk integrasi</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Cross-platform analytics</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Open data standards</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-600 mt-1">✓</span>
							<span class="text-sm text-gray-600">Platform terpusat & federasi</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Key Benefits -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Prinsip Penting untuk Pemerintahan</h2>
				<p class="text-xl text-gray-600">Platform dirancang dengan prinsip-prinsip tata kelola yang baik</p>
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				<div class="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
					<span class="text-3xl">✅</span>
					<div>
						<h4 class="font-bold text-gray-900 text-lg mb-2">Akuntabilitas</h4>
						<p class="text-sm text-gray-600">Setiap operasi tercatat dengan audit trail lengkap dan terbuka. Transparansi mutlak untuk build trust publik</p>
					</div>
				</div>

				<div class="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-100">
					<span class="text-3xl">🛡️</span>
					<div>
						<h4 class="font-bold text-gray-900 text-lg mb-2">Kedaulatan Data</h4>
						<p class="text-sm text-gray-600">Data tetap berada di kontrol institusi pemerintahan. Self-hosted atau managed options tersedia</p>
					</div>
				</div>

				<div class="flex items-start gap-4 p-6 bg-purple-50 rounded-xl border border-purple-100">
					<span class="text-3xl">🔍</span>
					<div>
						<h4 class="font-bold text-gray-900 text-lg mb-2">Transparansi</h4>
						<p class="text-sm text-gray-600">Public transparency tools untuk keterbukaan informasi publik sesuai UU Keterbukaan Informasi Publik</p>
					</div>
				</div>

				<div class="flex items-start gap-4 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
					<span class="text-3xl">🗳️</span>
					<div>
						<h4 class="font-bold text-gray-900 text-lg mb-2">Demokratis</h4>
						<p class="text-sm text-gray-600">Platform mendukung partisipasi dan governance yang demokratis. Suara masyarakat didengar</p>
					</div>
				</div>

				<div class="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
					<span class="text-3xl">💾</span>
					<div>
						<h4 class="font-bold text-gray-900 text-lg mb-2">Open Source</h4>
						<p class="text-sm text-gray-600">100% open source dengan MIT License. Code dapat diaudit, dikustomisasi, dan di-deploy sendiri</p>
					</div>
				</div>

				<div class="flex items-start gap-4 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
					<span class="text-3xl">🔌</span>
					<div>
						<h4 class="font-bold text-gray-900 text-lg mb-2">REST API</h4>
						<p class="text-sm text-gray-600">Standardized API untuk integrasi dengan sistem existing. Data dapat diolah oleh pihak terkait</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Use Cases -->
<section class="py-20 bg-gray-50 border-y border-gray-200">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
				<p class="text-xl text-gray-600">Contoh implementasi di berbagai sektor pemerintahan</p>
			</div>

			<div class="space-y-8">
				<!-- Use Case 1 -->
				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="flex items-start gap-6">
						<div class="text-4xl">💰</div>
						<div class="flex-1">
							<h3 class="text-xl font-bold text-gray-900 mb-3">Manajemen Anggaran & Keuangan</h3>
							<p class="text-gray-600 mb-4">
								Tracking anggaran dari perencanaan hingga pelaporan. Real-time visibility untuk mencegah misuse anggaran publik
							</p>
							<ul class="space-y-2 text-sm text-gray-600">
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Dashboard anggaran real-time</span>
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Audit trail untuk setiap transaksi</span>
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Pelaporan otomatis ke pemerintah pusat</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Use Case 2 -->
				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="flex items-start gap-6">
						<div class="text-4xl">🏗️</div>
						<div class="flex-1">
							<h3 class="text-xl font-bold text-gray-900 mb-3">Project Management Pembangunan</h3>
							<p class="text-gray-600 mb-4">
								Tracking proyek pembangunan dari tender hingga completion. Monitoring progress & budget secara transparan
							</p>
							<ul class="space-y-2 text-sm text-gray-600">
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Timeline & milestone tracking</span>
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Photo evidence & progress reports</span>
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Public dashboard untuk transparansi</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Use Case 3 -->
				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="flex items-start gap-6">
						<div class="text-4xl">👥</div>
						<div class="flex-1">
							<h3 class="text-xl font-bold text-gray-900 mb-3">SDM & Performance Management</h3>
							<p class="text-gray-600 mb-4">
								Manajemen ASN dari rekrutmen, performance tracking, hingga career development
							</p>
							<ul class="space-y-2 text-sm text-gray-600">
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Tracking kualifikasi & certifications</span>
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Performance reviews & promotions</span>
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-600">✓</span>
									<span>Training & development programs</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section id="contact" class="py-20 bg-indigo-600 text-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<h2 class="text-4xl font-bold">Siap untuk Memulai?</h2>
			<p class="text-xl text-indigo-100">
				Diskusikan kebutuhan pemerintahan Anda dengan tim kami. Kami siap membantu implementasi platform ini untuk institusi Anda
			</p>

			<div class="grid md:grid-cols-2 gap-6 pt-8">
				<div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
					<div class="text-3xl mb-3">📧</div>
					<h3 class="font-semibold mb-2">Email</h3>
					<p class="text-sm text-indigo-100">government@digitalworkspace.id</p>
				</div>

				<div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
					<div class="text-3xl mb-3">💬</div>
					<h3 class="font-semibold mb-2">Diskusi</h3>
					<p class="text-sm text-indigo-100">Buat isu di GitHub atau telepon</p>
				</div>
			</div>

			<div class="flex gap-4 justify-center pt-8">
				<a href="/docs" class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
					Lihat Dokumentasi
				</a>
				<a href="/about" class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors">
					Pelajari Lebih Lanjut
				</a>
			</div>
		</div>
	</div>
</section>

