
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
      {/* Static multi-tone gradient background - fresh aurora palette */}
      <div
        className="
          fixed inset-0 -z-10
          bg-no-repeat bg-cover
          opacity-90
        "
        style={{
          background:
            // Aurora blend: deep blue, cyan, violet, blush
            "linear-gradient(120deg, #162245 0%, #38a2d7 30%, #8f5efe 65%, #efc1e6 90%, #252250 100%)",
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
