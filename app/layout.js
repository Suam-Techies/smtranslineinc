import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SmTranslineInc | Digital Agency",
  description: "SmTranslineInc is a digital agency helping ambitious businesses grow through strategy, creative, web development, and performance marketing.",
  icons: {
    icon: "/sm-favicon.svg",
    shortcut: "/sm-favicon.svg",
    apple: "/sm-favicon.svg",
  },
  other: {
    "p:domain_verify": "9901e8593e5c6ad193f6af4e1c687b3f",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
