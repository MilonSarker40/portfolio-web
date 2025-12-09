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
      {/* Hero Banner */}
      <Banner />

      {/* Features Section */}
      <Features id="about" />

      {/* Services Section */}
      <OurService id="services" />

      {/* Projects / Works Section */}
      <WorksSection id="projects" />

      {/* About Us Section */}
      <AboutUs />

      {/* Counters Section */}
      <CountersSection />

      {/* Blog / Posts Section */}
      <PostSlider id="blog" />
    </main>
  );
}
