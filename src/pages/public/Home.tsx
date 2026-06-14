import Hero from "../../components/home/Hero";
import MarketStats from "../../components/home/MarkertStats";
import Markets from "../../components/home/Markets";
import TradingPlans from "../../components/home/TradingPlans";
import WhyChooseUs from "../../components/home/WhyChooseUS";
import HowItWorks from "../../components/home/HowItWorks";
import CTA from "../../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <MarketStats />
      <Markets />
      <TradingPlans />
      <WhyChooseUs />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default Home;