import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CommunityShowcase } from "@/components/CommunityShowcase";
import { EventsSection } from "@/components/EventsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <div className="flex justify-center py-12">
          <div className="dash-float-anim">
            <img src="/dash.webp" alt="Dashboard Preview" className="rounded-2xl max-w-3xl w-full h-auto object-contain dash-image-effect" />
          </div>
        </div>
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
