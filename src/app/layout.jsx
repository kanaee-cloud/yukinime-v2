import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/index.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yukinime!",
  description: "Yukinime but is next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-auto scroll-container`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
