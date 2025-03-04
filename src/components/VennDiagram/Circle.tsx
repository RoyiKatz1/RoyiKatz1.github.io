import React from "react";
import { motion } from "framer-motion";
import styles from "./VennDiagram.module.css";

interface CircleProps {
	color: string;
	label: string;
	size?: number;
	position: { x: number; y: number };
	variants: any;
	onAnimationComplete?: () => void;
}

const Circle: React.FC<CircleProps> = ({
	color,
	label,
	size,
	position,
	variants,
	onAnimationComplete,
}) => {
	// Label Animation
	const labelAnimation = {
		initial: { opacity: 0, y: 10 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { delay: 1.6, duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<motion.div
			className={label === "UX" ? styles.circle : styles.circleBottom}
			style={{
				backgroundColor: color,
				width: size,
				height: size,
			}}
			variants={variants}
			initial="initial"
			animate="animate"
			custom={position}
			onAnimationComplete={onAnimationComplete}
		>
			{/* Label inside the circle */}
			<motion.span
				className={styles.label}
				variants={labelAnimation}
				initial="initial"
				animate="animate"
			>
				{label}
			</motion.span>
		</motion.div>
	);
};

export default Circle;
