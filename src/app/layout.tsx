import Head from "next/head";
import Footer from "./components/common/Footer/Footer";
import MoveToTopButton from "./components/common/MoveToTopButton/MoveToTopButton";
import Nav from "./components/common/Nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICICT4SD",
  description: "Created by Moheb with next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Nav />
          {children}
          <Footer />
          <MoveToTopButton />
        </Provider>
      </body>
    </html>
  );
}
