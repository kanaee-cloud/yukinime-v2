import { Lexend } from "next/font/google";
import Navbar from "../components/Navbar/index.jsx";
import "./globals.css";
import { authUserSession } from "./libs/auth-libs.js";
// import { useRouter } from "next/router";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Yukinime!",
  description: "Yukinime but is next",
};

export default async function RootLayout({ children }) {
  // const router = useRouter()
  // const noNavbarPaths = ['/auth/signin', '/auth/register']

  const userData = await authUserSession();

  return (
    <html lang="en">
      <body
        className={`${lexend.className} overflow-y-auto scroll-container`}
        suppressHydrationWarning={true}
      >
        <Navbar user={userData}/>
        {children}
      </body>
    </html>
  );
}
