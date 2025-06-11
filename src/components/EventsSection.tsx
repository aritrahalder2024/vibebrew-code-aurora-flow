
export const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Creative Coding Workshop",
      date: "2024-06-15",
      time: "2:00 PM UTC",
      type: "Workshop",
      status: "upcoming"
    },
    {
      id: 2,
      title: "AI & Art Hackathon",
      date: "2024-06-22",
      time: "10:00 AM UTC",
      type: "Hackathon",
      status: "featured"
    },
    {
      id: 3,
      title: "Community Coffee Chat",
      date: "2024-06-29",
      time: "4:00 PM UTC",
      type: "Social",
      status: "upcoming"
    }
  ];

  const getTimeUntil = (dateString: string) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? `${days} days` : 'Today';
  };

  return (
    <section id="events" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4">
            Upcoming <span className="text-aurora-violet">Events</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join our community events and level up your creative coding journey
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className={`glass-strong rounded-glass p-6 shadow-tile hover:scale-[1.02] transition-all duration-300 border-l-4 ${
                event.status === 'featured' 
                  ? 'border-aurora-pink shadow-glow-pink' 
                  : 'border-aurora-violet'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'featured'
                        ? 'bg-aurora-pink/20 text-aurora-pink'
                        : 'bg-aurora-violet/20 text-aurora-violet'
                    }`}>
                      {event.type}
                    </span>
                    {event.status === 'featured' && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white animate-pulse">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white/70">
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-aurora-gradient bg-clip-text text-transparent font-jetbrains-mono">
                      {getTimeUntil(event.date)}
                    </div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">to go</div>
                  </div>
                  
                  <button className="px-6 py-2 bg-aurora-gradient rounded-full text-white font-medium hover:scale-105 transition-transform duration-300">
                    Join Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
