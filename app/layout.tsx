import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: "Gourav Pavankar | Full Stack Developer → AI/ML Engineer",

  description:
    "Gourav Pavankar is a Full Stack Developer transitioning into AI/ML Engineering, building modern web applications, backend systems, and intelligent AI-powered solutions.",

  keywords: [
    "Gourav Pavankar",
    "Full Stack Developer",
    "AI ML Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Python Developer",
    "Django Developer",
    "React Developer",
    "Next.js Developer",
  ],
   icons: {
    icon: "./GPLogo.png",
  },

  authors: [
    {
      name: "Gourav Pavankar",
    },
  ],

  creator: "Gourav Pavankar",
  

  openGraph: {
    title: "Gourav Pavankar | Full Stack Developer → AI/ML Engineer",
    description:
      "Portfolio of Gourav Pavankar — Full Stack Developer and AI/ML Engineer.",
    type: "website",
    images: [
    {
      url: "../public/Banner.png",
      width: 1200,
      height: 630,
      alt: "Gourav Pavankar Portfolio",
    },
  ],
  },
  
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}