
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
          willChange: 'auto',
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
