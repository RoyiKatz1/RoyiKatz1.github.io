import "../styles/Home.css";
import VennDiagram from "../components/VennDiagram/VennDiagram";
import CaseStudyCard from "../components/CaseStudyCard";

const Home = () => {
	const handleScroll = (id: string) => {
		const target = document.getElementById(id);
		target?.scrollIntoView({ behavior: "smooth" });
	};

	const onboardingPreview = new URL(
		"../assets/images/previewCards/onboarding-preview.png",
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
				<div className="hero-text">
					<div>
						<h2>Hi!</h2>
						<h1>
							I’m <span className="highlight">Royi</span>
						</h1>
						<p>
							Helping Products Work for Users, Not Against Them.
						</p>
					</div>
					<button
						id="see-my-work"
						onClick={() => handleScroll("case-studies")}
					>
						See My Work
					</button>
				</div>
				<div className="venn-diagram-container">
					<VennDiagram />
				</div>
			</header>

			<h2>Case Studies</h2>

			<section className="case-studies" id="case-studies">
				<CaseStudyCard
					image={onboardingPreview}
					logo={logoW4M}
					title="Improving Engagement Through UX"
					description="WorksForMe simplifies job applications by automatically matching candidates to roles. By improving the application flow, we increased completion rates to 70%—reducing friction and keeping candidates engaged."
					link="/case-study/worksforme-onboarding"
					tags={[
						{ text: "UX Design", category: "ux" },
						{ text: "Product Strategy", category: "product" },
					]}
				/>
				<CaseStudyCard
					image={optimizationPreview}
					logo={logoW4M}
					title="Smarter Hiring Decisions with Data-Driven Matching"
					description="WorksForMe helps recruiters quickly find the right candidates by automating job matching. We built a dynamic system that lets recruiters adjust hiring criteria in real-time—ensuring better matches with less effort."
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
