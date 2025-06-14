
import React, { useMemo } from "react";

interface Event {
  id: number;
  title: string;
  organizer: string;
  date: string;
  time: string;
  type: string;
  description: string;
  attendees: number;
}

const EventCard = React.memo(({ event }: { event: Event }) => (
  <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 cursor-pointer group w-full max-w-md mx-auto">
    <div className="flex items-center justify-between mb-4">
      <span className="px-3 py-1 bg-aurora-gradient rounded-full text-xs font-medium text-white">
        {event.type}
      </span>
      <span className="text-white/60 text-sm">{event.attendees} attending</span>
    </div>
    
    <h3 className="text-lg sm:text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-aurora-pink transition-colors">
      {event.title}
    </h3>
    
    <p className="text-sm sm:text-base text-white/70 mb-4 line-clamp-2">
      {event.description}
    </p>
    
    <div className="space-y-2 text-sm text-white/60">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{event.date}</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{event.time}</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>by {event.organizer}</span>
      </div>
    </div>
    
    <button className="w-full mt-4 px-4 py-2 bg-aurora-gradient rounded-full text-white font-medium text-sm hover:scale-105 transition-transform">
      Join Event
    </button>
  </div>
));

EventCard.displayName = 'EventCard';

export const EventsSection = React.memo(() => {
  const events = useMemo(() => [
    {
      id: 1,
      title: "AI-First Startup Showcase",
      organizer: "Sarah Chen",
      date: "Dec 20, 2024",
      time: "2:00 PM PST",
      type: "Virtual Demo Day",
      description: "Watch 10 AI-powered startups pitch their revolutionary ideas to a panel of expert judges.",
      attendees: 234
    },
    {
      id: 2,
      title: "No-Code AI Workshop",
      organizer: "Marcus Rivera",
      date: "Dec 22, 2024", 
      time: "11:00 AM EST",
      type: "Live Workshop",
      description: "Learn to build AI-powered apps without coding using the latest no-code platforms.",
      attendees: 156
    },
    {
      id: 3,
      title: "Creative Tech Meetup",
      organizer: "Luna Kim",
      date: "Dec 25, 2024",
      time: "4:00 PM GMT",
      type: "Community Meetup",
      description: "Connect with fellow creators and explore the intersection of technology and creative expression.",
      attendees: 89
    }
  ], []);

  return (
    <section id="events" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4 sm:mb-6">
            Community <span className="text-aurora-purple">Events</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Join vibebrew-hosted events and discover what our community members are organizing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
});

EventsSection.displayName = 'EventsSection';
