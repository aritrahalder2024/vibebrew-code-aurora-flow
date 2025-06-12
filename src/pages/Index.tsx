
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DiscussionPreview } from "@/components/DiscussionPreview";
import { CommunityShowcase } from "@/components/CommunityShowcase";
import { EventsSection } from "@/components/EventsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Navigation - Fixed */}
      <Navigation />
      
      {/* Mobile: Horizontal Scroll Container */}
      <div className="lg:block hidden">
        {/* Desktop Layout */}
        <div className="relative z-10">
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
      
      {/* Mobile: Horizontal Scrolling Layout */}
      <div className="lg:hidden block">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-screen pt-20 scrollbar-hide">
          <section className="min-w-full snap-center flex-shrink-0">
            <HeroSection />
          </section>
          <section className="min-w-full snap-center flex-shrink-0">
            <AboutSection />
          </section>
          <section className="min-w-full snap-center flex-shrink-0">
            <DiscussionPreview />
          </section>
          <section className="min-w-full snap-center flex-shrink-0">
            <CommunityShowcase />
          </section>
          <section className="min-w-full snap-center flex-shrink-0">
            <EventsSection />
          </section>
          <section className="min-w-full snap-center flex-shrink-0">
            <BlogSection />
          </section>
          <section className="min-w-full snap-center flex-shrink-0">
            <FAQSection />
          </section>
          <section className="min-w-full snap-center flex-shrink-0">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
