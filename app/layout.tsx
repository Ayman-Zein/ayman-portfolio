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
  title: "Ayman Zein | Senior Front-End Engineer",
  description:
    "Results-driven Senior Front-End Engineer with over 5 years of experience architecting scalable, high-performance web applications. Specialist in Micro Frontends, Design Systems, and Performance Optimization.",
  keywords: [
    "Front-End Engineer",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Web Development",
    "Micro Frontends",
  ],
  authors: [{ name: "Ayman Zein" }],
  openGraph: {
    title: "Ayman Zein | Senior Front-End Engineer",
    description:
      "Results-driven Senior Front-End Engineer specializing in Micro Frontends, Design Systems, and Performance Optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
