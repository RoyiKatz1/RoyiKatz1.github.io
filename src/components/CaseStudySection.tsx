import { motion } from "framer-motion";
import { ReactNode } from "react";

type CaseStudySectionProps = {
	children: ReactNode;
};

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
};

export default CaseStudySection;
