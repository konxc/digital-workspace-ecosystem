<script lang="ts">
	import type { PageData } from './$types';
</script>

<svelte:head>
	<title>Documentation - Digital Workspace Ecosystem</title>
	<meta name="description" content="Complete documentation for Digital Workspace Ecosystem platform" />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 bg-linear-to-br from-indigo-50 via-white to-blue-50">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-3xl mx-auto">
			<h1 class="text-5xl font-bold text-gray-900 mb-6">Documentation</h1>
			<p class="text-xl text-gray-600 mb-4">
				Complete reference untuk memahami platform Digital Workspace Ecosystem
			</p>
			<p class="text-lg text-gray-500">
				24 dokumentasi files mencakup philosophy, technical architecture, strategy, roadmap, dan technical rationale
			</p>
		</div>
	</div>
</section>

<!-- Documentation Sections -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto space-y-16">
			
			<!-- Philosophy & Vision -->
			<div>
				<div class="flex items-center gap-3 mb-8">
					<div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
						🌟
					</div>
					<h2 class="text-3xl font-bold text-gray-900">Philosophy & Vision</h2>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<a href="/docs/VISION_AND_MANIFESTO" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Vision & Manifesto</h3>
						<p class="text-sm text-gray-600 mb-3">Core Philosophy: 3 Pilar Kedaulatan Digital, visi besar platform</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/BUSINESS_STRATEGY" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Business Strategy</h3>
						<p class="text-sm text-gray-600 mb-3">Model bisnis, revenue streams, pricing strategy</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/TIMELINE_AND_COMMITMENT" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Timeline & Commitment</h3>
						<p class="text-sm text-gray-600 mb-3">Roadmap 2025-2030, milestones, success metrics</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/SUSTAINABILITY_AND_REVENUE" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Sustainability & Revenue</h3>
						<p class="text-sm text-gray-600 mb-3">Revenue streams, contributor payment, financial projections</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/COMPETITIVE_ANALYSIS" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Competitive Analysis</h3>
						<p class="text-sm text-gray-600 mb-3">Market landscape CRM/ERP Indonesia, positioning strategy</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
				</div>
			</div>

			<!-- Technical Architecture -->
			<div>
				<div class="flex items-center gap-3 mb-8">
					<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
						🏗️
					</div>
					<h2 class="text-3xl font-bold text-gray-900">Technical Architecture</h2>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<a href="/docs/DATABASE_ARCHITECTURE" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Database Architecture</h3>
						<p class="text-sm text-gray-600 mb-3">Complete database schema, multi-tenant architecture</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/GOVERNANCE_MODEL" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Governance Model</h3>
						<p class="text-sm text-gray-600 mb-3">Anti-exploitation framework, community governance</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/TECH_CHOICES_RATIONALE" class="block bg-linear-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all">
						<div class="flex items-center gap-2 mb-1">
							<h3 class="font-bold text-gray-900">Tech Choices Rationale</h3>
							<span class="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">NEW</span>
						</div>
						<p class="text-sm text-gray-600 mb-3">Why Svelte & SvelteKit? Framework comparison, rationale, and honest trade-offs</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/FUTURE_FEATURES" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Future Features</h3>
						<p class="text-sm text-gray-600 mb-3">IDE-integrated task tracking, plugin ecosystem</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
				</div>
			</div>

			<!-- Security & Deployment -->
			<div>
				<div class="flex items-center gap-3 mb-8">
					<div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
						🔒
					</div>
					<h2 class="text-3xl font-bold text-gray-900">Security & Deployment</h2>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<a href="/docs/SECURITY_AND_TRANSPARENCY" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Security & Transparency</h3>
						<p class="text-sm text-gray-600 mb-3">Security layers, fraud detection, audit trail</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/DEPLOYMENT_MODELS" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Deployment Models</h3>
						<p class="text-sm text-gray-600 mb-3">Open Source + Managed Hub, comparison guide</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/SELF_HOSTING_STRATEGY" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Self-Hosting Strategy</h3>
						<p class="text-sm text-gray-600 mb-3">GitLab integration, Docker deployment, data sovereignty</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/DEPLOYMENT" class="block bg-linear-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:border-green-400 hover:shadow-md transition-all">
						<div class="flex items-center gap-2 mb-1">
							<h3 class="font-bold text-gray-900">Cloudflare Deployment</h3>
							<span class="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">NEW</span>
						</div>
						<p class="text-sm text-gray-600 mb-3">Complete deployment guide for Cloudflare Pages + Workers</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/TECH_STACK_PHILOSOPHY" class="block bg-linear-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
						<div class="flex items-center gap-2 mb-1">
							<h3 class="font-bold text-gray-900">Tech Stack Philosophy</h3>
							<span class="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">NEW</span>
						</div>
						<p class="text-sm text-gray-600 mb-3">Why Cloudflare + Turso? Data sovereignty explained</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
				</div>
			</div>

			<!-- Branding & Naming -->
			<div>
				<div class="flex items-center gap-3 mb-8">
					<div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
						🏷️
					</div>
					<h2 class="text-3xl font-bold text-gray-900">Branding & Strategy</h2>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<a href="/docs/PLATFORM_DESCRIPTION" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Platform Description</h3>
						<p class="text-sm text-gray-600 mb-3">Official description, use cases, unique selling points</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/NAMING_AND_POSITIONING" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Naming & Positioning</h3>
						<p class="text-sm text-gray-600 mb-3">Branding analysis, conflicts, recommendations</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
				</div>
			</div>

			<!-- Human Resources -->
			<div>
				<div class="flex items-center gap-3 mb-8">
					<div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
						👥
					</div>
					<h2 class="text-3xl font-bold text-gray-900">Human Resources</h2>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<a href="/docs/SKILL_REQUIREMENTS" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Skill Requirements</h3>
						<p class="text-sm text-gray-600 mb-3">Complete skill requirements, team roles, career paths</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
				</div>
			</div>

			<!-- Reference -->
			<div>
				<div class="flex items-center gap-3 mb-8">
					<div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
						📋
					</div>
					<h2 class="text-3xl font-bold text-gray-900">Reference & Index</h2>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<a href="/docs/BRAINSTORMING_SUMMARY" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Brainstorming Summary</h3>
						<p class="text-sm text-gray-600 mb-3">Complete capture, key decisions, verification</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
					
					<a href="/docs/BRAINSTORMING_SYNCHRONIZATION" class="block bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
						<h3 class="font-bold text-gray-900 mb-2">Synchronization Matrix</h3>
						<p class="text-sm text-gray-600 mb-3">Cross-reference verification, completeness score</p>
						<p class="text-xs text-indigo-600">→ Read more</p>
					</a>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- Quick Stats -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
				<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Documentation Statistics</h3>
				
				<div class="grid md:grid-cols-4 gap-6">
					<div class="text-center">
						<div class="text-4xl font-bold text-indigo-600 mb-2">24</div>
						<p class="text-sm text-gray-600">Documentation Files</p>
					</div>
					
					<div class="text-center">
						<div class="text-4xl font-bold text-indigo-600 mb-2">8000+</div>
						<p class="text-sm text-gray-600">Lines of Docs</p>
					</div>
					
					<div class="text-center">
						<div class="text-4xl font-bold text-indigo-600 mb-2">6</div>
						<p class="text-sm text-gray-600">Main Categories</p>
					</div>
					
					<div class="text-center">
						<div class="text-4xl font-bold text-indigo-600 mb-2">100%</div>
						<p class="text-sm text-gray-600">Complete</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
			<p class="text-lg text-gray-600 mb-8">
				Dive deep into dokumentasi atau mulai berkontribusi ke project
			</p>
			<div class="flex gap-4 justify-center">
				<a href="/contributors" class="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
					Start Contributing
				</a>
				<a href="/about" class="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

