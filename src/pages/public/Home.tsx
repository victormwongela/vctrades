import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import TradingPlans from "../../components/home/TradingPlans";
import WhyChooseUs from "../../components/home/WhyChooseUS";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";
import MarketStats from "../../components/home/MarkertStats";

const Home = () => {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <Hero />
      <Stats />
      <TradingPlans />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <MarketStats />
    </main>
  );
};

export default Home;