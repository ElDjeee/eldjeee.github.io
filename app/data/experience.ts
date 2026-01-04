import type { ExperienceItem } from "../types/types";

export const experience: ExperienceItem[] = [
	{
		date: "February 2025 - September 2025",
		title: "Research Scientist Intern",
		company: "ISIR",
		description: [
			" - Identified gaps in multi-agent Reinforcement Learning and Vision-Language-Action (VLA) literature.",
			" - Designed and trained Vision-Language-Action (VLA) embodied models using Python and PyTorch.",
			" - Built and evaluated multi-agent learning setups to compare VLA models against traditional RL policies.",
		],
		statsKey: "Research Scientist Intern ISIR",
		link: "https://www.isir.upmc.fr/?lang=en",
	},
	{
		date: "April 2023 - June 2023",
		title: "Research Scientist Intern",
		company: "LORIA",
		description: [
			" - Designed and conducted an experimental study with 100 participants, collecting synchronized multimodal data (EEG and motion tracking) across 300 Rock–Paper–Scissors games.",
			" - Developed Python data pipelines (NumPy, Pandas) for cleaning, synchronizing, and analyzing datasets.",
			" - Implemented predictive models to anticipate human actions, achieving a 60% win rate.",
			" - Integrated the trained models into a humanoid robot system using C/C++ for real-time inference.",
		],
		statsKey: "Research Scientist Intern LORIA",
		link: "https://www.loria.fr/en/",
	},
	{
		date: "August 2022 - September 2022",
		title: "Cryptanalyst Intern",
		company: "INRIA",
		description: [
			" - Deciphered a 1546 diplomatic letter written in Middle French using cryptanalysis techniques.",
			" - Translated plaintext sections for contextual analysis, reviewed historical encryption techniques, catalogued cipher symbols, and digitized the complete manuscript for systematic cryptanalysis.",
			" - Developed Python-based cryptanalysis tools using NumPy for pattern analysis and hypothesis testing.",
		],
		statsKey: "Cryptanalyst Intern",
		link: "https://www.inria.fr/en",
	},
];
