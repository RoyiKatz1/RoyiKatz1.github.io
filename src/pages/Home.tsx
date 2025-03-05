import "../styles/Home.css";
import { motion } from "framer-motion";
import VennDiagram from "../components/VennDiagram/VennDiagram";
import CaseStudyCard from "../components/CaseStudyCard";

const HeroSection: React.FC = () => {
	const handleScroll = (id: string) => {
		const target = document.getElementById(id);
		target?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="hero-text">
				<div>
					<h2>Hi!</h2>
					<h1>
						I’m <span className="highlight">Royi</span>
					</h1>
					<p>I Help Products Work for Users, Not Against Them.</p>
				</div>
				<button
					id="see-my-work"
					onClick={() => handleScroll("case-studies")}
				>
					See My Work
				</button>
			</div>
		</motion.div>
	);
};

const Home = () => {
	const onboardingPreview = new URL(
		"../assets/images/previewCards/onboarding-preview-mock-up.png",
		import.meta.url
	).href;
	const optimizationPreview = new URL(
		"../assets/images/previewCards/optimization-preview.png",
		import.meta.url
	).href;

	const logoW4M = new URL("../assets/logos/logo-w4m.svg", import.meta.url)
		.href;

	return (
		<div className="container">
			<header className="hero">
				<HeroSection />

				<div className="venn-diagram-container">
					<VennDiagram />
				</div>
			</header>

			<h2>Case Studies</h2>

			<section className="case-studies" id="case-studies">
				<CaseStudyCard
					key={1}
					image={onboardingPreview}
					logo={logoW4M}
					title="How UX Fixes Increased Completion Rates to 70%"
					description="We reimagined WorksForMe’s application flow to keep candidates engaged."
					link="/case-study/worksforme-onboarding"
					tags={[
						{ text: "UX Design", category: "ux" },
						{ text: "Product Strategy", category: "product" },
					]}
				/>
				<CaseStudyCard
					key={2}
					image={optimizationPreview}
					logo={logoW4M}
					title="Data-Driven Matching: Smarter, Faster Hiring"
					description="We transformed a data-heavy hiring process into an intuitive system—helping recruiters adjust multiple parameters in real-time to make smarter, faster decisions with confidence."
					link="/case-study/worksforme-recruiter"
					tags={[
						{ text: "UX Design", category: "ux" },
						{ text: "Product Strategy", category: "product" },
					]}
				/>
			</section>
		</div>
	);
};

export default Home;
