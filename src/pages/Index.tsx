
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
