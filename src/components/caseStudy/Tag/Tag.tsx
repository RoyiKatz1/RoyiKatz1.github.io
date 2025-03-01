import "./Tag.css";

interface TagProps {
	text: string;
}

const Tag = ({ text }: TagProps) => {
	return (
		<div className="tag">
			<span>{text}</span>
		</div>
	);
};

export default Tag;
