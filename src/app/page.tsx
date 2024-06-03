import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Testinomials from "@/components/Testinomials";
import FAQ from "@/components/FAQ";
import Banner from "@/components/Banner";
import Ending from "@/components/Ending";

export default function Home() {
  return (
    <>
    <div className="absolute h-[60px] left-[175px] right-[175px] top-[40px]"
    style={{ width: '1090px', bottom: '5787px' }}>
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testinomials />
      <FAQ />
      <Banner />
      <Ending />
    </div>
    
    </>
  );
}
