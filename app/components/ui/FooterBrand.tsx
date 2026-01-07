import type React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const FooterBrand: React.FC = () => {
	return (
		<div className="footer-section brand-section">
			<h3 className="footer-brand">PERSONAL PORTFOLIO</h3>
			<p className="footer-tagline">Machine Learning Engineer</p>
			<p className="footer-description">
				Passionate about impact, quality, and innovation for good.
			</p>
			<div className="footer-location">
				<FaMapMarkerAlt />
				<span>Paris, France</span>
			</div>
		</div>
	);
};

export default FooterBrand;
