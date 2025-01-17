import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/global/header";
import Footer from "./components/global/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOTA Studios PGH",
  description: "The official website of None Of The Above Studios located in Pittsburgh, PA.",
  icons: {
    icon: "./favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl m-auto`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
