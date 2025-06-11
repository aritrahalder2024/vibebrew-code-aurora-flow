
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Users, Zap, Coffee } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      icon: <Code className="w-5 h-5" />,
      question: "What makes Vibebrew different from other coding communities?",
      answer: "Vibebrew focuses on the intersection of code and culture. We're not just about technical skills - we celebrate creativity, collaboration, and the human side of development. Our community thrives on experimental projects, artistic coding, and pushing boundaries."
    },
    {
      id: "item-2", 
      icon: <Users className="w-5 h-5" />,
      question: "Who can join the Vibebrew community?",
      answer: "Everyone! Whether you're a seasoned developer, a designer learning to code, a student exploring tech, or someone curious about creative coding - there's a place for you. We welcome all skill levels and backgrounds."
    },
    {
      id: "item-3",
      icon: <Zap className="w-5 h-5" />,
      question: "What kind of events and activities do you organize?",
      answer: "We host coding workshops, creative hackathons, tech talks with industry leaders, collaborative art projects, and casual coffee chats. Our events blend technical learning with creative expression and community building."
    },
    {
      id: "item-4",
      icon: <Coffee className="w-5 h-5" />,
      question: "How do I get started and stay engaged?",
      answer: "Join our waitlist to get early access! Once you're in, introduce yourself, share your projects, participate in discussions, and attend events. The best way to engage is to be curious, supportive, and ready to learn from others."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-aurora-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-aurora-pink/20 rounded-full blur-xl floating animation-delay-300"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
            Frequently Asked
            <br />
            <span className="bg-aurora-gradient bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to know about joining our creative coding community
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
          {/* Animated code symbols in background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white/5 font-jetbrains-mono text-6xl animate-float"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i % 4) * 20}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${6 + i}s`
                }}
              >
                {['</', '/>', '{}', '()', '[]', '=>', '&&', '||'][i]}
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="relative z-10">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border-white/10 group hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-white hover:text-aurora-pink px-6 py-4 text-left group-hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-aurora-gradient rounded-lg group-hover:scale-110 transition-transform">
                      {faq.icon}
                    </div>
                    <span className="font-medium text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 px-6 pb-6 text-base leading-relaxed">
                  <div className="ml-12">
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
};
