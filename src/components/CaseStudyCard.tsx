import { Link } from "react-router-dom";
import "../styles/CaseStudyCard.css";

interface CaseStudyProps {
	title: string;
	description: string;
	link: string;
	logo?: string;
	image: string;
}

const CaseStudyCard = ({
	title,
	description,
	link,
	logo = "",
	image,
}: CaseStudyProps) => {
	return (
		<div className="case-study-card-wrapper">
			<div className="case-study-card">
				<div className="details">
					{logo && (
						<img
							src={logo}
							alt={`${title} Logo`}
							className="case-study-logo"
						/>
					)}
					<h3>{title}</h3>
					<p>{description}</p>
					{/* <Link to={link} className="read-more">
				Read Case Study
			</Link> */}
				</div>
				<div className="image-wrapper">
					<img
						src={image}
						alt={`${title} Case Study`}
						className="case-study-image"
					></img>
				</div>
			</div>
			<button>Read Case Study</button>
		</div>
	);
};

export default CaseStudyCard;
