import { useState } from "react";
import "../styles/Navbar.css";
import downloadIcon from "../assets/icons/Download.svg";
import mailIcon from "../assets/icons/Mail.svg";
import linkedinIcon from "../assets/icons/Linkedin.svg";

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const emailSubject = encodeURIComponent("Hello Royi!");
	const emailBody = encodeURIComponent(
		`Hi Royi,\n\nI stumbled upon your portfolio (and wow, nice work).\n\nI figured I’d reach out before your inbox gets flooded with recruiters fighting over you.\n\nI’d love to chat about [brief reason here].\n\nLet me know when you’re free, looking forward to hearing from you!\n\nBest,\n[Your Name]`
	);
	const mailTo = `mailto:royicats@gmail.com?subject=${emailSubject}!&body=${emailBody}`;
	return (
		<nav className="navbar">
			<a href="/">Home</a>
			<a
				className="icon-link"
				href="/royi-katz-cv.pdf"
				download="royi-katz-cv.pdf"
			>
				<img src={downloadIcon} alt="Download" width={16} height={16} />
				Resume
			</a>
			<div
				className="dropdown"
				onMouseEnter={() => setIsDropdownOpen(true)}
				onMouseLeave={() => setIsDropdownOpen(false)}
			>
				<a href="/contact">Contact</a>
				{isDropdownOpen && (
					<div className="dropdown-menu">
						<a
							className="icon-link"
							href={mailTo}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={mailIcon}
								alt="Mail"
								width={16}
								height={16}
							/>
							Email
						</a>
						<a
							className="icon-link"
							href="https://www.linkedin.com/in/royi-katz/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={linkedinIcon}
								alt="LinkedIn"
								width={16}
								height={16}
							/>
							LinkedIn
						</a>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
