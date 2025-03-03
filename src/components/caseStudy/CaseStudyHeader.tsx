import Tag from "./Tag/Tag";
import "../../styles/CaseStudyPage.css";

interface CaseStudyHeaderProps {
	logo?: string;
	title: string;
	tags: { text: string; category: string }[];
}

const CaseStudyHeader = ({ title, logo, tags }: CaseStudyHeaderProps) => {
	return (
		<div className="case-study-header">
			<img src={logo} alt={`${title} Logo`} />
			<h1>{title}</h1>
			<div className="tags">
				{tags.map((tag) => (
					<Tag text={tag.text} category={tag.category} />
				))}
			</div>
		</div>
	);
};

export default CaseStudyHeader;
