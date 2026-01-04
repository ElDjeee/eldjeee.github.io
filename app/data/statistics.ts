import type { Statistics } from "../types/types";

const statColors = {
	coral: { backgroundColour: "rgba(255, 179, 167, 0.5)" },
	lavender: { backgroundColour: "rgba(200, 191, 231, 0.5)" },
	rose: { backgroundColour: "rgba(255, 182, 193, 0.5)" },
	violet: { backgroundColour: "rgba(186, 164, 217, 0.5)" },
	gold: { backgroundColour: "rgba(255, 223, 150, 0.5)" },
	mint: { backgroundColour: "rgba(167, 230, 195, 0.5)" },
	sky: { backgroundColour: "rgba(173, 216, 255, 0.5)" },
	peach: { backgroundColour: "rgba(255, 218, 185, 0.5)" },
};

export const getStatBorders = (colour: string) => {
	const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

	if (rgbaMatch) {
		const [, r, g, b] = rgbaMatch;
		return {
			borderColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
			color: `#000000`,
		};
	}

	return {
		borderColor: colour,
		color: colour,
	};
};

export const statistics: Statistics = {
	"Research Scientist Intern ISIR": {
		stats: [{ label: "params", value: "Under 5M", ...statColors.violet }],
	},
	"Research Scientist Intern LORIA": {
		stats: [
			{ label: "humans", value: "Outperforms", ...statColors.gold },
			{ label: "participants", value: "100+", ...statColors.rose },
			{ label: "played games", value: "300+", ...statColors.lavender },
		],
	},
	"Cryptanalyst Intern": {
		stats: [
			{ label: "decrypted", value: "Successfully", ...statColors.mint },
			{ label: "without paracetamol :)", value: "Translated", ...statColors.peach },
		],
	},
	"MASTER": {
		stats: [
		],
	},
	"BACHELOR": {
		stats: [
			{ label: "of the class", value: "10%", ...statColors.sky },
		],
	},
};
