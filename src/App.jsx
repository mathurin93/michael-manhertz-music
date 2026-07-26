import React, { useState, useEffect } from 'react';
import { Menu, X, Play, ArrowUpRight, Music, MapPin, Calendar, Award, Newspaper, Disc, Mic2, Users, BookOpen } from "lucide-react";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMusicTab, setActiveMusicTab] = useState('discography');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tourDates = [
    { id: 1, city: "Toronto, ON", venue: "Worship Clinic", date: "July 18, 2026", time: "TBA" },
    { id: 2, city: "Scarborough, ON", venue: "Live Event", date: "September 5, 2026", time: "TBA" },
    { id: 3, city: "Brampton, ON", venue: "Live Worship", date: "September 26, 2026", time: "TBA" },
  ];

  const discography = [
    { id: 1, year: "2025", title: "Solid Rock Medley (feat. Kimberly Adé)", type: "Single • Winner: 2026 Canadian Gospel Song of the Year" },
    { id: 2, year: "2022", title: "The Unashamed Project", type: "13-Track Live Album" },
    { id: 3, year: "2022", title: "Bless The Lord (feat. Vanessa Brown)", type: "Single / Live Worship" },
    { id: 4, year: "2021", title: "Deeper (feat. Joshua Ali & Ruth Dente)", type: "Single" },
    { id: 5, year: "2020", title: "Holy (feat. Daniel Ojo)", type: "Single" },
    { id: 6, year: "2020", title: "Take It All", type: "Single" },
  ];

  const collaborations = [
    { id: 1, year: "2024", title: "Ready to Receive", artist: "Morrissa Nicole", note: "Featured Vocalist (2025 Canadian Selah Music Awards Collab of the Year)" },
    { id: 2, year: "2024", title: "Release Your Power", artist: "Roxanne Robinson", note: "Featured Vocalist" },
    { id: 3, year: "2024", title: "Morning Time", artist: "I.O.Music", note: "Featured Vocalist" },
    { id: 4, year: "2024", title: "Awesome God (Live)", artist: "Kevin Adams & Voices of Praise", note: "Featured Vocalist" },
    { id: 5, year: "2023", title: "Just Enough", artist: "Kevin Adams & Voices of Praise", note: "Featured Vocalist" },
    { id: 6, year: "2022", title: "Jehovah", artist: "Daniel Ojo", note: "Featured Vocalist" },
    { id: 7, year: "2021", title: "Jesus", artist: "Kimberly Adé", note: "Featured Vocalist (Covenant Awards Nominee)" },
  ];

  const awards = [
    { id: 1, year: "2026", org: "Canadian Selah Music Awards", title: "Canadian Gospel Song of the Year", project: "Solid Rock Medley", status: "WINNER" },
    { id: 2, year: "2026", org: "Canadian Selah Music Awards", title: "Canadian Collaboration Song of the Year", project: "Solid Rock Medley (feat. Kimberly Adé)", status: "Nominee" },
    { id: 3, year: "2026", org: "Canadian Selah Music Awards", title: "Gospel Artist of the Year", project: "Michael Manhertz", status: "Nominee" },
    { id: 4, year: "2026", org: "Canadian Selah Music Awards", title: "Caribbean Artist of the Year", project: "Michael Manhertz", status: "Nominee" },
    { id: 5, year: "2026", org: "Canadian Selah Music Awards", title: "Canadian Gospel Artist of the Year", project: "Michael Manhertz", status: "Nominee" },
    { id: 6, year: "2026", org: "Canadian Selah Music Awards", title: "Canadian Male Artist of the Year", project: "Michael Manhertz", status: "Nominee" },
    { id: 7, year: "2025", org: "Canadian Selah Music Awards", title: "Collaboration Song of the Year", project: "Ready to Receive", status: "WINNER" },
    { id: 8, year: "2023", org: "Covenant Awards", title: "Gospel Artist & Song of the Year", project: "Michael Manhertz / Fresh Anointing", status: "Nominee" },
    { id: 9, year: "2022", org: "Covenant Awards", title: "Musical Collaboration of the Year", project: "Jesus (with Kimberly Adé)", status: "Nominee" },
  ];

  const news = [
    { id: 1, date: "Oct 5, 2025", publication: "Jamaica Observer", title: "Michael Manhertz delivers Solid Rock Medley" },
    { id: 2, date: "Oct 7, 2025", publication: "Jamaica Star", title: "Michael Manhertz honours late father with soul-stirring medley" },
    { id: 3, date: "Sep 3, 2024", publication: "Never for Nothing", title: "Fresh Anointing / Bless the Lord Review (9/10)" },
    { id: 4, date: "2024", publication: "CCM Magazine", title: "Morrissa Nicole Celebrates Unity With New Single" },
  ];

  return (
    <div className="bg-[#0a0908] text-[#f4f1eb] min-h-screen font-sans selection:bg-[#d1b06b] selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-white/5 ${isScrolled ? 'bg-[#0a0908]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo (Using mix-blend-screen in case the PNG has dark elements) */}
          <div className="flex-1 flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="./logo.png" 
                alt="Michael Manhertz Music Logo" 
                className="h-12 md:h-16 w-auto object-contain mix-blend-screen opacity-90 hover:opacity-100 transition-opacity" 
              />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-10 text-xs font-semibold tracking-[0.2em] uppercase text-[#a39b8b]">
            <a href="#music" className="hover:text-[#d1b06b] transition-colors">Music</a>
            <a href="#story" className="hover:text-[#d1b06b] transition-colors">Story</a>
            <a href="#tour" className="hover:text-[#d1b06b] transition-colors">Tour</a>
            <a href="#coaching" className="hover:text-[#d1b06b] transition-colors">Coaching</a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
            <a href="#news" className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a39b8b] hover:text-[#d1b06b] transition-colors">News</a>
            <a href="https://pluggedinapparel.ca/" target="_blank" rel="noreferrer" className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a39b8b] hover:text-[#d1b06b] transition-colors">Merch</a>
            <button className="bg-[#d1b06b] text-[#0a0908] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#ebd5a6] transition-colors">
              Book Michael
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex justify-end flex-1">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#d1b06b]">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0908] z-40 flex flex-col justify-center items-center space-y-8 text-xl font-serif tracking-widest text-[#d1b06b]">
          <a href="#music" onClick={() => setIsMobileMenuOpen(false)}>Music</a>
          <a href="#story" onClick={() => setIsMobileMenuOpen(false)}>Story</a>
          <a href="#tour" onClick={() => setIsMobileMenuOpen(false)}>Tour Dates</a>
          <a href="#coaching" onClick={() => setIsMobileMenuOpen(false)}>Coaching</a>
          <a href="https://pluggedinapparel.ca/" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Shop Merch</a>
        </div>
      )}

      {/* Editorial Hero Section */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-black">
        {/* Editorial Background Image (object-top prevents face from cropping on mobile) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="./hero.jpeg" 
            alt="Michael Manhertz Live" 
            className="w-full h-full object-cover object-top md:object-center opacity-70"
          />
        </div>
        
        {/* Vignette & Gradients for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0908_100%)] opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/40 via-transparent to-[#0a0908] pointer-events-none"></div>

        {/* Floating Marquee Top */}
        <div className="absolute top-32 left-0 w-full overflow-hidden flex whitespace-nowrap opacity-60 pointer-events-none">
          <div className="animate-marquee flex space-x-12 text-[#d1b06b] text-xs font-semibold tracking-[0.3em] uppercase">
            <span>Winner • 2026 Canadian Gospel Song of the Year</span>
            <span>•</span>
            <span>GMA Canada Covenant Award Nominee</span>
            <span>•</span>
            <span>Winner • 2026 Canadian Gospel Song of the Year</span>
            <span>•</span>
            <span>GMA Canada Covenant Award Nominee</span>
          </div>
        </div>

        {/* Big Typography Cleaned Up */}
        <div className="relative z-10 flex flex-col items-center mt-20 px-4">
          <h1 className="text-6xl md:text-[9rem] leading-[0.85] font-serif text-[#f4f1eb] tracking-tighter text-center drop-shadow-2xl">
            MICHAEL<br/>MANHERTZ
          </h1>
          
          <p className="mt-8 text-xs md:text-sm tracking-[0.3em] uppercase text-[#d1b06b] text-center max-w-2xl px-4 font-semibold">
            Worship that carries testimony, culture and conviction.
          </p>

          <div className="mt-12 flex items-center">
            <a href="mailto:bookings@michaelmanhertzmusic.com" className="flex items-center space-x-3 border border-[#d1b06b]/50 text-[#d1b06b] px-10 py-4 font-semibold uppercase tracking-[0.2em] text-xs hover:bg-[#d1b06b] hover:text-[#0a0908] transition-all bg-[#0a0908]/40 backdrop-blur-sm">
              <span>Book For Ministry</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Stats / Credibility strip at bottom */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end z-20 hidden md:flex">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#a39b8b] uppercase mb-1">Latest Honour</p>
            <p className="text-4xl font-serif text-[#d1b06b]">CSMA<sup className="text-xl"> '26</sup></p>
          </div>
          <div className="text-right">
            <p className="text-[10px] tracking-[0.2em] text-[#a39b8b] uppercase mb-1">Spotify Streams</p>
            <p className="text-4xl font-serif text-[#d1b06b]">215K<sup className="text-xl">+</sup></p>
          </div>
        </div>
      </section>

      {/* Marquee Scroller */}
      <div className="border-y border-white/5 py-4 bg-[#0d0c0a] overflow-hidden flex whitespace-nowrap relative">
        <div className="animate-marquee flex space-x-12 items-center text-[#f4f1eb] font-serif text-2xl md:text-3xl italic opacity-80">
          <span>Solid Rock Medley</span><span className="text-[#d1b06b] text-sm not-italic">•</span>
          <span>The Unashamed Project</span><span className="text-[#d1b06b] text-sm not-italic">•</span>
          <span>Fresh Anointing</span><span className="text-[#d1b06b] text-sm not-italic">•</span>
          <span>Holy</span><span className="text-[#d1b06b] text-sm not-italic">•</span>
          <span>Deeper</span><span className="text-[#d1b06b] text-sm not-italic">•</span>
          <span>Take It All</span><span className="text-[#d1b06b] text-sm not-italic">•</span>
        </div>
      </div>

      {/* Story / Latest Single Section (Editorial Layout) */}
      <section id="story" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Album Art */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-[#d1b06b]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-square overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="./single artwork.jpeg" 
                alt="Solid Rock Medley Artwork" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
            </div>
            <p className="mt-4 text-[10px] text-[#a39b8b] uppercase tracking-[0.2em] font-serif italic">
              Released 2025 / Produced by Dylan Smith
            </p>
          </div>
          
          {/* Right: The Story */}
          <div className="lg:col-span-7">
            <p className="text-[#d1b06b] text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center">
              <span className="w-8 h-[1px] bg-[#d1b06b] mr-4"></span>
              Canadian Gospel Song of the Year
            </p>
            <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight mb-8">
              SOLID ROCK<br/><i className="text-[#a39b8b]">MEDLEY</i>
            </h2>
            <p className="text-lg md:text-xl text-[#f4f1eb] font-serif leading-relaxed mb-6 italic opacity-90">
              "A joyful, Caribbean-rooted Sunday-morning medley created in honour of Michael’s late father and the church songs that formed his faith."
            </p>
            <p className="text-sm text-[#a39b8b] leading-loose mb-10 max-w-2xl">
              Michael Manhertz is an award-winning Toronto gospel artist, worship leader, and artist-development coach. Raised in a Jamaican-Canadian environment, his sound blends Caribbean gospel, contemporary Christian music, and traditional Black gospel. His recording brings together traditional hymns and contemporary energy while declaring that Jesus remains the believer’s sure foundation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://open.spotify.com/artist/47g94YuzQ1YZ6CEeRc2cU2" target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-[#d1b06b] text-[#0a0908] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#ebd5a6] transition-colors">
                <Music size={16} />
                <span>Listen Everywhere</span>
              </a>
              <a href="https://www.youtube.com/c/michaelmanhertzmusic" target="_blank" rel="noreferrer" className="flex items-center space-x-2 border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-[#d1b06b] hover:text-[#d1b06b] transition-colors">
                <Play size={16} />
                <span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="py-24 bg-[#0d0c0a] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-2">MINISTRY <i className="text-[#d1b06b]">&</i> EVENTS</h2>
              <p className="text-sm text-[#a39b8b] uppercase tracking-[0.2em]">Upcoming Dates & Appearances</p>
            </div>
            <a href="mailto:bookings@michaelmanhertzmusic.com" className="text-xs font-bold text-[#d1b06b] uppercase tracking-[0.2em] border-b border-[#d1b06b] pb-1 hover:text-[#ebd5a6] transition-colors">
              Invite Michael →
            </a>
          </div>

          <div className="space-y-2">
            {tourDates.map((tour) => (
              <div key={tour.id} className="group border-b border-white/10 hover:border-[#d1b06b]/50 transition-colors py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer">
                <div className="flex-1">
                  <p className="text-[#d1b06b] text-sm font-semibold tracking-[0.2em] uppercase mb-2">{tour.date}</p>
                  <h3 className="text-2xl font-serif text-[#f4f1eb] group-hover:text-[#d1b06b] transition-colors">{tour.city}</h3>
                </div>
                <div className="flex-1 text-left md:text-right">
                  <p className="text-sm text-[#a39b8b] uppercase tracking-widest">{tour.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discography & Collaborations */}
      <section id="music" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-8">THE <i className="text-[#d1b06b]">CATALOGUE</i></h2>
          
          {/* Custom Tabs */}
          <div className="flex justify-center space-x-8 text-xs font-bold uppercase tracking-[0.2em]">
            <button 
              onClick={() => setActiveMusicTab('discography')}
              className={`pb-2 transition-colors ${activeMusicTab === 'discography' ? 'text-[#d1b06b] border-b border-[#d1b06b]' : 'text-[#a39b8b] hover:text-white'}`}
            >
              Discography
            </button>
            <button 
              onClick={() => setActiveMusicTab('collabs')}
              className={`pb-2 transition-colors ${activeMusicTab === 'collabs' ? 'text-[#d1b06b] border-b border-[#d1b06b]' : 'text-[#a39b8b] hover:text-white'}`}
            >
              Collaborations
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {activeMusicTab === 'discography' && discography.map((item) => (
            <div key={item.id} className="flex gap-6 items-center group">
              <div className="w-16 h-16 bg-[#161412] border border-white/5 flex flex-col items-center justify-center text-[#d1b06b] shrink-0">
                <Disc size={20} className="mb-1 opacity-50" />
                <span className="text-[10px] tracking-widest font-bold">{item.year}</span>
              </div>
              <div>
                <h3 className="text-lg font-serif mb-1 group-hover:text-[#d1b06b] transition-colors">{item.title}</h3>
                <p className="text-xs text-[#a39b8b] uppercase tracking-widest leading-relaxed">{item.type}</p>
              </div>
            </div>
          ))}

          {activeMusicTab === 'collabs' && collaborations.map((item) => (
            <div key={item.id} className="flex gap-6 items-center group">
              <div className="w-16 h-16 bg-[#161412] border border-white/5 flex flex-col items-center justify-center text-[#a39b8b] shrink-0">
                <Mic2 size={20} className="mb-1 opacity-50" />
                <span className="text-[10px] tracking-widest font-bold">{item.year}</span>
              </div>
              <div>
                <h3 className="text-lg font-serif mb-1 group-hover:text-[#d1b06b] transition-colors">{item.title}</h3>
                <p className="text-xs text-[#a39b8b] uppercase tracking-widest leading-relaxed">{item.artist} <br className="md:hidden"/> <span className="text-[#d1b06b]/80">• {item.note}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Photo Gallery (Responsive Heights) */}
      <section className="py-24 bg-[#0d0c0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
            {/* Image 1: Landscape (Wide) */}
            <div className="md:col-span-8 h-64 md:h-[350px] overflow-hidden group">
              <img src="./landscape-1.jpeg" alt="Michael Manhertz Performance" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
            {/* Image 2: Long (Tall portrait) */}
            <div className="md:col-span-4 h-[400px] md:h-[732px] md:row-span-2 overflow-hidden group">
              <img src="./long-1.jpeg" alt="Michael Manhertz Portrait" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
            {/* Image 3: Long (Tall portrait on left for row 2) */}
            <div className="md:col-span-4 h-[400px] md:h-[350px] overflow-hidden group">
              <img src="./long-2.jpeg" alt="Michael Manhertz Studio" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 object-top transition-all duration-700" />
            </div>
            {/* Image 4: Landscape (Wide bottom right) */}
            <div className="md:col-span-4 h-64 md:h-[350px] overflow-hidden group">
              <img src="./landscape-2.jpeg" alt="Michael Manhertz Ministry" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Coaching & Artist Development */}
      <section id="coaching" className="py-24 px-6 max-w-5xl mx-auto text-center border-b border-white/5">
        <BookOpen size={40} className="mx-auto text-[#d1b06b] mb-8" />
        <h2 className="text-[#d1b06b] text-xs font-bold tracking-[0.2em] uppercase mb-4">Christian Music Mentor</h2>
        <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">Build the voice, strategy and support system behind your calling.</h3>
        <p className="text-[#a39b8b] text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-10">
          Michael Manhertz serves as an artist-development coach, helping Christian artists, worship leaders, and creative teams move from uncertainty to a clear and sustainable plan. Gain practical guidance in vocal development, performance, release strategy, and team building.
        </p>
        <button className="border border-[#d1b06b] text-[#d1b06b] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#d1b06b] hover:text-[#0a0908] transition-colors">
          Book A Coaching Call
        </button>
      </section>

      {/* Awards & Press */}
      <section id="news" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Awards */}
          <div>
            <h2 className="text-3xl font-serif mb-10 flex items-center">
              <Award size={24} className="mr-4 text-[#d1b06b]" />
              HONOURS <i className="text-[#a39b8b] ml-2">& AWARDS</i>
            </h2>
            <div className="space-y-6">
              {awards.map((award) => (
                <div key={award.id} className="border-l-2 border-[#d1b06b]/30 pl-4 md:pl-6 pb-2">
                  <p className="text-[#d1b06b] text-xs font-bold tracking-widest uppercase mb-1">{award.year} {award.org}</p>
                  <h4 className="text-base md:text-lg font-serif text-[#f4f1eb] leading-snug">{award.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-[#a39b8b] tracking-wider uppercase mt-2">{award.project} • <span className={award.status === 'WINNER' ? 'text-white font-bold' : ''}>{award.status}</span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Press/News */}
          <div>
            <h2 className="text-3xl font-serif mb-10 flex items-center">
              <Newspaper size={24} className="mr-4 text-[#d1b06b]" />
              PRESS <i className="text-[#a39b8b] ml-2">& MEDIA</i>
            </h2>
            <div className="space-y-6">
              {news.map((item) => (
                <div key={item.id} className="border-l-2 border-white/10 hover:border-[#d1b06b]/50 transition-colors pl-4 md:pl-6 pb-2">
                  <p className="text-[#a39b8b] text-[10px] font-bold tracking-widest uppercase mb-1">{item.date} • {item.publication}</p>
                  <h4 className="text-base font-serif text-[#f4f1eb] leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Merch CTA */}
      <section className="bg-[#d1b06b] text-[#0a0908] py-20 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">Faith should be lived, spoken and worn.</h2>
        <p className="text-sm font-semibold tracking-widest uppercase opacity-80 mb-8 max-w-2xl mx-auto">
          Shop Plxgged In Apparel — modern Christian streetwear created to help believers carry conviction into everyday life.
        </p>
        <a href="https://pluggedinapparel.ca/" target="_blank" rel="noreferrer" className="inline-block bg-[#0a0908] text-[#d1b06b] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#161412] transition-colors">
          Shop Merch Store
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#050404] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src="./logo.png" alt="Michael Manhertz Logo" className="h-16 w-auto object-contain mix-blend-screen opacity-50 mb-6" />
            <p className="text-xs text-[#a39b8b] leading-loose max-w-sm">
              Award-winning Toronto gospel artist, worship leader, vocal arranger and artist-development coach. Bridging Caribbean-rooted praise, contemporary worship and traditional Black gospel.
            </p>
          </div>
          <div>
            <h4 className="text-[#d1b06b] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Contact & Booking</h4>
            <ul className="space-y-4 text-xs text-[#a39b8b] tracking-wider">
              <li><a href="mailto:bookings@michaelmanhertzmusic.com" className="hover:text-white transition-colors">bookings@michaelmanhertzmusic.com</a></li>
              <li><a href="mailto:press@michaelmanhertzmusic.com" className="hover:text-white transition-colors">press@michaelmanhertzmusic.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#d1b06b] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Connect</h4>
            <div className="flex space-x-5">
              
              {/* Spotify Icon */}
              <a href="https://open.spotify.com/artist/47g94YuzQ1YZ6CEeRc2cU2" target="_blank" rel="noreferrer" className="text-[#a39b8b] hover:text-[#d1b06b] transition-colors" aria-label="Spotify">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.56.3z"/></svg>
              </a>

              {/* Apple Music Icon */}
              <a href="https://music.apple.com/ca/artist/michael-manhertz/868153964" target="_blank" rel="noreferrer" className="text-[#a39b8b] hover:text-[#d1b06b] transition-colors" aria-label="Apple Music">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.328 14.88c-1.378 1.156-2.581.42-3.08.174-.462-.224-1.222-.445-1.956-.034-.905.508-1.488 1.627-1.488 2.68 0 .285.029.566.082.843C6.732 19.347 5 17.514 5 15.228 5 12.015 7.6 9.4 10.824 9.4c1.879 0 3.518.889 4.542 2.277-2.656.762-3.486 3.65-2.227 5.733a4.708 4.708 0 0 0 2.189 1.47z"/></svg>
              </a>

              {/* Instagram Icon */}
              <a href="https://www.instagram.com/michaelmanhertzmusic/" target="_blank" rel="noreferrer" className="text-[#a39b8b] hover:text-[#d1b06b] transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              
              {/* YouTube Icon */}
              <a href="https://www.youtube.com/c/michaelmanhertzmusic" target="_blank" rel="noreferrer" className="text-[#a39b8b] hover:text-[#d1b06b] transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-[#a39b8b] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Michael Manhertz Music. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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