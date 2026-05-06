import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Security Scorecard – Security Score for Your Repos",
  description: "Scan GitHub repositories for security vulnerabilities, dependency issues, and configuration problems. Get a comprehensive security score with prioritized recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8606770b-f2d2-454f-b9b8-2762d47a83ca"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
