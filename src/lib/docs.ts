/**
 * Documentation registry
 * All docs are read at build time and bundled
 */

export const docsRegistry: Record<string, () => Promise<any>> = {
	// Strategy: Vision
	VISION_AND_MANIFESTO: () => import('../../docs/strategy/vision/VISION_AND_MANIFESTO.md?raw'),
	TIMELINE_AND_COMMITMENT: () => import('../../docs/strategy/vision/TIMELINE_AND_COMMITMENT.md?raw'),
	BRAINSTORMING_SUMMARY: () => import('../../docs/strategy/vision/BRAINSTORMING_SUMMARY.md?raw'),
	BRAINSTORMING_SYNCHRONIZATION: () => import('../../docs/strategy/vision/BRAINSTORMING_SYNCHRONIZATION.md?raw'),
	
	// Strategy: Business
	BUSINESS_STRATEGY: () => import('../../docs/strategy/business/BUSINESS_STRATEGY.md?raw'),
	SUSTAINABILITY_AND_REVENUE: () => import('../../docs/strategy/business/SUSTAINABILITY_AND_REVENUE.md?raw'),
	COMPETITIVE_ANALYSIS: () => import('../../docs/strategy/business/COMPETITIVE_ANALYSIS.md?raw'),
	
	// Strategy: Planning
	PLATFORM_DESCRIPTION: () => import('../../docs/strategy/planning/PLATFORM_DESCRIPTION.md?raw'),
	NAMING_AND_POSITIONING: () => import('../../docs/strategy/planning/NAMING_AND_POSITIONING.md?raw'),
	
	// Technical: Architecture
	DATABASE_ARCHITECTURE: () => import('../../docs/technical/architecture/DATABASE_ARCHITECTURE.md?raw'),
	GOVERNANCE_MODEL: () => import('../../docs/technical/architecture/GOVERNANCE_MODEL.md?raw'),
	SECURITY_AND_TRANSPARENCY: () => import('../../docs/technical/architecture/SECURITY_AND_TRANSPARENCY.md?raw'),
	TECH_CHOICES_RATIONALE: () => import('../../docs/technical/architecture/TECH_CHOICES_RATIONALE.md?raw'),
	TECH_STACK_PHILOSOPHY: () => import('../../docs/technical/architecture/TECH_STACK_PHILOSOPHY.md?raw'),
	
	// Technical: Deployment
	DEPLOYMENT: () => import('../../docs/technical/deployment/DEPLOYMENT.md?raw'),
	DEPLOYMENT_MODELS: () => import('../../docs/technical/deployment/DEPLOYMENT_MODELS.md?raw'),
	SELF_HOSTING_STRATEGY: () => import('../../docs/technical/deployment/SELF_HOSTING_STRATEGY.md?raw'),
	
	// Technical: Testing
	FUTURE_FEATURES: () => import('../../docs/technical/testing/FUTURE_FEATURES.md?raw'),
	
	// Teams: HR
	SKILL_REQUIREMENTS: () => import('../../docs/teams/hr/SKILL_REQUIREMENTS.md?raw'),
	QUICK_TEAM_GUIDE: () => import('../../docs/teams/hr/QUICK_TEAM_GUIDE.md?raw'),
	
	// Feature: TOC
	TOC_FEATURE_SUMMARY: () => import('../../docs/feature/components/toc/TOC_FEATURE_SUMMARY.md?raw'),
	DEVELOPMENT_TOC_FEATURE: () => import('../../docs/feature/components/toc/DEVELOPMENT_TOC_FEATURE.md?raw'),
	REVIEW_TOC_FEATURE: () => import('../../docs/feature/components/toc/REVIEW_TOC_FEATURE.md?raw'),
	PROMPT_EVALUATION_TOC: () => import('../../docs/feature/components/toc/PROMPT_EVALUATION_TOC.md?raw'),
	
	// Root Files
	INDEX: () => import('../../docs/INDEX.md?raw')
};

export const DOCS_SLUGS = Object.keys(docsRegistry);

