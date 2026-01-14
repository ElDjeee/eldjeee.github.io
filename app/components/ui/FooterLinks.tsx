import type React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiDevpost } from "react-icons/si";

const FooterLinks: React.FC = () => {
	return (
		<div className="footer-section links-section">
			<h4 className="footer-title">LINKS</h4>
			<div className="footer-links-list">
				<a
					href="https://github.com/eldjeee"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaGithub className="link-icon" />
					<span className="link-text">GitHub</span>
				</a>
				<a
					href="https://www.linkedin.com/in/yanis-djermouni"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaLinkedin className="link-icon" />
					<span className="link-text">LinkedIn</span>
				</a>
				<a
					href="https://drive.google.com/file/d/1ouv0RICXu17IoZAct1-IF4Xyi3EpvUwz/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaFilePdf className="link-icon" />
					<span className="link-text">Resume</span>
				</a>
			</div>
		</div>
	);
};

export default FooterLinks;
