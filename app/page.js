import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import PostHero from "@/components/PostHero/PostHero";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <Hero/>
      <PostHero/>

    </div>
  );
}
