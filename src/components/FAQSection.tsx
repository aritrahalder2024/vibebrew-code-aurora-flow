import React, { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Zap, Users, Gift, Star, DollarSign } from "lucide-react";

// Optimize the FAQSection component with React.memo
export const FAQSection = React.memo(() => {
  const faqs = [
    {
      id: "item-1",
      icon: <MessageSquare className="w-5 h-5" />,
      question: "What is 'vibe coding' and how is it different?",
      answer: "Basically, with vibe coding, you just tell an AI the awesome app you're imagining, and it blasts out the code to make it happen. It's all about focusing on your big ideas and the creative vision, instead of getting bogged down in the old-school grind of writing every single line by hand!"
    },
    {
      id: "item-2", 
      icon: <Zap className="w-5 h-5" />,
      question: "How can I learn and practice AI prompting here?",
      answer: "Our Prompt Playground is a safe space to experiment with AI prompts, share your results, and get feedback from fellow vibecoders. Whether you're new to prompting or want to master advanced techniques, you'll find resources and a community eager to help you grow."
    },
    {
      id: "item-3",
      icon: <Users className="w-5 h-5" />,
      question: "Can I find collaborators or freelance gigs as a vibecoder?",
      answer: "Yes! Vibebrew connects you with other creative coders for project collaboration, freelance opportunities, and even full-time jobs. Our platform is designed to help you showcase your skills, build your network, and vibe with like-minded people."
    },
    {
      id: "item-4",
      icon: <Gift className="w-5 h-5" />,
      question: "How does the community help with launching new products or ideas?",
      answer: "Before you launch to the world, you can share your product or idea in our Product Launchpad. Get honest, constructive feedback from real developers and creators, and access our Startup Kit to help you turn your vision into reality—all while vibing with a supportive community."
    },
    {
      id: "item-5",
      icon: <DollarSign className="w-5 h-5" />,
      question: "Is this a free ride or a velvet rope club?",
      answer: "A bit of both. Vibebrew is free to enter and explore. But if you want to level up with advanced tools and member only perks, the premium experience is waiting."
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

        <div className="glass-strong rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden w-full max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="relative z-10">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border-white/10 group hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                <AccordionTrigger 
                  className="text-white hover:text-aurora-pink px-3 sm:px-4 md:px-6 py-4 text-left group-hover:scale-[1.02] transition-transform [&>svg]:ml-2 [&>svg]:flex-shrink-0"
                  style={{ willChange: 'transform, color' }}
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    <div 
                      className="p-2 bg-aurora-gradient rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5"
                      style={{ willChange: 'transform' }}
                    >
                      {faq.icon}
                    </div>
                    <span className="font-medium text-sm sm:text-base md:text-lg text-left leading-tight sm:leading-normal break-words hyphens-auto min-w-0 flex-1">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 px-3 sm:px-4 md:px-6 pb-6 text-sm sm:text-base leading-relaxed">
                  <div className="ml-8 sm:ml-10 md:ml-12 break-words">
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
