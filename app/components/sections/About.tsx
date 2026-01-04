"use client";

import { motion } from "framer-motion";
import type React from "react";
import "../../styles/sections.scss";
import { LinkPreview } from "../ui/link-preview";

const ANIMATION_PROPS = {
	initial: { y: 50, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	viewport: { once: true },
	transition: {
		type: "spring" as const,
		stiffness: 100,
		damping: 10,
		mass: 1,
	},
} as const;

const About: React.FC = () => {
	return (
		<motion.div className="AboutContainer" {...ANIMATION_PROPS}>
			<div className="AboutContentContainer">
				<div className="AboutContent">
					<p className="AboutText">
						Recently graduated in Computer Science @{" "}
						<LinkPreview url="https://www.sorbonne-universite.fr/en" className="hoverLink">
							<span id="mU">Sorbonne Université</span>
						</LinkPreview>{" "}
						. Previously interned at @{" "}
						<LinkPreview url="https://www.isir.upmc.fr/?lang=en" className="hoverLink">
							<span id="intern">ISIR</span>
						</LinkPreview>{" "}
						in Paris, France. Throughout the 10+ years I've been coding, I've made some
						pretty{" "}
						<LinkPreview
							url="https://github.com/eldjeee"
							className="hoverLink"
						>
							<span id="hint">cool projects</span>
						</LinkPreview>{" "}
						, and I'm always working on improving and learning more.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
