import React, { useState, useEffect } from "react";
import Circle from "./Circle";
import styles from "./VennDiagram.module.css";

const VennDiagram: React.FC = () => {
	const [circleSize, setCircleSize] = useState(400);

	// Dynamically adjust circle size based on screen width
	useEffect(() => {
		const updateSize = () => {
			const newSize = Math.min(window.innerWidth * 0.3, 400); // Responsive sizing
			setCircleSize(newSize);
		};
		updateSize(); // Call once initially
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const OFFSET = circleSize / 2;

	return (
		<div
			className={styles.vennContainer}
			style={{
				width: circleSize * 1.75,
				height: circleSize * 1.375,
			}}
		>
			<Circle
				color="var(--ux-purple)"
				label="UX"
				size={circleSize}
				position={{ top: 0, left: OFFSET * 0.75 }}
			/>
			<Circle
				color="var(--product-blue)"
				label="Product"
				size={circleSize}
				position={{ top: OFFSET * 0.75, left: 0 }}
			/>
			<Circle
				color="var(--data-green)"
				label="Data"
				size={circleSize}
				position={{ top: OFFSET * 0.75, left: OFFSET * 1.5 }}
			/>
		</div>
	);
};

export default VennDiagram;
