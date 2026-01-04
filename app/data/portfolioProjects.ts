import type { Project } from "../types/projects";

const languageColors = {
	Python: { backgroundColour: "rgba(54, 216, 176, 0.5)" },
	ComputerGraphics: { backgroundColour: "rgba(89, 218, 102, 0.5)" },
	CCpp: { backgroundColour: "rgba(165, 86, 218, 0.5)" },
	RaspberryPi: { backgroundColour: "rgba(223, 104, 201, 0.5)" },
	Cuda: { backgroundColour: "rgba(118, 185, 0, 0.5)" },
	Mantine: { backgroundColour: "rgba(123, 208, 223, 0.5)" },
	TypeScript: { backgroundColour: "rgba(134, 122, 240, 0.5)" },
	RAGAI: { backgroundColour: "rgba(167, 167, 167, 0.5)" },
	VectorDB: { backgroundColour: "rgba(167, 167, 167, 0.5)" },
	ReinforcementLearning: { backgroundColour: "rgba(105, 96, 231, 0.5)" },
	MachineLearning: { backgroundColour: "rgba(214, 224, 66, 0.5)" },
	JupyterNotebook: { backgroundColour: "rgba(255, 175, 2, 0.5)" },
	"Three.js": { backgroundColour: "rgba(235, 11, 11, 0.5)" },
	Tailwind: { backgroundColour: "rgba(43, 200, 174,  0.5)" },
	Zustand: { backgroundColour: "rgba(218, 214, 214, 0.5)" },
	PostgreSQL: { backgroundColour: "rgba(157, 209, 243, 0.5)" },
	RTMP: { backgroundColour: "rgba(241, 122, 172, 0.5)" },
	ComputerVision: { backgroundColour: "rgba(113, 240, 187, 0.5)" },
	AI: { backgroundColour: "rgba(196, 138, 235, 0.5)" },
	Hardware: { backgroundColour: "rgba(206, 203, 14, 0.5)" },
	Azure: { backgroundColour: "rgba(131, 188, 255, 0.5)" },
	Neuroscience: { backgroundColour: "rgba(224, 123, 224, 0.5)" },
	RnD: { backgroundColour: "rgba(53, 197, 241, 0.5)" },
};

export const languageBorders = (colour: string) => {
	// Extract RGB values from rgba(r, g, b, a) format
	const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

	if (rgbaMatch) {
		const [, r, g, b] = rgbaMatch;
		return {
			borderColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
			color: `#000000`,
		};
	}

	// Fallback in case the format is unexpected
	return {
		borderColor: colour,
		color: colour,
	};
};

export const projects: Project[] = [
	{
		title: "TD-MPC",
		languages: [
			{ name: "AI", ...languageColors.AI },
			{ name: "Python", ...languageColors.Python },
			{ name: "Machine Learning", ...languageColors.MachineLearning },
			{ name: "Reinforcement Learning", ...languageColors.ReinforcementLearning },
		],
		description:
			"Rebuilt TD-MPC, reproducing the reported sample efficiency.",
		github: "https://github.com/ElDjeee/Codage_TD-MPC",
		// website: "https://example.com",
	},
	{
		title: "Ray Tracer",
		languages: [
			{ name: "C/C++", ...languageColors.CCpp },
			{ name: "Computer Graphics", ...languageColors.ComputerGraphics },
			{ name: "Cuda", ...languageColors.Cuda },
		],
		description:
			"Implementation of a 3D Rendering Engine (Path Tracing).",
		github: "https://github.com/ElDjeee/Ray-Tracer",
	},
];
