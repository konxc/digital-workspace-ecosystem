<script lang="ts">
	import type { PageData } from './$types';
</script>

<svelte:head>
	<title>Tentang - Digital Workspace Ecosystem</title>
	<meta name="description" content="Platform manajemen operasional open source untuk organisasi modern, bagian dari ekosistem software Indonesia" />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 bg-linear-to-br from-indigo-50 via-white to-blue-50">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-3xl mx-auto">
			<h1 class="text-5xl font-bold text-gray-900 mb-6">Tentang Platform Ini</h1>
			<p class="text-xl text-gray-600">
				Platform modern untuk manajemen operasional organisasi
			</p>
		</div>
	</div>
</section>

<!-- Vision Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8">🌟 Visi Kami</h2>
			<div class="prose prose-lg text-gray-700">
				<p class="text-lg leading-relaxed mb-6">
					Memberikan organisasi kendali penuh atas data dan proses operasional mereka melalui platform yang 
					transparan, fleksibel, dan mudah dikustomisasi.
				</p>
				<p class="text-lg leading-relaxed mb-6">
					Kami percaya bahwa setiap organisasi berhak memiliki sistem manajemen yang tidak terikat vendor, 
					dapat disesuaikan dengan kebutuhan unik mereka, dan memberikan insight yang actionable untuk keputusan bisnis yang lebih baik.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Ecosystem Context Section -->
