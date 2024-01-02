import { Inter } from "next/font/google";
import "./globals.css";
import SidebarComponent from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube - Beranda",
  description: "youtube clone by yayandev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <SidebarComponent />
          <div className="flex-1">
            <Navbar />
            <div className="w-full max-w-7xl mx-auto">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
