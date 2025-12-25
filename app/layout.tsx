import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaabir Ahamed Saleem - Software Engineer",
  description: "Portfolio of Jaabir Ahamed Saleem, Software Engineer specializing in full-stack development with Next.js, React, and Supabase.",
  keywords: ["Software Engineer", "Full Stack Developer", "Next.js", "React", "TypeScript", "Supabase"],
  authors: [{ name: "Jaabir Ahamed Saleem" }],
  openGraph: {
    title: "Jaabir Ahamed Saleem - Software Engineer",
    description: "Portfolio showcasing projects and experience in full-stack development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

