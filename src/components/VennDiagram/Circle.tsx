import React from "react";
import styles from "./VennDiagram.module.css";

interface CircleProps {
	color: string;
	label: string;
	size?: number;
	position: { top: number; left: number };
}

const skillsMapping = {
	UX: ["UX Research", "Wireframing & Prototyping", "Interaction Design"],
	Product: ["Product Strategy", "User Story Writing", "Agile Development"],
	Data: ["Data Analysis", "Web Scraping", "Business Intelligence"],
};

const Circle: React.FC<CircleProps> = ({ color, label, size, position }) => {
	return (
		<div
			className={label === "UX" ? styles.circle : styles.circleBottom}
			style={{
				backgroundColor: color,
				width: size,
				height: size,
				top: position.top,
				left: position.left,
			}}
		>
			<span className={styles.label}>{label}</span>
		</div>
	);
};

export default Circle;
