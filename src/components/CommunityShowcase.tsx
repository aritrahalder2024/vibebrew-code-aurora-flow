
import { Users, MessageSquare, Github, Star, Coffee, Code } from "lucide-react";

export const CommunityShowcase = () => {
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

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Active Community</h3>
            <p className="text-white/70">Join thousands of developers sharing knowledge and collaborating on projects</p>
          </div>

          {/* Feature 2 */}
          <div className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Daily Discussions</h3>
            <p className="text-white/70">Engage in meaningful conversations about tech, AI, and development trends</p>
          </div>

          {/* Feature 3 */}
          <div className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Project Collaboration</h3>
            <p className="text-white/70">Work together on exciting projects and build the future of technology</p>
          </div>

          {/* Feature 4 */}
          <div className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
            <p className="text-white/70">Contribute to open source projects and showcase your coding skills</p>
          </div>

          {/* Feature 5 */}
          <div className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Learn & Grow</h3>
            <p className="text-white/70">Access tutorials, workshops, and mentorship opportunities</p>
          </div>

          {/* Feature 6 */}
          <div className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
            <p className="text-white/70">Connect with industry professionals and expand your network</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
            <p className="text-white/80 mb-6">
              Be part of a community that's shaping the future of development. Join our waitlist to get early access and exclusive perks!
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                🚀 Early Access Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
