import React from "react";
import Circle from "./Circle";
import styles from "./VennDiagram.module.css";

const CIRCLE_SIZE = 400; // Define the size in pixels
const OFFSET = CIRCLE_SIZE / 2; // Half size for centering

const VennDiagram: React.FC = () => {
	return (
		<div
			className={styles.vennContainer}
			style={{
				width: CIRCLE_SIZE * 1.75,
				height: CIRCLE_SIZE * 1.375,
			}}
		>
			<Circle
				color="var(--ux-purple)"
				label="UX"
				size={CIRCLE_SIZE}
				position={{ top: 0, left: OFFSET * 0.75 }}
			/>
			<Circle
				color="var(--product-blue)"
				label="Product"
				size={CIRCLE_SIZE}
				position={{ top: OFFSET * 0.75, left: 0 }}
			/>
			<Circle
				color="var(--data-green)"
				label="Data"
				size={CIRCLE_SIZE}
				position={{ top: OFFSET * 0.75, left: OFFSET * 1.5 }}
			/>
		</div>
	);
};

export default VennDiagram;
