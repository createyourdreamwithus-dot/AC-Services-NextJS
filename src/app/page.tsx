import CounterSection from "@/Components/CounterSection/CounterSection";
import DetailCard from "@/Components/DetailCard/DetailCard";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ContactMap from "@/Components/Map/ContactMap";
import OurService from "@/Components/OurService/OurService";
import ServiceCards from "@/Components/ServiceCards/ServiceCards";
import WelcomeSection from "@/Components/WeelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CounterSection />
      <DetailCard />
      <WelcomeSection />
      <OurService />
      <ServiceCards />
      <ContactMap/>
    </>
  );
}
