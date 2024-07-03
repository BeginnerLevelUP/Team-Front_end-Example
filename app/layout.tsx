import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexend_Deca = Lexend_Deca({ weight: '400',
  subsets: ['latin'],});

export const metadata: Metadata = {
  title: "Team Collab",
  description: "Front End example of Team Collab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend_Deca.className}>{children}</body>
    </html>
  );
}
