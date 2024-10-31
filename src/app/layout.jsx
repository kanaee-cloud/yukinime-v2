import { Lexend } from "next/font/google";
import Navbar from "../components/Navbar/index.jsx";
import "./globals.css";
// import { useRouter } from "next/router";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Yukinime!",
  description: "Yukinime but is next",
};

export default function RootLayout({ children }) {
  // const router = useRouter()
  // const noNavbarPaths = ['/auth/signin', '/auth/register']

  return (
    <html lang="en">
      <body
        className={`${lexend.className} overflow-y-auto scroll-container`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
