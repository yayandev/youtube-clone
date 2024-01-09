import { Inter } from "next/font/google";
import Aside from "../components/Aside";
import Navbar from "@/components/Navbar";
import NavBottom from "@/components/NavBottom";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube - Beranda",
  description: "youtube clone by yayandev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full flex box-border">
          <Aside />
          <div className="flex-1 w-full box-border">
            <Navbar />
            <div className="w-full box-border">
              {children}
              <NavBottom />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
