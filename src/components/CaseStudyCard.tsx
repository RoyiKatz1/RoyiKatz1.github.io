import "../styles/CaseStudyCard.css";
import Tag from "./caseStudy/Tag/Tag";

interface CaseStudyProps {
	title: string;
	description: string;
	link: string;
	logo?: string;
	image: string;
	tags: { text: string; category: string }[];
}

const CaseStudyCard = ({
	title,
	description,
	logo = "",
	image,
	link,
	tags,
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
					<div className="tags">
						{tags.map((tag) => (
							<Tag text={tag.text} category={tag.category} />
						))}
					</div>
				</div>
				<div className="image-wrapper">
					<img
						src={image}
						alt={`${title} Case Study`}
						className="case-study-image"
					></img>
				</div>
			</div>
			<a href={link}>
				<button>Read Case Study</button>
			</a>
		</div>
	);
};

export default CaseStudyCard;
