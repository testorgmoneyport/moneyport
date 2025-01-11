import { Geist, Geist_Mono } from "next/font/google";
import SectionOne from "@/components/ui/SectionOne";
import SectionTwo from "@/components/ui/SectionTwo";
import SectionThree from "@/components/ui/SectionThree";

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
    <div className="px-4 md:px-0">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
