import { useState } from "react";
import "../styles/CollapsibleSection.css"; // Ensure you create this CSS file

interface CollapsibleSectionProps {
	title: string;
	children: React.ReactNode;
}

const CollapsibleSection = ({ title, children }: CollapsibleSectionProps) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="collapsible-section">
			<button
				className="collapsible-header"
				onClick={() => setIsOpen(!isOpen)}
			>
				{title}
				<span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
			</button>
			<div
				className={`collapsible-content ${isOpen ? "open" : "closed"}`}
			>
				{children}
			</div>
		</div>
	);
};

export default CollapsibleSection;
