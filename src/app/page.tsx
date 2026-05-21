import { AudienceSection } from "@/components/AudienceSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { PlatformFeatures } from "@/components/PlatformFeatures";
import { StatStrip } from "@/components/StatStrip";

export default function Home() {
  return (
    <div className="site-shell">
      <Marquee />
      <Header />
      <main>
        <Hero />
        <StatStrip />
        <AudienceSection />
        <HowItWorks />
        <PlatformFeatures />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
