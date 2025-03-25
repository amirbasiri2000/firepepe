import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import {HeroUIProvider} from "@heroui/react";
import Header from '../components/layouts/Header'
import { Web3Provider } from "../providers/Web3Provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Connect Wallet",
  description: "Coin Base !:)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            {/* <Header/> */}
            <HeroUIProvider>
              <main>{children}</main>
            </HeroUIProvider>
       
      </body>
    </html>
  );
}
