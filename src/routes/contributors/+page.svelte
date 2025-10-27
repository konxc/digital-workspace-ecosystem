<script lang="ts">
	import type { PageData } from './$types';
</script>

<svelte:head>
	<title>Berkontribusi - Digital Workspace Ecosystem</title>
	<meta name="description" content="Bergabung dengan kami untuk membangun platform transparansi dan akuntabilitas untuk ekosistem digital Indonesia" />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 bg-linear-to-br from-purple-50 via-white to-indigo-50">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-4xl mx-auto">
			<h1 class="text-5xl font-bold text-gray-900 mb-6">
				Berkontribusi untuk Indonesia yang Lebih Transparan
			</h1>
			<p class="text-xl text-gray-600 mb-8">
				Bangun bersama kami platform yang mendorong transparansi dan akuntabilitas 
				di ekosistem digital Indonesia
			</p>
			<div class="flex gap-4 justify-center">
				<a href="#why-matters" class="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
					Pelajari Mengapa Penting
				</a>
				<a href="#how-to-contribute" class="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
					Mulai Berkontribusi
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Why It Matters -->
<section id="why-matters" class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">Mengapa Ini Penting?</h2>
			
			<div class="space-y-8">
				<!-- Problem Statement -->
				<div class="bg-linear-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
					<h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
						<div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
							<span class="text-red-600">✕</span>
						</div>
						Masalah yang Kita Hadapi
					</h3>
					<div class="space-y-4 text-gray-700">
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Kurangnya Transparansi:</strong> Perusahaan digital dan instansi pemerintah seringkali tidak transparan dalam operasional dan anggaran mereka</span>
						</p>
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Overpricing:</strong> Markup berlebihan yang menghambat pertumbuhan industri teknologi</span>
						</p>
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Tidak Ada Kolaborasi:</strong> SDM, vendors, dan klien sulit terhubung dalam ekosistem yang sehat</span>
						</p>
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Tidak Ada Advocacy Tools:</strong> Masyarakat tidak punya tools untuk mendorong transparansi publik</span>
						</p>
					</div>
				</div>

				<!-- Our Mission -->
				<div class="bg-linear-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
					<h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
						<div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
							<span class="text-green-600">✓</span>
						</div>
						Apa yang Kita Bangun
					</h3>
					<div class="space-y-4 text-gray-700">
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Digital Workspace Ecosystem:</strong> Platform operasional berdaulat yang menghubungkan SDM, operasional bisnis, dan analitik</span>
						</p>
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Bukan Pengganti:</strong> Kita TIDAK menggantikan sistem yang sudah ada. Kita MENSOLIDKAN transparansi dan MENDORONG accountability</span>
						</p>
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Advocacy Tools:</strong> Built-in transparency dashboard dan policy operations tools untuk public advocacy</span>
						</p>
						<p class="flex items-start gap-4">
							<span class="text-gray-400 text-xl mt-0.5">→</span>
							<span><strong class="text-gray-900">Indonesia OS Ecosystem:</strong> Bagian dari ekosistem open source Indonesia bersama SLiMS, OpenSID, dan platform lainnya</span>
						</p>
					</div>
				</div>

				<!-- Impact -->
				<div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
					<h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
						<div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
							<span class="text-indigo-600">🚀</span>
						</div>
						Dampak yang Akan Kita Buat
					</h3>
					<div class="grid md:grid-cols-2 gap-4">
						<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors">
							<h4 class="font-bold text-gray-900 mb-2">Untuk Perusahaan Digital</h4>
							<p class="text-sm text-gray-600">Tools transparansi untuk accountability internal dan marketplace untuk kolaborasi</p>
						</div>
						<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors">
							<h4 class="font-bold text-gray-900 mb-2">Untuk Pemerintah</h4>
							<p class="text-sm text-gray-600">Transparency dashboard untuk accountability publik dan advocacy berbasis data</p>
						</div>
						<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors">
							<h4 class="font-bold text-gray-900 mb-2">Untuk Komunitas</h4>
							<p class="text-sm text-gray-600">Platform kolaborasi untuk developers, digital agencies, dan tech ecosystem</p>
						</div>
						<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors">
							<h4 class="font-bold text-gray-900 mb-2">Untuk Indonesia</h4>
							<p class="text-sm text-gray-600">Bagian dari ekosistem OS Indonesia yang sustainable dan transparan</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- How to Contribute -->
