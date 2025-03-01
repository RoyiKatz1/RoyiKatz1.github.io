import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudyPage from "./pages/CaseStudyPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/case-study/:id" element={<CaseStudyPage />} />
			</Routes>
		</Router>
	);
}

export default App;
