import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Play, ArrowUpRight, 
  Instagram, Youtube, Facebook, Music, MapPin, 
  Calendar, Award, Newspaper, Disc
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Gold Accent Color
  const goldAccent = "#d1b06b";
  const darkBg = "#0a0908";

  const upcomingDates = [
    { id: 1, date: "JUL 18", fullDate: "July 18, 2026", city: "Toronto, ON", venue: "Worship Clinic", ticketLink: "#" },
    { id: 2, date: "SEP 05", fullDate: "September 5, 2026", city: "Scarborough, ON", venue: "Live Worship Event", ticketLink: "#" },
    { id: 3, date: "SEP 26", fullDate: "September 26, 2026", city: "Brampton, ON", venue: "Fall Revival", ticketLink: "#" },
  ];

  const discography = [
    { id: 1, title: "Surrender Everything", year: "2026", type: "Single" },
    { id: 2, title: "God Is Gracious", year: "2025", type: "Album" },
    { id: 3, title: "Worship In The Waiting", year: "2023", type: "EP" },
    { id: 4, title: "He Is Able", year: "2022", type: "Single" },
  ];

  const features = [
    { id: 1, title: "Let It Rain", artist: "Toronto Mass Choir ft. Michael Manhertz", year: "2025" },
    { id: 2, title: "Holy Spirit Come", artist: "Elevation Local ft. Michael Manhertz", year: "2024" },
    { id: 3, title: "Revival Anthem", artist: "Kingdom Voices ft. Michael Manhertz", year: "2024" },
  ];

  const awards = [
    { id: 1, title: "Gospel Artist of the Year", organization: "Canadian Gospel Music Awards", year: "2025" },
    { id: 2, title: "Best Worship Single", organization: "Kingdom Image Awards", year: "2024" },
    { id: 3, title: "Vocalist of the Year", organization: "GMA Canada Covenant Awards", year: "2023" },
  ];

  const news = [
    { id: 1, date: "June 2026", title: "Michael Manhertz announces new Worship Clinic dates in Toronto." },
    { id: 2, date: "March 2026", title: "Featured on the cover of Gospel Today Magazine's 'Voices of Tomorrow'." },
    { id: 3, date: "December 2025", title: "'Surrender Everything' reaches Top 10 on National Christian Radio." },
  ];

  return (
    <div className="text-[#e5e5e5] min-h-screen font-sans selection:bg-[#d1b06b] selection:text-black" style={{ backgroundColor: darkBg }}>
      
      {/* CSS for Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
      `}} />

      {/* Navigation - Elegant & Minimal */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-white/5 ${isScrolled ? 'bg-[#0a0908]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Desktop Left Links */}
          <div className="hidden lg:flex flex-1 items-center space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="#music" className="hover:text-[#d1b06b] transition-colors">Music</a>
            <a href="#story" className="hover:text-[#d1b06b] transition-colors">Story</a>
            <a href="#tour" className="hover:text-[#d1b06b] transition-colors">Tour</a>
          </div>

          {/* Logo Center */}
          <div className="flex-1 flex justify-start lg:justify-center items-center">
            <a href="#" className="flex items-center">
              <img src="./logo.jpeg" alt="Michael Manhertz Music Logo" className="h-10 md:h-12 w-auto object-contain filter invert" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex flex-1 justify-end items-center space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="#news" className="hover:text-[#d1b06b] transition-colors">News</a>
            <a href="#awards" className="hover:text-[#d1b06b] transition-colors">Awards</a>
            <button className="bg-[#d1b06b] text-black px-8 py-3 hover:bg-white transition-colors">
              Booking
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#d1b06b]">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0908] z-40 flex flex-col justify-center items-center space-y-8 text-xl font-serif uppercase tracking-widest border-t border-[#d1b06b]/20 mt-20">
          <a href="#music" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d1b06b]">Music</a>
          <a href="#tour" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d1b06b]">Tour</a>
          <a href="#news" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d1b06b]">News</a>
          <a href="#awards" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d1b06b]">Awards</a>
          <button className="bg-[#d1b06b] text-black px-12 py-4 text-sm font-sans font-bold mt-8">
            Booking
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden pt-32 pb-12">
        {/* Background Image & Editorial Overlays */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
            style={{ backgroundImage: "url('./hero.jpeg')" }}
          ></div>
          {/* Gradient to fade into the dark background at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0908]"></div>
          {/* Vignette overlay for editorial feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0908_150%)]"></div>
        </div>

        {/* Top Text / Promo */}
        <div className="relative z-10 w-full px-6 md:px-12 flex justify-between items-start text-[#d1b06b] text-[10px] uppercase tracking-[0.3em] font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d1b06b]"></span>
            <span>New Single "Surrender" • Out Now</span>
          </div>
        </div>

        {/* Massive Serif Title (Kirk Franklin Style) */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-[15vw] md:text-[12vw] font-serif leading-[0.8] tracking-tighter uppercase text-[#f5f5f5] drop-shadow-2xl">
            Michael<br/>Manhertz
          </h1>
        </div>

        {/* Bottom Stats & CTA Layer */}
        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
          <div className="flex gap-12 text-[#d1b06b] font-serif">
            <div>
              <p className="text-[10px] font-sans tracking-[0.2em] text-gray-400 uppercase mb-1">Gospel Awards</p>
              <p className="text-4xl md:text-5xl tracking-tighter">3<span className="text-xl align-top">+</span></p>
            </div>
            <div>
              <p className="text-[10px] font-sans tracking-[0.2em] text-gray-400 uppercase mb-1">Est.</p>
              <p className="text-4xl md:text-5xl tracking-tighter">2015</p>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-[#d1b06b] text-black px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
              Listen Now &rarr;
            </button>
            <a href="#tour" className="flex-1 md:flex-none border border-white/20 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:border-[#d1b06b] hover:text-[#d1b06b] transition-colors text-center text-white">
              Tour 2026 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Gold Marquee Banner */}
      <div className="w-full overflow-hidden border-b border-white/5 py-4 bg-[#0a0908]">
        <div className="whitespace-nowrap flex text-[#d1b06b] font-serif text-2xl md:text-3xl italic tracking-wider">
          <div className="animate-marquee">
            <span className="mx-8">•</span> SURRENDER EVERYTHING
            <span className="mx-8">•</span> GOD IS GRACIOUS
            <span className="mx-8">•</span> WORSHIP IN THE WAITING
            <span className="mx-8">•</span> HE IS ABLE
            <span className="mx-8">•</span> SURRENDER EVERYTHING
            <span className="mx-8">•</span> GOD IS GRACIOUS
            <span className="mx-8">•</span> WORSHIP IN THE WAITING
            <span className="mx-8">•</span> HE IS ABLE
          </div>
        </div>
      </div>

      {/* Editorial Single Section */}
      <section id="music" className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Album Art */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="relative aspect-square w-full max-w-xl mx-auto border border-white/10 p-2">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Latest Single" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-24 h-24 bg-black/50 backdrop-blur-sm border border-[#d1b06b] rounded-full flex items-center justify-center pl-2 hover:bg-[#d1b06b] hover:text-black transition-all text-[#d1b06b] group">
                  <Play size={40} className="group-hover:fill-black" />
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-[11px] uppercase tracking-widest mt-6 max-w-xl mx-auto">
              Released Summer 2026. A reminder that surrender is the ultimate act of worship.
            </p>
          </div>

          {/* Right: Editorial Typography */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#d1b06b] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 border-b border-[#d1b06b]/30 pb-2 inline-block">
              The New Single
            </p>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9] uppercase mb-8">
              He Is <span className="text-[#d1b06b] italic lowercase">Calling</span> Us To Surrender.
            </h2>
            
            <div className="flex gap-4 items-start mb-12">
              <span className="text-6xl font-serif text-[#d1b06b] float-left mr-4 leading-none">M</span>
              <p className="text-gray-400 leading-relaxed font-serif text-lg">
                ichael on the song: "Sometimes we get so caught up in what we're asking for, that we forget to lay down what we're holding onto. This song is a raw, unfiltered call back to the altar."
              </p>
            </div>

            {/* Platform Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
              <button className="border border-white/20 py-4 hover:border-[#d1b06b] hover:text-[#d1b06b] transition-colors">Apple Music</button>
              <button className="border border-white/20 py-4 hover:border-[#d1b06b] hover:text-[#d1b06b] transition-colors">Spotify</button>
              <button className="border border-white/20 py-4 hover:border-[#d1b06b] hover:text-[#d1b06b] transition-colors">YouTube</button>
              <button className="bg-[#d1b06b] text-black py-4 hover:bg-white transition-colors">All Platforms &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="py-24 border-t border-white/5 bg-[#0d0c0b]">
        <div className="max-w-[70rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase mb-4">Upcoming <span className="text-[#d1b06b] italic lowercase">Dates</span></h2>
            <p className="text-[#d1b06b] text-[10px] font-bold tracking-[0.3em] uppercase">• Tickets Now Available</p>
          </div>

          <div className="space-y-2">
            {upcomingDates.map((tour) => (
              <div key={tour.id} className="group border-b border-white/10 hover:border-[#d1b06b]/50 transition-colors py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                
                <div className="flex items-center gap-8 md:w-1/3">
                  <span className="text-[#d1b06b] text-2xl md:text-3xl font-serif">{tour.date}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-serif tracking-wide uppercase">{tour.city}</h3>
                  <p className="text-gray-400 font-sans text-sm tracking-widest uppercase mt-2">{tour.venue}</p>
                </div>
                
                <button className="w-full md:w-auto border border-white/20 text-white px-12 py-4 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:bg-[#d1b06b] group-hover:text-black group-hover:border-[#d1b06b] transition-all">
                  Tickets
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto border-t border-white/5">
        <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase mb-16 text-center">The <span className="text-[#d1b06b] italic lowercase">Catalog</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Solo Discography */}
          <div>
            <h3 className="text-[#d1b06b] text-[12px] font-bold tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
              <Disc size={16} /> Solo Discography
            </h3>
            <div className="space-y-6">
              {discography.map((item) => (
                <div key={item.id} className="flex justify-between items-end border-b border-white/5 pb-4 hover:border-[#d1b06b]/30 transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">{item.type}</p>
                  </div>
                  <span className="text-[#d1b06b] font-serif">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div>
            <h3 className="text-[#d1b06b] text-[12px] font-bold tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
              <Music size={16} /> Featured Collaborations
            </h3>
            <div className="space-y-6">
              {features.map((item) => (
                <div key={item.id} className="flex flex-col border-b border-white/5 pb-4 hover:border-[#d1b06b]/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-end">
                    <h4 className="text-xl md:text-2xl font-serif text-white">{item.title}</h4>
                    <span className="text-[#d1b06b] font-serif">{item.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{item.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Awards Section */}
      <section id="awards" className="py-24 bg-[#0d0c0b] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Awards */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter uppercase mb-10 flex items-center gap-4">
              <Award className="text-[#d1b06b]" size={36} /> Honors
            </h2>
            <div className="space-y-8">
              {awards.map((award) => (
                <div key={award.id} className="bg-[#151413] border border-white/5 p-8 hover:border-[#d1b06b]/30 transition-colors">
                  <span className="bg-[#d1b06b]/10 text-[#d1b06b] px-3 py-1 text-[10px] uppercase tracking-widest font-bold">{award.year}</span>
                  <h3 className="text-2xl font-serif mt-4 mb-2">{award.title}</h3>
                  <p className="text-gray-400 text-sm tracking-wide">{award.organization}</p>
                </div>
              ))}
            </div>
          </div>

          {/* News */}
          <div id="news">
             <h2 className="text-4xl md:text-5xl font-serif tracking-tighter uppercase mb-10 flex items-center gap-4">
              <Newspaper className="text-[#d1b06b]" size={36} /> Press & News
            </h2>
            <div className="space-y-8">
              {news.map((item) => (
                <div key={item.id} className="border-l-2 border-[#d1b06b] pl-6 py-2">
                  <span className="text-[#d1b06b] text-[10px] uppercase tracking-widest font-bold">{item.date}</span>
                  <h3 className="text-xl md:text-2xl font-serif mt-2 leading-tight hover:text-[#d1b06b] cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <button className="mt-8 border border-white/20 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:border-[#d1b06b] hover:text-[#d1b06b] transition-colors">
              View All Press &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Footer Logo */}
          <div className="flex items-center opacity-50 grayscale hover:opacity-100 transition-opacity">
            <img src="./logo.jpeg" alt="Michael Manhertz Logo" className="h-12 w-auto object-contain filter invert" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-[#d1b06b] transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#d1b06b] transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#d1b06b] transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
          
          {/* Legal */}
          <div className="text-[10px] text-gray-600 uppercase tracking-widest flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>&copy; 2026 Michael Manhertz</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;