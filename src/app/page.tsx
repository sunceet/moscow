import { AudienceSection } from "@/components/AudienceSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { PlatformFeatures } from "@/components/PlatformFeatures";

export default function Home() {
  return (
    <>
      <Marquee />
      <Header />
      <main>
        <Hero />
        <AudienceSection />
        <HowItWorks />
        <PlatformFeatures />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
