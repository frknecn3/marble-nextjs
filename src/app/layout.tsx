import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/MainComponents/Header";
import Footer from "@/components/MainComponents/Footer";
import { FaArrowCircleUp } from "react-icons/fa";
import GoTopButton from "@/components/MainComponents/GoTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marble NextJS  FRKNECN3",
  description: "Generated by create next app, created by Furkan Ercan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} relative`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoTopButton />
        </body>
    </html>
  );
}
