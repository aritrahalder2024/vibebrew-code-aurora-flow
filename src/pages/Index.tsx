
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { lazy, Suspense } from "react";

// Lazy load non-critical components to improve initial page load
const AboutSection = lazy(() => import("@/components/AboutSection").then(module => ({ default: module.AboutSection })));
const CommunityShowcase = lazy(() => import("@/components/CommunityShowcase").then(module => ({ default: module.CommunityShowcase })));
const EventsSection = lazy(() => import("@/components/EventsSection").then(module => ({ default: module.EventsSection })));
const BlogSection = lazy(() => import("@/components/BlogSection").then(module => ({ default: module.BlogSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(module => ({ default: module.FAQSection })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));
const DiscussionPreview = lazy(() => import("@/components/DiscussionPreview").then(module => ({ default: module.DiscussionPreview })));

// Loading component for better UX during lazy loading
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Strong aurora gradient background from dark left to light right */}
      <div
        className="
          fixed inset-0 -z-20
          bg-no-repeat bg-cover
          opacity-95
        "
        style={{
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a3a 20%, #2d1b69 40%, #b565d9 60%, #ff5f96 80%, #ffd6e8 100%)",
          willChange: 'auto',
        }}
        aria-hidden="true"
      />
      {/* Reduced overlay for better aurora visibility */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "rgba(15, 15, 35, 0.25)"
        }}
      />
      {/* Main content placed above the overlays */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <DiscussionPreview />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CommunityShowcase />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EventsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
