import "./InsightBox.css";

interface InsightBoxProps {
	emoji?: string;
	text: string;
}

const InsightBox = ({ emoji = "💡", text }: InsightBoxProps) => {
	return (
		<div className="insight-box">
			<h2>{emoji}</h2>
			<p>{text}</p>
		</div>
	);
};

export default InsightBox;
