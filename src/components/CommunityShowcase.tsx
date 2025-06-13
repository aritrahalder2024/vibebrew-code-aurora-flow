import React from "react";
import { Users, MessageSquare, Github, Star, Coffee, Code, Briefcase } from "lucide-react";

// Optimize the CommunityShowcase component with React.memo
export const CommunityShowcase = React.memo(() => {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
            Join Our <span className="text-aurora-pink">Vibrant Community</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Connect with like-minded developers, share your projects, and grow together in our supportive ecosystem.
          </p>
        </div>

        {/* Community Features Grid - Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div 
            className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200 w-full max-w-md mx-auto"
            style={{ willChange: 'transform' }}
          >
            <div 
              className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Active Community</h3>
            <p className="text-white/70">Join thousands of developers sharing knowledge and collaborating on projects</p>
          </div>

          {/* Feature 2 */}
          <div 
            className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200 w-full max-w-md mx-auto"
            style={{ willChange: 'transform' }}
          >
            <div 
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Prompt Playground</h3>
            <p className="text-white/70">Learn, experiment, and practice AI prompting in a collaborative playground for creative minds</p>
          </div>

          {/* Feature 3 */}
          <div 
            className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200 w-full max-w-md mx-auto"
            style={{ willChange: 'transform' }}
          >
            <div 
              className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Project Collaboration</h3>
            <p className="text-white/70">Work together on exciting projects and build the future of technology</p>
          </div>

          {/* Feature 4 */}
          <div 
            className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200 w-full max-w-md mx-auto"
            style={{ willChange: 'transform' }}
          >
            <div 
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Freelance & Jobs</h3>
            <p className="text-white/70">Find freelance opportunities and tech jobs, connect with recruiters, and grow your career like LinkedIn</p>
          </div>

          {/* Feature 5 */}
          <div 
            className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200 w-full max-w-md mx-auto"
            style={{ willChange: 'transform' }}
          >
            <div 
              className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Learn & Grow</h3>
            <p className="text-white/70">Access tutorials, workshops, and mentorship opportunities</p>
          </div>

          {/* Feature 6 */}
          <div 
            className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200 w-full max-w-md mx-auto"
            style={{ willChange: 'transform' }}
          >
            <div 
              className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
            <p className="text-white/70">Connect with industry professionals and expand your network</p>
          </div>
        </div>
      </div>
    </section>
  );
});

CommunityShowcase.displayName = 'CommunityShowcase';