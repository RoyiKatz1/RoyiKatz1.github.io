import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Circle from "./Circle";
import styles from "./VennDiagram.module.css";

const VennDiagram: React.FC = () => {
	const [circleSize, setCircleSize] = useState(400);
	const [animationComplete, setAnimationComplete] = useState(false);

	// Responsive Circle Size
	useEffect(() => {
		const updateSize = () => {
			const newSize = Math.min(window.innerWidth * 0.35, 400);
			setCircleSize(newSize);
		};
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const OFFSET = circleSize * 0.7; // Adjusted for spacing

	// Animation Variants
	const circleAnimation = {
		initial: { scale: 1.3, x: 0, y: 0, opacity: 1 },
		animate: (position: { x: number; y: number }) => ({
			scale: 1,
			x: position.x,
			y: position.y,
			transition: { duration: 1.5, ease: "easeInOut" },
		}),
	};

	return (
		<motion.div className={styles.vennContainer}>
			{/* UX Circle */}
			<Circle
				color="var(--ux-purple)"
				label="UX"
				size={circleSize}
				position={{ x: 0, y: -OFFSET * 0.25 }}
				variants={circleAnimation}
			/>

			{/* Product Circle */}
			<Circle
				color="var(--product-blue)"
				label="Product"
				size={circleSize}
				position={{ x: -OFFSET * 0.5, y: OFFSET * 0.25 }}
				variants={circleAnimation}
			/>

			{/* Data Circle */}
			<Circle
				color="var(--data-green)"
				label="Data"
				size={circleSize}
				position={{ x: OFFSET * 0.5, y: OFFSET * 0.25 }}
				variants={circleAnimation}
				onAnimationComplete={() => {
					console.log("Animation Complete Triggered!");
					setAnimationComplete(true);
				}}
			/>
		</motion.div>
	);
};

export default VennDiagram;
