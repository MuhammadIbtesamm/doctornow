import DoctorsSection from "@/components/DoctorsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DoctorsSection isHome={true} />
    </div>
  );
}