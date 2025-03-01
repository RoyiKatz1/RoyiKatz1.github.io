import "../styles/Home.css";
import Navbar from "../components/Navbar";
import VennDiagram from "../components/VennDiagram/VennDiagram";
import CaseStudyCard from "../components/CaseStudyCard";

const Home = () => {
	const handleScroll = (id: string) => {
		const target = document.getElementById(id);
		target?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="container">
			{<Navbar />}
			<header className="hero">
				<div className="hero-text">
					<div>
						<h3>Hi!</h3>
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

			<h3>Case Studies</h3>

			<section className="case-studies" id="case-studies">
				<CaseStudyCard
					image="src\assets\images\previewCards\onboarding-preview.png"
					logo="src\assets\logos\logo-w4m.svg"
					title="Improving Engagement Through UX"
					description="Redesigning the job application flow led to a 70% questionnaire completion rate by removing friction points and improving match visibility."
					link="/case-study-1"
				/>
				<CaseStudyCard
					image="src\assets\images\previewCards\optimization-preview.png"
					logo="src\assets\logos\logo-w4m.svg"
					title="Smarter Hiring Decisions with Data-Driven Matching"
					description="We replaced rigid, suggestion-based matching with a flexible, interactive system that lets recruiters adjust job criteria in real-time—improving match accuracy and efficiency."
					link="/case-study-2"
				/>
			</section>
		</div>
	);
};

export default Home;
