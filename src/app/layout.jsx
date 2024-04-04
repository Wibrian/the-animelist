import { Gabarito as Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXT Anime List",
  description: "Generated by NEXT.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-700`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
