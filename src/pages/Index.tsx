
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DiscussionPreview } from "@/components/DiscussionPreview";
import { CommunityShowcase } from "@/components/CommunityShowcase";
import { EventsSection } from "@/components/EventsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Aurora background effect */}
      <div className="aurora-bg absolute inset-0 opacity-70 animate-aurora-flow"></div>
      
      {/* Additional moving background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-aurora-pink/10 rounded-full blur-3xl floating opacity-60"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-aurora-violet/10 rounded-full blur-3xl floating animation-delay-600 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-aurora-purple/10 rounded-full blur-2xl floating animation-delay-300 opacity-70"></div>
      </div>
      
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
