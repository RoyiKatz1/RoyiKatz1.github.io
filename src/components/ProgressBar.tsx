import { useState, useEffect } from "react";
import "../styles/ProgressBar.css";

const ProgressBar: React.FC = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const height =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollProgress = (scrollTop / height) * 100;
			setScroll(scrollProgress);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return <div className="progress-bar" style={{ width: `${scroll}%` }} />;
};

export default ProgressBar;