<section id="how-to-contribute" class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">Bagaimana Cara Berkontribusi?</h2>
			
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="text-4xl mb-4">💻</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Code</h3>
					<p class="text-gray-700 mb-4">
						Kembangkan fitur baru, perbaiki bug, atau improve existing code
					</p>
					<ul class="text-sm text-gray-600 space-y-2">
						<li>✓ Frontend (SvelteKit)</li>
						<li>✓ Backend (Node.js)</li>
						<li>✓ Database (PostgreSQL)</li>
						<li>✓ Testing</li>
					</ul>
				</div>

				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="text-4xl mb-4">📝</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Documentation</h3>
					<p class="text-gray-700 mb-4">
						Tulis dokumentasi, translate, atau buat tutorial
					</p>
					<ul class="text-sm text-gray-600 space-y-2">
						<li>✓ Translate (EN ↔ ID)</li>
						<li>✓ User guides</li>
						<li>✓ API documentation</li>
						<li>✓ Tutorials</li>
					</ul>
				</div>

				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="text-4xl mb-4">🎨</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Design</h3>
					<p class="text-gray-700 mb-4">
						Improve UI/UX atau design system
					</p>
					<ul class="text-sm text-gray-600 space-y-2">
						<li>✓ UI/UX improvements</li>
						<li>✓ Design system</li>
						<li>✓ Accessibility</li>
						<li>✓ User research</li>
					</ul>
				</div>

				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="text-4xl mb-4">🧪</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Testing</h3>
					<p class="text-gray-700 mb-4">
						Report bugs, write tests, atau quality assurance
					</p>
					<ul class="text-sm text-gray-600 space-y-2">
						<li>✓ Manual testing</li>
						<li>✓ Automated tests</li>
						<li>✓ Bug reports</li>
						<li>✓ QA</li>
					</ul>
				</div>

				<div class="bg-white p-8 rounded-xl shadow-md">
					<div class="text-4xl mb-4">🌍</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Community</h3>
					<p class="text-gray-700 mb-4">
						Bantu develop community dan spread awareness
					</p>
					<ul class="text-sm text-gray-600 space-y-2">
						<li>✓ Answer questions</li>
						<li>✓ Organize events</li>
						<li>✓ Content creation</li>
						<li>✓ Mentoring</li>
					</ul>
				</div>

				<div class="bg-white p-8 rounded-xl shadow-md border-2 border-indigo-600">
					<div class="text-4xl mb-4">💰</div>
					<h3 class="text-xl font-bold text-indigo-600 mb-3">Financial</h3>
					<p class="text-gray-700 mb-4">
						Support project secara financial
					</p>
					<ul class="text-sm text-gray-600 space-y-2">
						<li>✓ Sponsor project</li>
						<li>✓ Donate</li>
						<li>✓ Partner program</li>
						<li>✓ Enterprise customer</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contributor Rewards -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">Contributor Rewards</h2>
			<div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
				<p class="text-lg text-gray-700 mb-8">
					<strong class="text-gray-900">Ya, kontributor akan dibayar!</strong> Kami percaya kontribusi yang berkualitas harus dihargai secara financial dengan sistem merit-based yang transparan.
				</p>
				
				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
						<h3 class="font-bold text-gray-900 mb-2">Junior Contributor</h3>
						<p class="text-sm text-gray-600 mb-3">2-4 issues/bulan</p>
						<p class="text-xl font-bold text-indigo-600">Rp 500rb - 1jt/bulan</p>
					</div>
					<div class="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
						<h3 class="font-bold text-gray-900 mb-2">Active Contributor</h3>
						<p class="text-sm text-gray-600 mb-3">5-10 issues/bulan</p>
						<p class="text-xl font-bold text-indigo-600">Rp 2jt - 5jt/bulan</p>
					</div>
					<div class="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
						<h3 class="font-bold text-gray-900 mb-2">Core Contributor</h3>
						<p class="text-sm text-gray-600 mb-3">10+ issues/bulan</p>
						<p class="text-xl font-bold text-indigo-600">Rp 5jt - 15jt/bulan</p>
					</div>
					<div class="bg-linear-to-br from-indigo-50 to-white p-6 rounded-xl border-2 border-indigo-200">
						<h3 class="font-bold text-gray-900 mb-2">Lead Developer</h3>
						<p class="text-sm text-gray-600 mb-3">Leading features</p>
						<p class="text-xl font-bold text-indigo-600">Rp 20jt - 50jt/bulan</p>
					</div>
				</div>

				<div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
					<p class="text-sm text-gray-700">
						<strong class="text-gray-900">Merit-based system:</strong> Rewards berdasarkan kontribusi (code, docs, design, testing, community). Semua transparan dan fair.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Getting Started -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">🚀 Getting Started</h2>
			
			<div class="bg-white p-8 rounded-xl shadow-md space-y-6">
				<div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">1. Read Documentation</h3>
					<p class="text-gray-700">
						Baca <a href="/docs" class="text-indigo-600 hover:underline">dokumentasi lengkap</a> dan <a href="../CONTRIBUTING.md" class="text-indigo-600 hover:underline">CONTRIBUTING.md</a>
					</p>
				</div>

				<div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">2. Pick an Issue</h3>
					<p class="text-gray-700">
						Lihat issues dengan label <span class="px-2 py-1 bg-green-100 text-green-700 rounded">good first issue</span> untuk pemula
					</p>
				</div>

				<div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">3. Introduce Yourself</h3>
					<p class="text-gray-700">
						Perkenalkan diri di platform komunitas (GitHub Discussions atau Discord - coming soon)
					</p>
				</div>

				<div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">4. Start Contributing!</h3>
					<p class="text-gray-700">
						Mulai berkontribusi dengan cara apa pun yang Anda bisa!
					</p>
				</div>
			</div>

			<div class="mt-12 text-center">
				<a href="https://github.com/your-org/digital-workspace-ecosystem" class="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block">
					View on GitHub
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-indigo-600 text-white">
	<div class="container mx-auto px-6">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-4xl font-bold mb-6">
				Ready to Make a Difference?
			</h2>
			<p class="text-xl mb-8 text-indigo-100">
				Berkontribusi untuk Indonesia yang lebih transparan, accountable, dan sustainable
			</p>
			<div class="flex gap-4 justify-center">
				<a href="https://github.com/your-org/digital-workspace-ecosystem" class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
					Get Started on GitHub
				</a>
				<a href="/docs" class="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
					Read Documentation
				</a>
			</div>
		</div>
	</div>
</section>