<section class="py-16 bg-blue-50">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🌱 Bagian dari Ekosistem Open Source Indonesia</h2>
			
			<div class="grid md:grid-cols-2 gap-6 mb-8">
				<div class="bg-white p-6 rounded-xl shadow-md">
					<h3 class="font-bold text-gray-900 mb-3">📚 SLiMS</h3>
					<p class="text-sm text-gray-700">Manajemen Perpustakaan - Sistem perpustakaan digital terbuka</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-md">
					<h3 class="font-bold text-gray-900 mb-3">🏘️ OpenSID</h3>
					<p class="text-sm text-gray-700">Manajemen Desa - Sistem informasi desa terbuka</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-md">
					<h3 class="font-bold text-gray-900 mb-3">🎓 2USE & We Will Shine</h3>
					<p class="text-sm text-gray-700">LLM Edukasi - Platform pembelajaran berbasis AI</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-md border-2 border-indigo-600">
					<h3 class="font-bold text-indigo-600 mb-3">💼 Digital Workspace Ecosystem</h3>
					<p class="text-sm text-gray-700">HR & Manajerial Perusahaan - Manajemen operasional akuntable</p>
				</div>
			</div>

			<div class="bg-linear-to-br from-green-50 to-blue-50 p-6 rounded-xl">
				<p class="text-center text-gray-700">
					Bersama membangun ekosistem software Indonesia yang mandiri, transparan, dan bermanfaat untuk masyarakat luas.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Deployment Models Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🔀 Dua Model Deployment</h2>
			<p class="text-center text-gray-600 mb-12">
				Pilih antara platform open source untuk self-hosting atau managed hub dengan marketplace terintegrasi
			</p>

			<div class="grid md:grid-cols-2 gap-8 mb-12">
				<!-- Open Source Model -->
				<div class="bg-linear-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border-2 border-indigo-300">
					<div class="flex items-center gap-3 mb-6">
						<div class="text-4xl">🔓</div>
						<div>
							<h3 class="text-2xl font-bold text-gray-900">Open Source</h3>
							<p class="text-sm text-gray-600">Self-Hosted</p>
						</div>
					</div>

					<div class="space-y-4 mb-6">
						<p class="text-gray-700">
							Platform yang dapat Anda deploy sendiri di infrastruktur organisasi dengan kendali penuh.
						</p>

						<h4 class="font-bold text-gray-900">Keunggulan:</h4>
						<ul class="space-y-2 text-sm text-gray-700">
							<li>✓ 100% open source - MIT License</li>
							<li>✓ Self-hosted untuk kontrol data penuh</li>
							<li>✓ Fully customizable</li>
							<li>✓ Tidak ada vendor lock-in</li>
							<li>✓ Kedaulatan data terjaga</li>
						</ul>

						<h4 class="font-bold text-gray-900 mt-4">Cocok untuk:</h4>
						<ul class="space-y-2 text-sm text-gray-700">
							<li>Enterprise yang butuh kendali penuh</li>
							<li>Organisasi dengan data sensitif</li>
							<li>Instansi pemerintah</li>
							<li>Organisasi yang ingin customize</li>
						</ul>
					</div>
				</div>

				<!-- Managed Hub Model -->
				<div class="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-300">
					<div class="flex items-center gap-3 mb-6">
						<div class="text-4xl">🌐</div>
						<div>
							<h3 class="text-2xl font-bold text-gray-900">Managed Hub</h3>
							<p class="text-sm text-gray-600">Marketplace & Network</p>
						</div>
					</div>

					<div class="space-y-4 mb-6">
						<p class="text-gray-700">
							Marketplace terpusat yang menghubungkan SDM, vendors, dan klien dalam ekosistem.
						</p>

						<h4 class="font-bold text-gray-900">Keunggulan:</h4>
						<ul class="space-y-2 text-sm text-gray-700">
							<li>✓ Network effects</li>
							<li>✓ Marketplace terintegrasi</li>
							<li>✓ Connect SDM-vendor-klien</li>
							<li>✓ Policy operations tools</li>
							<li>✓ Kedaulatan data tetap dijaga</li>
						</ul>

						<h4 class="font-bold text-gray-900 mt-4">Cocok untuk:</h4>
						<ul class="space-y-2 text-sm text-gray-700">
							<li>Agencies yang butuh marketplace</li>
							<li>Vendors yang ingin connect dengan klien</li>
							<li>Organisasi yang ingin kolaborasi</li>
							<li>Startup yang butuh network</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
				<p class="text-gray-700">
					<strong class="text-gray-900">Integrasi Fleksibel:</strong> Kedua model dapat saling terintegrasi. 
					Organisasi besar dapat self-host untuk data sensitive, dan menggunakan marketplace hub untuk vendor networking.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Core Features Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🎯 Fitur Utama</h2>
			<p class="text-center text-gray-600 mb-12">
				Platform modular yang dapat disesuaikan dengan kebutuhan organisasi Anda
			</p>

			<div class="space-y-8">
				<!-- Feature 1: SDM -->
				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="flex items-start gap-4 mb-4">
						<div class="text-4xl">👥</div>
						<div>
							<h3 class="text-2xl font-bold text-gray-900 mb-2">Manajemen SDM</h3>
							<p class="text-gray-600 mb-4">
								Kelola talent, track performance, dan kembangkan skill tim dengan sistem yang terintegrasi.
							</p>
							<ul class="list-disc list-inside space-y-2 text-gray-700">
								<li>Developer Onboarding Program</li>
								<li>Talent Database & Performance Tracking</li>
								<li>Certification System</li>
								<li>Community Contribution Rewards</li>
								<li>Knowledge Sharing Platform</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Feature 2: Operasional -->
				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="flex items-start gap-4 mb-4">
						<div class="text-4xl">💼</div>
						<div>
							<h3 class="text-2xl font-bold text-gray-900 mb-2">Operasional Bisnis</h3>
							<p class="text-gray-600 mb-4">
								Manage client, project, invoice, dan vendor dalam satu dashboard terpusat.
							</p>
							<ul class="list-disc list-inside space-y-2 text-gray-700">
								<li>Client & Project Management</li>
								<li>Invoice & Finance Tracking</li>
								<li>Vendor Database</li>
								<li>Contract Management</li>
								<li>Reporting & Analytics</li>
								<li>Marketplace Integration</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Feature 3: Analitik -->
				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="flex items-start gap-4 mb-4">
						<div class="text-4xl">📊</div>
						<div>
							<h3 class="text-2xl font-bold text-gray-900 mb-2">Analitik & Transparansi</h3>
							<p class="text-gray-600 mb-4">
								Dashboard analitik yang memberikan insight yang actionable untuk pengambilan keputusan.
							</p>
							<ul class="list-disc list-inside space-y-2 text-gray-700">
								<li>Real-time Dashboard</li>
								<li>Custom Reports</li>
								<li>Data Export & Sharing</li>
								<li>Audit Trail</li>
								<li>Performance Metrics</li>
								<li>Advanced Analytics</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Philosophy Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8">💭 Filosofi</h2>
			
			<div class="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
				<p class="text-lg text-gray-700 italic mb-4">
					Platform yang dibangun untuk memberikan kendali penuh kepada organisasi dalam mengelola operasional mereka, 
					dengan prinsip transparansi, fleksibilitas, dan kemandirian teknologi.
				</p>
			</div>

			<div class="space-y-6 text-lg text-gray-700">
				<div>
					<h3 class="font-bold text-gray-900 mb-2">Prinsip-Prinsip Kami</h3>
					<p>Platform ini dibangun dengan fokus pada <strong class="text-indigo-600">transparansi, efisiensi, dan kemandirian</strong> organisasi dalam mengelola data dan operasional mereka.</p>
				</div>

				<div class="grid md:grid-cols-2 gap-4">
					<div class="p-6 bg-indigo-50 rounded-lg">
						<p class="font-semibold text-gray-900 mb-2">Transparansi</p>
						<p class="text-gray-700">Setiap proses dapat diaudit dan diverifikasi</p>
					</div>
					<div class="p-6 bg-blue-50 rounded-lg">
						<p class="font-semibold text-gray-900 mb-2">Fleksibilitas</p>
						<p class="text-gray-700">Modular dan dapat disesuaikan dengan kebutuhan</p>
					</div>
					<div class="p-6 bg-purple-50 rounded-lg">
						<p class="font-semibold text-gray-900 mb-2">Komunitas</p>
						<p class="text-gray-700">Berkembang bersama melalui kolaborasi</p>
					</div>
					<div class="p-6 bg-green-50 rounded-lg">
						<p class="font-semibold text-gray-900 mb-2">Kemandirian</p>
						<p class="text-gray-700">Self-hosted untuk kontrol data penuh</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Community Values Section -->
