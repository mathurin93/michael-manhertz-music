import React, { useState, useEffect } from 'react';
import { Menu, X, Play, ArrowUpRight, Music, MapPin, Calendar, Award, Newspaper, Disc } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tourDates = [
    { id: 1, city: "Toronto", event: "Worship Clinic", date: "July 18, 2026" },
    { id: 2, city: "Scarborough", event: "Live Worship", date: "September 5, 2026" },
    { id: 3, city: "Brampton", event: "Praise Night", date: "September 26, 2026" },
  ];

  const discography = [
    { id: 1, title: "Surrender", year: "2026", type: "Single" },
    { id: 2, title: "Able", year: "2025", type: "Single" },
    { id: 3, title: "Wanna Be Happy?", year: "2024", type: "Album" },
    { id: 4, title: "I Smile", year: "2022", type: "EP" },
  ];

  const features = [
    { id: 1, title: "Promises", artist: "Maverick City Music", year: "2025" },
    { id: 2, title: "Jireh", artist: "Elevation Worship", year: "2024" },
    { id: 3, title: "Wait On You", artist: "Chandler Moore", year: "2023" },
  ];

  const news = [
    { id: 1, date: "June 2026", title: "Headlining the Toronto Worship Clinic this Summer", category: "Live Event" },
    { id: 2, date: "May 2026", title: "New Single 'Surrender' Tops Gospel Charts", category: "Release" },
    { id: 3, date: "Feb 2026", title: "Featured on Maverick City Music's Upcoming Album", category: "Collaboration" },
  ];

  return (
    <div className="bg-[#0a0908] text-white min-h-screen font-serif selection:bg-[#d1b06b] selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-white/5 ${isScrolled ? 'bg-[#0a0908]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Desktop Left Links */}
          <div className="hidden lg:flex flex-1 items-center space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 font-sans">
            <a href="#music" className="hover:text-[#d1b06b] transition-colors">Music</a>
            <a href="#story" className="hover:text-[#d1b06b] transition-colors">Story</a>
            <a href="#gallery" className="hover:text-[#d1b06b] transition-colors">Gallery</a>
            <a href="#tour" className="hover:text-[#d1b06b] transition-colors">Tour</a>
          </div>

          {/* Logo Center */}
          <div className="flex-1 flex justify-start lg:justify-center">
            <a href="#" className="flex items-center">
              <img src="./logo.jpeg" alt="Michael Manhertz Logo" className="h-10 md:h-14 w-auto mix-blend-screen" />
            </a>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden lg:flex flex-1 justify-end items-center space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 font-sans">
            <a href="#news" className="hover:text-[#d1b06b] transition-colors">News</a>
            <a href="#awards" className="hover:text-[#d1b06b] transition-colors">Awards</a>
            <button className="bg-[#d1b06b] text-black px-6 py-3 hover:bg-white transition-colors">
              Booking
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex justify-end flex-1">
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
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d1b06b]">Gallery</a>
          <a href="#tour" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d1b06b]">Tour</a>
          <a href="#news" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d1b06b]">News</a>
          <button className="mt-8 border border-[#d1b06b] text-[#d1b06b] px-12 py-4 text-sm font-sans tracking-[0.2em]">
            Booking
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0908]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="./hero.jpeg" 
            alt="Michael Manhertz" 
            className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-70"
          />
        </div>
        
        {/* Editorial Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-[#0a0908]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0908]/50 via-transparent to-[#0a0908]/50"></div>

        <div className="relative z-10 flex flex-col items-center mt-32 w-full px-4">
          {/* Main Editorial Typography */}
          <h1 className="text-6xl sm:text-8xl md:text-[11rem] leading-[0.85] font-serif text-white tracking-tighter uppercase text-center drop-shadow-2xl mix-blend-overlay opacity-90">
            Michael<br />Manhertz
          </h1>
          <h1 className="absolute top-0 text-6xl sm:text-8xl md:text-[11rem] leading-[0.85] font-serif text-transparent tracking-tighter uppercase text-center" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>
            Michael<br />Manhertz
          </h1>
        </div>

        {/* Floating Top Left Badge */}
        <div className="absolute top-32 left-6 md:left-12 z-20 flex items-center space-x-3 text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#d1b06b]">
          <span className="w-1.5 h-1.5 bg-[#d1b06b] rounded-full"></span>
          <span>New Single "Surrender" • Out Now</span>
        </div>

        {/* Floating Bottom Stats */}
        <div className="absolute bottom-12 left-6 md:left-12 z-20 flex space-x-12 hidden md:flex">
          <div>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-gray-400 mb-1">Gospel Awards</p>
            <p className="text-4xl font-serif text-[#d1b06b]">3<span className="text-xl align-top">+</span></p>
          </div>
          <div>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-gray-400 mb-1">Est.</p>
            <p className="text-4xl font-serif text-[#d1b06b]">2015</p>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full border-y border-[#d1b06b]/20 bg-[#0d0c0b] py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center space-x-8 text-[#d1b06b] font-serif text-xl md:text-2xl italic">
          <span>•</span><span>Surrender</span><span>•</span><span>Able</span><span>•</span><span>I Smile</span><span>•</span><span>Wanna Be Happy?</span>
          <span>•</span><span>Surrender</span><span>•</span><span>Able</span><span>•</span><span>I Smile</span><span>•</span><span>Wanna Be Happy?</span>
          <span>•</span><span>Surrender</span><span>•</span><span>Able</span><span>•</span><span>I Smile</span><span>•</span><span>Wanna Be Happy?</span>
        </div>
      </div>

      {/* Latest Single / Editorial Layout */}
      <section id="story" className="py-24 md:py-32 max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="flex items-center text-[10px] font-sans tracking-[0.3em] uppercase text-gray-500 mb-16">
          <span className="w-12 h-px bg-[#d1b06b]/50 mr-4"></span>
          The Single
          <span className="ml-auto">Out Now - All Platforms</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Column - Faux Album Art */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 border border-[#d1b06b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-square bg-[#151413] border border-white/10 flex flex-col justify-center items-center p-8 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&q=80&w=800" alt="Single Artwork" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="relative z-10 text-center">
                <p className="text-[10px] font-sans tracking-[0.4em] uppercase mb-4 text-[#d1b06b]">Michael Manhertz</p>
                <h3 className="text-6xl md:text-7xl font-serif italic text-white drop-shadow-lg">Surrender</h3>
              </div>
            </div>
          </div>

          {/* Right Column - Typography */}
          <div className="lg:col-span-7 lg:pl-12">
            <p className="text-[#d1b06b] text-[10px] font-bold font-sans tracking-[0.3em] uppercase mb-6">The Story</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-[1.1] mb-8 uppercase text-white/90">
              He is <span className="text-[#d1b06b] italic lowercase">able</span> to heal every breaking thing.
            </h2>
            <div className="flex items-start space-x-4 mb-12">
              <span className="text-6xl font-serif text-[#d1b06b] leading-none">M</span>
              <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base pt-2">
                ichael on the song: "Sometimes we get so caught up in what we're waiting on, that we forget to thank Him for what He's already done. This song is a reminder that He's still providing, still healing, still making a way, no matter what it looks like."
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Apple Music', 'Spotify', 'Tidal', 'All Platforms'].map((platform, idx) => (
                <button key={platform} className={`py-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-colors ${idx === 3 ? 'bg-[#d1b06b] text-black hover:bg-white' : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'}`}>
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Dates Section */}
      <section id="tour" className="py-24 bg-[#0d0c0b] border-t border-white/5">
        <div className="max-w-[60rem] mx-auto px-6 md:px-12 text-center">
          <p className="text-[#d1b06b] text-[10px] font-bold font-sans tracking-[0.3em] uppercase mb-4">• Live In Concert •</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase mb-16 text-white/90">Upcoming <span className="text-[#d1b06b] italic lowercase">Dates</span></h2>
          
          <div className="space-y-0">
            {tourDates.map((tour) => (
              <div key={tour.id} className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-white/10 group hover:bg-white/5 transition-colors px-4 cursor-pointer">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <p className="text-[#d1b06b] font-serif text-lg md:text-xl italic">{tour.date}</p>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-tight">{tour.event}</h3>
                </div>
                <div className="text-center md:text-right flex items-center space-x-6">
                  <span className="text-gray-400 font-sans tracking-[0.2em] uppercase text-sm">{tour.city}</span>
                  <ArrowUpRight className="text-gray-600 group-hover:text-[#d1b06b] transition-colors hidden md:block" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <button className="bg-transparent border border-[#d1b06b] text-[#d1b06b] px-12 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#d1b06b] hover:text-black transition-colors">
              Book Michael
            </button>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto border-t border-white/5">
        <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase mb-16 text-center">The <span className="text-[#d1b06b] italic lowercase">Catalog</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Solo Discography */}
          <div>
            <h3 className="text-[#d1b06b] text-[12px] font-bold font-sans tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
              <Disc size={16} /> Solo Discography
            </h3>
            <div className="space-y-6">
              {discography.map((item) => (
                <div key={item.id} className="flex justify-between items-end border-b border-white/5 pb-4 hover:border-[#d1b06b]/30 transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif">{item.title}</h4>
                    <p className="text-gray-500 font-sans text-[10px] uppercase tracking-widest mt-1">{item.type}</p>
                  </div>
                  <span className="text-[#d1b06b] font-serif">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div>
            <h3 className="text-[#d1b06b] text-[12px] font-bold font-sans tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
              <Music size={16} /> Featured Collaborations
            </h3>
            <div className="space-y-6">
              {features.map((item) => (
                <div key={item.id} className="flex flex-col border-b border-white/5 pb-4 hover:border-[#d1b06b]/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-end">
                    <h4 className="text-xl md:text-2xl font-serif text-white">{item.title}</h4>
                    <span className="text-[#d1b06b] font-serif">{item.year}</span>
                  </div>
                  <p className="text-gray-400 font-sans text-sm mt-2">{item.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 border-t border-white/5 bg-[#0d0c0b]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase mb-4">
              Visual <span className="text-[#d1b06b] italic lowercase">Moments</span>
            </h2>
            <p className="text-[#d1b06b] text-[10px] font-bold font-sans tracking-[0.3em] uppercase">• Live & Editorial •</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-8 md:gap-16">
              <div className="relative group overflow-hidden border border-white/10 p-2 bg-[#151413]">
                <img 
                  src="./landscape-1.jpeg" 
                  alt="Gallery Landscape 1" 
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="relative group overflow-hidden border border-white/10 p-2 md:w-3/4 md:ml-auto bg-[#151413]">
                <img 
                  src="./long-1.jpeg" 
                  alt="Gallery Portrait 1" 
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
            
            {/* Column 2 - Offset visually on desktop */}
            <div className="flex flex-col gap-8 md:gap-16 md:pt-32">
              <div className="relative group overflow-hidden border border-white/10 p-2 md:w-3/4 bg-[#151413]">
                <img 
                  src="./long-2.jpeg" 
                  alt="Gallery Portrait 2" 
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="relative group overflow-hidden border border-white/10 p-2 bg-[#151413]">
                <img 
                  src="./landscape-2.jpeg" 
                  alt="Gallery Landscape 2" 
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Awards Section */}
      <section id="awards" className="py-24 bg-[#0a0908] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Latest News */}
          <div>
            <div className="flex items-center space-x-4 mb-12 border-b border-white/10 pb-4">
              <Newspaper className="text-[#d1b06b]" size={24} />
              <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-tight">Latest <span className="text-[#d1b06b] italic lowercase">News</span></h2>
            </div>
            
            <div className="space-y-8">
              {news.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-[#d1b06b] text-[10px] font-sans font-bold tracking-[0.2em] uppercase">{item.category}</span>
                    <span className="w-8 h-px bg-white/20"></span>
                    <span className="text-gray-500 font-sans text-[10px] uppercase tracking-wider">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-serif text-white/90 group-hover:text-[#d1b06b] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Awards */}
          <div>
            <div className="flex items-center space-x-4 mb-12 border-b border-white/10 pb-4">
              <Award className="text-[#d1b06b]" size={24} />
              <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-tight">Select <span className="text-[#d1b06b] italic lowercase">Honors</span></h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-[#0d0c0b] border border-white/5 p-8 text-center hover:border-[#d1b06b]/30 transition-colors">
                <p className="text-[#d1b06b] text-5xl md:text-6xl font-serif mb-2">3<span className="text-xl align-top">+</span></p>
                <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-gray-400">Gospel Music Awards</p>
              </div>
              <div className="bg-[#0d0c0b] border border-white/5 p-8 text-center hover:border-[#d1b06b]/30 transition-colors">
                <p className="text-[#d1b06b] text-5xl md:text-6xl font-serif mb-2">1M<span className="text-xl align-top">+</span></p>
                <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-gray-400">Streams Globally</p>
              </div>
              <div className="bg-[#0d0c0b] border border-white/5 p-8 text-center hover:border-[#d1b06b]/30 transition-colors">
                <p className="text-[#d1b06b] text-5xl md:text-6xl font-serif mb-2">2</p>
                <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-gray-400">Billboard Chart Entries</p>
              </div>
              <div className="bg-[#0d0c0b] border border-white/5 p-8 text-center hover:border-[#d1b06b]/30 transition-colors">
                <p className="text-[#d1b06b] text-5xl md:text-6xl font-serif mb-2">#1</p>
                <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-gray-400">Radio Single Add</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050404] py-16 border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-center justify-center space-y-10 text-center">
          
          <img src="./logo.jpeg" alt="Michael Manhertz Logo" className="h-16 w-auto mix-blend-screen opacity-80" />
          
          {/* Custom SVGs for Social Icons */}
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-[#d1b06b] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#d1b06b] transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#d1b06b] transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          
          <div className="text-[9px] font-sans text-gray-600 uppercase tracking-[0.3em] flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p>© 2026 Michael Manhertz Music</p>
            <span className="hidden md:inline">•</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;