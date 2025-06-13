import React, { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Zap, Users, Gift } from "lucide-react";

// Optimize the FAQSection component with React.memo
export const FAQSection = React.memo(() => {
  const faqs = [
    {
      id: "item-1",
      icon: <MessageSquare className="w-5 h-5" />,
      question: "What exactly is vibecoding and who is this community for?",
      answer: "Vibecoding is about leveraging AI tools to build, create, and scale efficiently as a solopreneur. Our community is for developers, creators, and builders who use AI coding assistants like ChatGPT, Claude, Cursor, and GitHub Copilot to accelerate their projects and share their entrepreneurial journey."
    },
    {
      id: "item-2", 
      icon: <Zap className="w-5 h-5" />,
      question: "How does the Reddit-style discussion format work?",
      answer: "Our platform features threaded discussions where you can share AI tool discoveries, ask for feedback on ideas, showcase your solopreneur progress, and get help with AI-assisted coding. Upvote the best content, engage in meaningful conversations, and build your reputation in the vibecoder community."
    },
    {
      id: "item-3",
      icon: <Users className="w-5 h-5" />,
      question: "Can I promote my own events or workshops in the community?",
      answer: "Absolutely! While we don't host official events, community members are encouraged to promote their workshops, talks, meetups, or online sessions. Share your expertise about AI tools, solopreneur strategies, or coding techniques with fellow vibecoders."
    },
    {
      id: "item-4",
      icon: <Gift className="w-5 h-5" />,
      question: "What's this about lifetime free access for the first 100 users?",
      answer: "The first 100 people to sign up get lifetime free access to all premium features including advanced AI tool recommendations, exclusive solopreneur resources, priority support, and access to our inner circle of successful vibecoders. Join early to secure your spot!"
    }
  ];

  // Pre-compute animated code symbols to avoid recalculation on re-renders
  const codeSymbols = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      key: i,
      symbol: ['</', '/>', '{}', '()', '[]'][i],
      left: 10 + (i * 20),
      top: 20 + (i % 3) * 30,
      animationDelay: i * 0.5,
      animationDuration: 6 + i * 0.5
    }));
  }, []);

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4 sm:mb-6 px-4">
            <span className="block sm:inline">Frequently Asked </span>
            <span className="text-aurora-pink block sm:inline">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto px-4">
            Everything you need to know about joining the vibecoder community
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-6 sm:p-8 relative overflow-hidden w-full max-w-2xl mx-auto">
          {/* Optimized animated code symbols in background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {codeSymbols.map((symbol) => (
              <div
                key={symbol.key}
                className="absolute text-white/5 font-jetbrains-mono text-4xl sm:text-6xl animate-float"
                style={{
                  left: `${symbol.left}%`,
                  top: `${symbol.top}%`,
                  animationDelay: `${symbol.animationDelay}s`,
                  animationDuration: `${symbol.animationDuration}s`,
                  willChange: 'transform'
                }}
              >
                {symbol.symbol}
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="relative z-10">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border-white/10 group hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                <AccordionTrigger 
                  className="text-white hover:text-aurora-pink px-4 sm:px-6 py-4 text-left group-hover:scale-[1.02] transition-transform"
                  style={{ willChange: 'transform, color' }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div 
                      className="p-2 bg-aurora-gradient rounded-lg group-hover:scale-110 transition-transform flex-shrink-0"
                      style={{ willChange: 'transform' }}
                    >
                      {faq.icon}
                    </div>
                    <span className="font-medium text-base sm:text-lg text-left">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 px-4 sm:px-6 pb-6 text-sm sm:text-base leading-relaxed">
                  <div className="ml-8 sm:ml-12">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';
