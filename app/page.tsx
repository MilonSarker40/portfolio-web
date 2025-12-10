import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import CountersSection from "@/components/CountersSection";
import Features from "@/components/Features";
import OurService from "@/components/OurService";
import PostSlider from "@/components/PostSlider";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Banner />
      <Features id="about" />
      <OurService id="services" />
      <WorksSection id="projects" />
      <AboutUs />
      <CountersSection />
      <PostSlider id="blog" />
    </main>
  );
}
