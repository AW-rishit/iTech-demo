import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import PostHero from "@/components/PostHero/PostHero";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <Hero/>
      <PostHero/>
      <About/>
      <div className="h-[20vh]"></div>

    </div>
  );
}
