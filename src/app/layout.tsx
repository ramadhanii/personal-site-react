import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ramadhani",
  description: "Muhammad Ramadhani Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-mono`}>
        {children}
        <Footer />
      </body>
      
      <GoogleAnalytics gaId="G-G0V9WRQT9K"/>
    </html>
  );
}
