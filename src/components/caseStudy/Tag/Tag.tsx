import "./Tag.css";

interface TagProps {
	text: string;
	category: string;
}

const Tag = ({ text, category }: TagProps) => {
	return (
		<div className={`tag ${category}`}>
			<span>{text}</span>
		</div>
	);
};

export default Tag;
