import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const sagita = localFont({
  src: "../../public/sagita.woff",
  variable: "--font-serif",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KKN-PPM UGM Narasiraya 2026",
  description: "Website Official Narasiraya KKN-PPN UGM Simpang Raya 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} ${figtree.variable} ${sagita.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
