import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GradePulse – Alert Parents When Grades Start Declining",
  description: "Connect to school portals, track grade trends, and get early warning alerts before report cards. Only $6/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="26435bd9-8e95-4d2a-949b-a790654602cc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
