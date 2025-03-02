import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
	useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import CaseStudyW4MOnboarding from "./pages/CaseStudyW4MOnboarding";
import CaseStudyW4MRecruiter from "./pages/CaseStudyW4MRecruiter";
import Navbar from "./components/Navbar";

function RedirectHandler() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// If we were redirected (URL contains "?/"), fix the route
		if (window.location.search.startsWith("?/")) {
			const newPath = window.location.search.replace("?/", "");
			navigate(newPath, { replace: true });
		}
	}, [location]);

	return null;
}

function App() {
	return (
		<Router>
			<RedirectHandler /> {/* Handles GitHub Pages redirects */}
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
