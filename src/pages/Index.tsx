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
      {/* Static aurora-inspired gradient background */}
      <div
        className="
          fixed inset-0 -z-20
          bg-no-repeat bg-cover
          opacity-90
        "
        style={{
          background:
            // Softer aurora: deep blue, faded cyan, soft violet, blush
            "linear-gradient(120deg, #182044 0%, #3d8bb8 30%, #7b6fe8 65%, #e6d1e6 90%, #2e2957 100%)",
        }}
        aria-hidden="true"
      />
      {/* Semi-transparent overlay to boost contrast */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "rgba(20, 17, 40, 0.62)"
        }}
      />
      {/* Main content placed above the overlays */}
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
