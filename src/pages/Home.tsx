import "../styles/Home.css";
import Navbar from "../components/Navbar";
import VennDiagram from "../components/VennDiagram/VennDiagram";

const Home = () => {
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
					<button className="cta">See My Work</button>
				</div>
				<div className="venn-diagram-container">
					<VennDiagram />
				</div>
			</header>

			{/* <section className="case-studies">
				<CaseStudyCard
					title="Improving Engagement Through UX"
					description="Redesigning the job application flow led to a 70% questionnaire completion rate by removing friction points and improving match visibility."
					link="/case-study-1"
				/>
				<CaseStudyCard
					title="Smarter Hiring Decisions with Data-Driven Matching"
					description="We replaced rigid, suggestion-based matching with a flexible, interactive system that lets recruiters adjust job criteria in real-time—improving match accuracy and efficiency."
					link="/case-study-2"
				/>
			</section> */}
		</div>
	);
};

export default Home;
