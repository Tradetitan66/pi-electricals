import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import About from "@/components/About";
import Vehicle from "@/components/Vehicle";
import Reviews from "@/components/Reviews";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Projects />
      <Services />
      <FeaturedProject />
      <About />
      <Vehicle />
      <Reviews />
      <ContactCTA />
    </>
  );
}
