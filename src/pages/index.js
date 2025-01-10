import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header"; 
import SectionOne from "@/components/ui/SectionOne";
import SectionTwo from "@/components/ui/SectionTwo";
import SectionThree from "@/components/ui/SectionThree";
import Footer from "@/components/layout/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}
