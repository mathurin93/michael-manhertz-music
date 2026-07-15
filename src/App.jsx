import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Play, ShoppingCart, ArrowUpRight, 
  Music, MapPin, Calendar, Mail, ChevronDown
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

  const tourDates = [
    { id: 1, city: "Toronto, Canada", venue: "Canada Event Centre", date: "May 28, 2026", time: "7:00 PM" },
    { id: 2, city: "Ottawa, Canada", venue: "Woodvale Pentecostal", date: "May 29, 2026", time: "7:00 PM" },
    { id: 3, city: "Montreal, Canada", venue: "Nouvelle Vie", date: "May 30, 2026", time: "7:00 PM" },
    { id: 4, city: "New York, NY", venue: "Barclays Center", date: "Jun 05, 2026", time: "8:00 PM" },
    { id: 5, city: "Atlanta, GA", venue: "State Farm Arena", date: "Jun 12, 2026", time: "7:30 PM" },
  ];

  const merchItems = [
    { id: 1, name: "Grateful Heavyweight Hoodie", price: "$65.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Tour Vintage Tee", price: "$35.00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Worship Dad Hat", price: "$28.00", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 a flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a href="#" className="flex items-center">
              <img src="./logo.jpeg" alt="Michael Manhertz Music Logo" className="h-16 md:h-24 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium tracking-widest uppercase text-gray-300">
            {/* <a href="#tour" className="hover:text-white transition-colors">Tour</a> */}
            <a href="#music" className="hover:text-white transition-colors">Music</a>
            <a href="#merch" className="hover:text-white transition-colors">Merch</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm font-medium uppercase tracking-wider hover:text-gray-300 transition-colors">
              <ShoppingCart size={18} />
              <span>Cart (0)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {}
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-8 text-2xl font-black uppercase tracking-widest">
          {/* <a href="#tour" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-400">Tour</a> */}
          <a href="#music" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-400">Music</a>
          <a href="#merch" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-400">Merch</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-400">About</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Background Local Video & Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover object-center opacity-90"
          >
            <source src="./hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>

        {/* Clean Typography */}
        <div className="relative z-10 flex flex-col items-center mt-20 px-4">
          {/* <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] leading-none font-black text-white tracking-tighter uppercase text-center drop-shadow-2xl">
            Michael<br />Manhertz
          </h1> */}
          
          <p className="mt-8 text-sm md:text-base tracking-[0.3em] uppercase text-gray-200 text-center max-w-lg drop-shadow-lg">
            Worship Leader • Songwriter • Artist
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
            {/* <a href="#tour" className="group flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-all">
              <span>View Tour Dates</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a> */}
            <button className="flex items-center space-x-3 border border-white/30 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all">
              <span>Booking</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Floating Video Preview */}
        <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden lg:block">
          <div className="relative w-64 h-40 rounded-lg overflow-hidden group cursor-pointer border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1516280440502-6c243f76906a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Latest Video" 
              className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white/90 text-black px-4 py-2 rounded-full flex items-center space-x-2 text-xs font-bold uppercase tracking-wider">
                <Play size={14} fill="currentColor" />
                <span>Watch Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* Tour Section - Temporarily Hidden */}
      {/* 
      <section id="tour" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">• Tickets Now Available</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">God Is Gracious<br/>Tour</h2>
          <p className="text-gray-400 mt-6 text-sm md:text-base">Discover Michael Manhertz live at a location near you - More dates to be added soon!</p>
        </div>

        <div className="space-y-4">
          {tourDates.map((tour) => (
            <div key={tour.id} className="border border-white/10 bg-[#0a0a0a] hover:bg-[#111] transition-colors p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">{tour.city}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-gray-400 text-sm">
                  <span className="flex items-center"><Calendar size={14} className="mr-2" /> {tour.date} | {tour.time}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center"><MapPin size={14} className="mr-2" /> {tour.venue}</span>
                </div>
              </div>
              <button className="w-full md:w-auto bg-white text-black px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors">
                Tickets
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm">More dates coming soon!</p>
          <button className="flex items-center space-x-2 text-sm uppercase tracking-wider font-bold hover:text-gray-300">
            <span>Get Notified</span>
            <Mail size={16} />
          </button>
        </div>
      </section> 
      */}

      {}
      {/* Music / Featured Section */}
      <section id="music" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Studio session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform">
                  <Play size={32} fill="black" className="text-black" />
                </button>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">The Latest<br/>Anthem</h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Experience the raw, unfiltered atmosphere of live worship. The latest single "Surrender Everything" is out now on all streaming platforms. Recorded live during the winter sessions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center space-x-2 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                  <Music size={18} />
                  <span className="font-bold text-sm uppercase tracking-wider">Spotify</span>
                </button>
                <button className="flex items-center space-x-2 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                  <Music size={18} />
                  <span className="font-bold text-sm uppercase tracking-wider">Apple Music</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* Merch Section */}
      <section id="merch" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Official Merch</h2>
            <p className="text-gray-400 mt-2">Wear the message.</p>
          </div>
          <a href="#" className="hidden md:flex items-center space-x-2 font-bold uppercase tracking-wider text-sm border-b border-white pb-1 hover:text-gray-300">
            <span>Shop All</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-[#111] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider text-sm">Quick Add</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold uppercase tracking-wide">{item.name}</h3>
                <span className="text-gray-400">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <button className="border border-white px-8 py-4 w-full font-bold uppercase tracking-wider text-sm">
            Shop All Merch
          </button>
        </div>
      </section>

      {}
      {/* Newsletter / Community Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">Join the Community</h2>
          <p className="text-gray-400 mb-12 text-sm md:text-base leading-relaxed">
            Join our exclusive community for all things Michael Manhertz Music. 
            Upcoming live events, new music, merchandise, and so much more directly to your inbox. Sign up now!
          </p>

          <form className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">* Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">City</label>
                <input 
                  type="text" 
                  placeholder="Your Location" 
                  className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">* Email</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Phone</label>
                <div className="flex border border-white/20 focus-within:border-white transition-colors">
                  <div className="flex items-center px-4 border-r border-white/20">
                    <span className="text-lg">🇺🇸</span>
                    <ChevronDown size={14} className="ml-2 text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Contact Number" 
                    className="w-full bg-transparent p-4 text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">What are you most interested in?</label>
              <div className="flex flex-wrap gap-6">
                {/* 'Tour Dates' removed temporarily */}
                {['Music', 'Artist Merch', 'News & Updates'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-5 h-5 border border-white/40 group-hover:border-white flex items-center justify-center transition-colors"></div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <p className="text-[10px] text-gray-500 leading-tight mb-6">
                By submitting this form and signing up for texts, you consent to receive marketing text messages from Michael Manhertz Music at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Unsubscribe at any time by replying STOP.
              </p>
              <button type="button" className="w-full bg-white text-black font-bold uppercase tracking-widest py-5 hover:bg-gray-200 transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {}
      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center opacity-50 grayscale hover:opacity-100 transition-opacity">
            <img src="./logo.jpeg" alt="Michael Manhertz Logo" className="h-12 md:h-20 w-auto object-contain" />
          </div>
          
          {/* Custom SVGs for Social Icons replacing Lucide React Brand Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          
          <div className="text-xs text-gray-500 uppercase tracking-widest flex space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;