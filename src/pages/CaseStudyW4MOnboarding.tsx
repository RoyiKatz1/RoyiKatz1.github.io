import CaseStudyHeader from "../components/caseStudy/CaseStudyHeader";
import InsightBox from "../components/caseStudy/InsightBox/InsightBox";
import CollapsibleSection from "../components/CollapsibleSection";
import CaseStudySection from "../components/CaseStudySection";
import ProgressBar from "../components/ProgressBar";

const CaseStudyPage = () => {
	const logoW4M = new URL("../assets/logos/logo-w4m.svg", import.meta.url)
		.href;

	const flowBefore = new URL(
		"../assets/images/w4m-onboarding/flow-before.png",
		import.meta.url
	).href;

	const flowBeforeMobile = new URL(
		"../assets/images/w4m-onboarding/flow-before-mobile.png",
		import.meta.url
	).href;

	const flowAfter = new URL(
		"../assets/images/w4m-onboarding/flow-after.png",
		import.meta.url
	).href;

	const flowAfterMobile = new URL(
		"../assets/images/w4m-onboarding/flow-after-mobile.png",
		import.meta.url
	).href;

	const landingPage = new URL(
		"../assets/images/w4m-onboarding/landing-page.png",
		import.meta.url
	).href;

	const questionnaire = new URL(
		"../assets/images/w4m-onboarding/questionnaire.png",
		import.meta.url
	).href;

	const matches = new URL(
		"../assets/images/w4m-onboarding/matches.png",
		import.meta.url
	).href;

	return (
		<div className="case-study-page">
			<ProgressBar />

			<CaseStudyHeader
				title="Improving Engagement Through UX"
				logo={logoW4M}
				tags={["UX Design", "Product Strategy"]}
			/>
			<p>
				WorksForMe is a real-world job-matching platform designed to
				help recruiters quickly find the right candidates while ensuring
				job seekers only apply to relevant jobs. <br />
				Unlike traditional job boards, WorksForMe automates the
				application process, matching candidates with employers based on
				their actual hiring criteria. <br />
				In this case study, I focus on improving the candidate
				experience by optimizing onboarding, the questionnaire, and job
				match presentation. The goal was to remove friction, boost
				engagement, and increase job application success rates.
			</p>

			<CaseStudySection>
				<section>
					<div className="section-header">
						<p>Challenge 1</p>
						<h2>
							Fixing the Onboarding Experience (Friction & Sign-Up
							Conversions)
						</h2>
					</div>
					<div className="section-content">
						<div className="section-text">
							<div className="section-paragraph">
								<h3>Problem</h3>
								<p>
									When new users signed up, they faced
									multiple friction points that reduced
									conversions and increased drop-offs:
								</p>
								<ol>
									<li>
										<strong>
											Unnecessary Second Login Step:{" "}
										</strong>
										After registering, users had to log in
										manually again after email verification.
										This caused confusion and unnecessary
										friction.
									</li>
									<li>
										<strong>
											Lack of Trust & Motivation to Sign
											Up:{" "}
										</strong>
										Candidates who clicked on our job
										platform link didn’t understand why they
										should sign up, leading to low
										registration rates.
									</li>
								</ol>
							</div>
							<CollapsibleSection title="Before (Problem Flow)">
								<div className="diagram">
									<img
										className="desktop-only"
										src={flowBefore}
										alt="WorksForMe Old Onboarding Flow"
									/>
									<img
										className="mobile-only"
										src={flowBeforeMobile}
										alt="WorksForMe Old Onboarding Flow"
									/>
								</div>
							</CollapsibleSection>
							<CollapsibleSection title="Solution">
								<div className="section-paragraph">
									<div className="diagram">
										<img
											className="desktop-only"
											id="add-margin"
											src={flowAfter}
											alt="WorksForMe New Onboarding Flow"
										/>
										<img
											className="mobile-only"
											id="add-margin"
											src={flowAfterMobile}
											alt="WorksForMe New Onboarding Flow"
										/>
									</div>
									<ul>
										<li>
											<span id="red">
												Removed the extra login step →{" "}
											</span>
											Enabled auto-login from the
											verification email, making the
											process seamless.
										</li>
										<li>
											<span id="green">
												Introduced a dedicated landing
												page before the registration
												step →{" "}
											</span>
											Educated users on why they should
											sign up, building trust and
											increasing conversions.
										</li>
									</ul>
								</div>
							</CollapsibleSection>

							<div className="section-paragraph">
								<h3>Impact</h3>
								<ul className="checkmark">
									<li>
										Smoother onboarding → No unnecessary
										logins.
									</li>
									<li>
										<strong>18% conversion rate </strong>
										from landing page to registration, far
										exceeding industry averages (5.89%
										according to{" "}
										<a
											href="https://blog.hubspot.com/marketing/landing-page-stats"
											target="_blank"
											rel="noreferrer"
										>
											HubSpot
										</a>
										).
									</li>
								</ul>
							</div>
						</div>
						<div className="section-image">
							<img
								src={landingPage}
								alt="WorksForMe Landing Page"
							/>
						</div>
					</div>
					<InsightBox text="By removing friction and addressing user trust upfront, we boosted conversions and set the stage for higher engagement throughout the platform." />
				</section>
			</CaseStudySection>
			<CaseStudySection>
				<section>
					<div className="section-header">
						<p>Challenge 2</p>
						<h2>Fixing Questionnaire & Match UX </h2>
					</div>
					<div className="section-content">
						<div className="section-text">
							<div className="section-paragraph">
								<h3>Problem</h3>
								<p>
									The questionnaire is the core of WorksForMe,
									but its flow was disrupted by match popups,
									leading to drop-offs and frustration.
								</p>
								<ol>
									<li>
										<strong>
											Unnecessary Clutter in the
											Questionnaire UX:
										</strong>
										<ul>
											<li>
												While functional, the
												questionnaire had visual noise
												that made it feel heavier than
												necessary.
											</li>
											<li>
												Decluttering the UI would make
												answering feel more fluid and
												engaging.
											</li>
										</ul>
									</li>
									<li>
										<strong>
											Match Popups Interrupted the
											Questionnaire Flow:
										</strong>
										<ul>
											<li>
												Every time a candidate received
												a match, a popup appeared
												immediately, even in the middle
												of answering questions.
											</li>
											<li>
												This constantly pulled users
												away from the questionnaire,
												making it harder to stay focused
												and complete the process.
											</li>
											<li>
												Some candidates left the
												questionnaire early to check
												matches, which reduced
												completion rates.
											</li>
										</ul>
									</li>
								</ol>
							</div>
							<div className="section-paragraph">
								<h3>Solution</h3>
								<ol>
									<li>
										<strong>
											Refined Questionnaire UX for a
											Cleaner Experience:
										</strong>
										<ul className="checkmark">
											<li>
												Decluttered the UI to make
												answering feel more natural and
												intuitive.
											</li>
											<li>
												Minimized distractions so
												candidates could focus on
												answering, not on interface
												noise.
											</li>
										</ul>
									</li>
									<li>
										<strong>
											Fixing the Match Popups for a
											Smoother Flow:
										</strong>
										<ul className="checkmark">
											<li>
												Replaced immediate popups with
												match "checkpoints" between
												questionnaire pages.
											</li>
											<li>
												Instead of interrupting
												candidates after every match, we
												stack all matches from the last
												page together and display them
												at a natural stopping point—like
												a checkpoint in a game.
											</li>
											<li>
												Gave candidates two clear
												choices:
												<ul>
													<li>
														“View Matches” → If they
														want to check their
														opportunities
														immediately.
													</li>
													<li>
														“Continue Answering” →
														To stay in the
														questionnaire without
														disruption.
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ol>
							</div>
							<div className="section-paragraph">
								<h3>Impact</h3>
								<ul className="checkmark">
									<li>
										<strong>
											70% of candidates completed the
											questionnaire.
										</strong>
									</li>
									<li>
										The entire questionnaire takes only 3-4
										minutes to complete.
									</li>
									<li>
										A cleaner, more focused experience →
										Less cognitive load and better
										engagement.
									</li>
									<li>
										Less frustration → Smoother experience,
										leading to better data quality and
										stronger job matches.
									</li>
								</ul>
							</div>
						</div>
						<div className="section-image">
							<img
								className="screenshot"
								id="multiple-screens"
								src={questionnaire}
								alt="WorksForMe Questionnaire"
							/>
							<img
								className="screenshot"
								id="multiple-screens"
								src={matches}
								alt="WorksForMe Match Screen"
							/>
						</div>
					</div>
					<InsightBox text="By restructuring how and when matches are shown, we removed unnecessary distractions and kept candidates engaged while ensuring they could still view their matches at the right moment. This simple but powerful UX shift dramatically improved the questionnaire completion rate." />
				</section>
			</CaseStudySection>
		</div>
	);
};

export default CaseStudyPage;
