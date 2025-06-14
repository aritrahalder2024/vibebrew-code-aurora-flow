
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
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Static vibrant aurora background */}
      <div
        className="
          fixed inset-0 -z-10
          bg-gradient-to-br from-[#522072] via-[#a11f65] to-[#f44fa3]
          bg-aurora-gradient
          opacity-95
          "
        style={{
          background: "linear-gradient(135deg, #522072 0%, #a11f65 40%, #f44fa3 100%)",
        }}
        aria-hidden="true"
      />
      {/* Main content placed above the static background */}
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
