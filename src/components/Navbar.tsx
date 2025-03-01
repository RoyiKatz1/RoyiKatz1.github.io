import "../styles/Navbar.css";
import downloadIcon from "../assets/icons/Download.svg";

const Navbar = () => {
	return (
		<nav className="navbar">
			<a id="resume" href="/royi-katz-cv.pdf" download="royi-katz-cv.pdf">
				<img src={downloadIcon} alt="Download" width={16} height={16} />
				Resume
			</a>
			<a href="/contact">Contact</a>
		</nav>
	);
};

export default Navbar;
