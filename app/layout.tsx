import type { Metadata, Viewport } from "next";
import "./globals.scss";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Personal Portfolio website.",
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	themeColor: "#FAF9F6",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<Script
				src="https://cloud.umami.is/script.js"
				data-website-id="39c1681d-0301-45a1-9a73-0a9bea595507"
				strategy="afterInteractive"
				defer
			/>
			<body>{children}</body>
		</html>
	);
}