<section class="py-16 bg-linear-to-br from-green-50 to-blue-50">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8">🤝 Nilai-Nilai Komunitas</h2>
			
			<div class="bg-white p-8 rounded-xl shadow-lg mb-6">
				<p class="text-lg text-gray-700 mb-4">
					Platform ini dikembangkan dengan pendekatan <strong class="text-green-600">komunitas terbuka</strong> dan 
					<strong class="text-blue-600">pengembangan kolaboratif</strong>. Setiap kontribusi dari anggota komunitas 
					mendukung evolusi platform yang lebih baik.
				</p>
				<p class="text-gray-600">
					Kami percaya bahwa dengan kolaborasi dan transparansi, kita dapat menciptakan solusi yang 
					benar-benar bermanfaat untuk organisasi modern.
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				<div class="bg-white p-6 rounded-xl shadow-md">
					<h3 class="font-bold text-gray-900 mb-3">💡 Misi</h3>
					<ul class="space-y-2 text-gray-700">
						<li>✓ Membangun solusi yang fleksibel dan mudah digunakan</li>
						<li>✓ Memberikan kendali penuh kepada organisasi atas data mereka</li>
						<li>✓ Mendorong pengembangan berbasis komunitas</li>
						<li>✓ Menjaga prinsip transparansi dan open source</li>
					</ul>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-md">
					<h3 class="font-bold text-gray-900 mb-3">🎯 Nilai</h3>
					<ul class="space-y-2 text-gray-700">
						<li>✓ Transparansi dalam setiap aspek pengembangan</li>
						<li>✓ Meritokrasi berbasis kontribusi nyata</li>
						<li>✓ Demokrasi partisipatif dalam keputusan</li>
						<li>✓ Independensi melalui self-hosting</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Tech Stack Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🛠️ Teknologi</h2>
			
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-indigo-50 p-6 rounded-xl text-center">
					<h3 class="font-bold text-gray-900 mb-2">SvelteKit 5</h3>
					<p class="text-sm text-gray-600">Modern framework dengan Svelte 5 Runes</p>
				</div>

				<div class="bg-blue-50 p-6 rounded-xl text-center">
					<h3 class="font-bold text-gray-900 mb-2">TypeScript</h3>
					<p class="text-sm text-gray-600">Type-safe development</p>
				</div>

				<div class="bg-purple-50 p-6 rounded-xl text-center">
					<h3 class="font-bold text-gray-900 mb-2">Tailwind CSS 4</h3>
					<p class="text-sm text-gray-600">Modern utility-first CSS</p>
				</div>

				<div class="bg-green-50 p-6 rounded-xl text-center">
					<h3 class="font-bold text-gray-900 mb-2">Drizzle ORM</h3>
					<p class="text-sm text-gray-600">Type-safe database queries</p>
				</div>

				<div class="bg-yellow-50 p-6 rounded-xl text-center">
					<h3 class="font-bold text-gray-900 mb-2">Self-Hosted</h3>
					<p class="text-sm text-gray-600">Docker + GitLab integration</p>
				</div>

				<div class="bg-pink-50 p-6 rounded-xl text-center">
					<h3 class="font-bold text-gray-900 mb-2">Open Source</h3>
					<p class="text-sm text-gray-600">MIT License core</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-indigo-600">
	<div class="container mx-auto px-6 text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Siap Memulai?</h2>
		<p class="text-xl text-indigo-100 mb-8">
			Lihat roadmap pengembangan platform kami
		</p>
		<a href="/roadmap" class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
			Lihat Roadmap →
		</a>
	</div>
</section>
