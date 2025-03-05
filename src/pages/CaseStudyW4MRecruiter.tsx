import CaseStudyHeader from "../components/caseStudy/CaseStudyHeader";
import InsightBox from "../components/caseStudy/InsightBox/InsightBox";
import CaseStudySection from "../components/CaseStudySection";
import ProgressBar from "../components/ProgressBar";

const CaseStudyPage = () => {
	const logoW4M = new URL("../assets/logos/logo-w4m.svg", import.meta.url)
		.href;

	const optimizationOld = new URL(
		"../assets/images/w4m-recruiter/optimization-old.png",
		import.meta.url
	).href;

	const optimizationNew = new URL(
		"../assets/images/w4m-recruiter/optimization-new.png",
		import.meta.url
	).href;

	const selectCriteria = new URL(
		"../assets/images/w4m-recruiter/select-criteria.png",
		import.meta.url
	).href;

	return (
		<div className="case-study-page">
			<ProgressBar />
			<CaseStudyHeader
				title="Data-Driven Matching: Smarter, Faster Hiring"
				logo={logoW4M}
				tags={[
					{ text: "UX Design", category: "ux" },
					{ text: "Product Strategy", category: "product" },
				]}
			/>
			<p>
				WorksForMe is a job-matching platform that helps recruiters find
				the right candidates faster. Unlike traditional job boards,
				WorksForMe automatically matches candidates with relevant job
				opportunities based on employer-defined criteria. <br />
				While the candidate experience is crucial, recruiters also need
				efficient tools to evaluate applicants and make informed hiring
				decisions. This is where the Recruiter Optimization Module comes
				in.
			</p>
			<CaseStudySection>
				<section>
					<div className="section-header">
						<p>Introduction</p>
						<h2>
							Building a Smarter Way to Optimize Hiring Decisions
						</h2>
					</div>
					<div className="section-content">
						<div className="section-text">
							<div className="section-paragraph">
								<p>
									When I joined mid-development, the
									Optimization Module was still underdeveloped
									and, due to time constraints, was excluded
									from the initial pilot. Since then, we’ve
									been working on refining its approach to
									better serve recruiters.
								</p>
								<h3>What is the Optimization Module?</h3>
								<p>
									The Optimization Module allows recruiters to
									relax or adjust job requirements temporarily
									in order to increase their pool of potential
									matches. <br /> <br />
									How it originally worked:
								</p>
								<ul>
									<li>
										Recruiters were given a list of
										suggested changes (e.g., "Increase
										salary range to $17,000 to unlock 3
										candidates").
									</li>
									<li>
										These suggestions were meant to help
										recruiters find more matches quickly.
									</li>
								</ul>
								<p>
									<br /> However, this approach wasn’t
									effective.
								</p>
							</div>
							<div className="section-paragraph">
								<h3>The Problems</h3>
								<ol>
									<li>
										<strong>
											Oversimplified Matching → The System
											Didn't Reflect Real Hiring Needs
										</strong>
										<ul>
											<li>
												The system assumed candidates
												were just one small change away
												from being a match - but real
												hiring needs are rarely that
												simple.
											</li>
											<li>
												Recruiters needed more
												flexibility to explore different
												trade-offs, not just take
												predefined suggestions.
											</li>
										</ul>
									</li>
									<li>
										<strong>
											False Shortlists vs. Overwhelmingly
											Long Lists
										</strong>
										<ul>
											<li>
												If the system only suggested
												single changes, the list was too
												short and misleading.
											</li>
											<li>
												If the system suggested
												combinations of changes, the
												list became unmanageable.
											</li>
										</ul>
									</li>
									<li>
										<strong>
											No Control Over What’s Flexible vs.
											What’s Non-Negotiable
										</strong>
										<ul>
											<li>
												Some job requirements must
												remain strict (e.g., a pilot
												must have a license).
											</li>
											<li>
												The system didn’t allow
												recruiters to define what they
												were willing to adjust and what
												needed to stay fixed.
											</li>
										</ul>
									</li>
								</ol>
								<p>
									<br /> As a result, recruiters weren’t
									getting useful insights, and the feature
									wasn’t driving real value.
								</p>
							</div>
						</div>
						<div className="section-image">
							<img
								className="screenshot"
								src={optimizationOld}
								alt="WorksForMe Landing Page"
							/>
						</div>
					</div>
					<InsightBox
						emoji="❓"
						text="Recruiters need the flexibility to explore trade-offs—but not at the cost of efficiency. How do we give them control without overwhelming them?"
					/>
				</section>
			</CaseStudySection>
			<CaseStudySection>
				<section>
					<div className="section-header">
						<p>The Solution</p>
						<h2>
							From Rigid Suggestions to Data-Driven Flexibility{" "}
						</h2>
					</div>
					<p>
						To fix these issues, we completely redesigned the
						module, shifting from a suggestion-based model to a
						playground-based approach.
					</p>
					<div className="section-content">
						<div className="section-text">
							<div className="section-content">
								<div className="section-image">
									<img
										className="screenshot"
										src={selectCriteria}
										alt="WorksForMe New Optimization Module"
									/>
								</div>
								<div className="section-text">
									<div className="section-paragraph">
										<h3>Recruiter-First Decision Making</h3>

										<ul className="checkmark">
											<li>
												Recruiters first select which
												job criteria they’re willing to
												adjust (e.g., salary, commute
												distance).
											</li>
											<li>
												This prevents the system from
												making unrealistic
												suggestions—allowing for smarter
												adjustments.
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="section-content">
								<div className="section-text">
									<div className="section-paragraph">
										<h3>
											Interactive “Playground” Instead of
											Rigid Suggestions
										</h3>
										<ul className="checkmark">
											<li>
												Instead of a static list of
												suggestions, recruiters see all
												possible trade-offs in a dynamic
												interface.
											</li>
											<li>
												No more guessing—each change
												clearly indicates the number of
												new matches and potential
												candidates unlocked.
											</li>
											<li>
												Every adjustment shown is
												guaranteed to have an
												impact—this is not a random
												trial-and-error process.
											</li>
										</ul>
									</div>
								</div>
								<div className="section-image">
									<img
										className="screenshot"
										src={optimizationNew}
										alt="New Design of WorksForMe Optimization Module"
									/>
								</div>
							</div>
							<div className="section-paragraph">
								<h3>
									Clearer & More Actionable Decision-Making
								</h3>
								<ul className="checkmark">
									<li>
										Recruiters instantly see the effect of
										each change, removing any uncertainty
										about how adjustments influence the
										candidate pool.
									</li>
									<li>
										Only impactful options are
										presented—every suggested change
										contributes to increasing matches,
										ensuring the recruiter’s time is spent
										efficiently.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<InsightBox
						emoji="❗"
						text="With real-time impact indicators, recruiters make informed decisions without hesitation—no more blind adjustments, just data-backed hiring flexibility."
					/>
				</section>
			</CaseStudySection>
			<CaseStudySection>
				<section>
					<div className="section-header">
						<p>Measuring Success</p>
						<h2>How Will We Know If It Works?</h2>
					</div>
					<div className="section-content">
						<div className="section-text">
							<div className="section-paragraph">
								<p>
									Since this feature is still in testing, we
									can’t yet measure impact retrospectively—but
									we have clear ways to track its success
									post-launch.
								</p>
								<h3>Key Metrics to Measure Impact</h3>
								<ul>
									<li>
										<strong>Recruiter Engagement:</strong>{" "}
										How often are recruiters using the
										Optimization Module?
									</li>
									<li>
										<strong>Conversion Rate:</strong> How
										many optimized matches lead to
										successful hires?
									</li>
									<li>
										<strong>Time-to-Fill:</strong> Does the
										feature reduce the time it takes to fill
										open positions?
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</CaseStudySection>
		</div>
	);
};

export default CaseStudyPage;
