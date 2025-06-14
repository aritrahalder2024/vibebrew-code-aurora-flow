
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CommunityShowcase } from "@/components/CommunityShowcase";
import { EventsSection } from "@/components/EventsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { DiscussionPreview } from "@/components/DiscussionPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#150d21] relative">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#38235a,#150d21)]"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <DiscussionPreview />
        <CommunityShowcase />
        <EventsSection />
        <BlogSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
