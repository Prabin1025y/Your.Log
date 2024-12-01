import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YourBlog",
  description: "A blog website for easy logging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-[Roboto]`}>
        <Navbar />
        <div className=" w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mx-auto px-6 sm:px-12 h-screen overflow-x-hidden scrollbar">
          {children}
        </div>
      </body>
    </html>
  );
}
