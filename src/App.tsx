import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudyW4MOnboarding from "./pages/CaseStudyW4MOnboarding";
import CaseStudyW4MRecruiter from "./pages/CaseStudyW4MRecruiter";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/case-study/worksforme-onboarding"
					element={<CaseStudyW4MOnboarding />}
				/>
				<Route
					path="/case-study/worksforme-recruiter"
					element={<CaseStudyW4MRecruiter />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
