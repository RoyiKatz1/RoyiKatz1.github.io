import "../styles/Home.css";
import VennDiagram from "../components/VennDiagram/VennDiagram";
import CaseStudyCard from "../components/CaseStudyCard";

const Home = () => {
	const handleScroll = (id: string) => {
		const target = document.getElementById(id);
		target?.scrollIntoView({ behavior: "smooth" });
	};

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
					image="src\assets\images\previewCards\onboarding-preview.png"
					logo="src\assets\logos\logo-w4m.svg"
					title="Improving Engagement Through UX"
					description="Redesigning the job application flow led to a 70% questionnaire completion rate by removing friction points and improving match visibility."
					link="/case-study/worksforme-onboarding"
					tags={["UX Design", "Product Strategy"]}
				/>
				<CaseStudyCard
					image="src\assets\images\previewCards\optimization-preview.png"
					logo="src\assets\logos\logo-w4m.svg"
					title="Smarter Hiring Decisions with Data-Driven Matching"
					description="We replaced rigid, suggestion-based matching with a flexible, interactive system that lets recruiters adjust job criteria in real-time—improving match accuracy and efficiency."
					link="/case-study/worksforme-recruiter"
					tags={["UX Design", "Product Strategy"]}
				/>
			</section>
		</div>
	);
};

export default Home;
