import React from 'react';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Menu,
  Package,
  ExternalLink,
  BookOpen,
  User,
  Calendar,
  ChevronRight,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-950 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation - Minimal & Floating */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/70 backdrop-blur-xl z-50 border border-slate-200/50 rounded-2xl px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-950 rounded-md flex items-center justify-center">
            <Package className="text-white w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-bold tracking-tight">RPN More</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-500">
          <a href="#services" className="hover:text-slate-950 transition-colors">Ecosystem</a>
          <a href="#journal" className="hover:text-slate-950 transition-colors">Journal</a>
          <a href="#about" className="hover:text-slate-950 transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[13px] font-bold text-slate-950 px-4 py-2 hover:bg-slate-100 rounded-xl transition-all">
            Login
          </button>
          <button className="bg-slate-950 text-white px-5 py-2 rounded-xl text-[13px] font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-950/10 active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section - Split Layout (Recipe 11 inspired) */}
        <section className="min-h-screen flex flex-col lg:flex-row pt-24">
          <div className="lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[1px] bg-slate-300"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Professional Ecosystem</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-[112px] font-bold leading-[0.88] tracking-[-0.04em] mb-12"
            >
              Order <br />
              <span className="text-indigo-600">Restored.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed"
            >
              RPN More is the definitive platform for verified home-used goods, logistics, and professional quality assurance in Ghana.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <button className="group relative flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10">Launch Ecosystem</span>
                <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
              </button>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/pro${i}/100/100`} 
                    alt="Pro" 
                    className="w-10 h-10 rounded-full border-2 border-[#FDFCFB] object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#FDFCFB] bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                  +5k
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative bg-slate-100 overflow-hidden min-h-[500px] lg:min-h-screen">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src="https://picsum.photos/seed/rpn-hero/1200/1600" 
                alt="Modern Interior" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Bento Card in Hero */}
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-12 left-12 right-12 lg:right-auto lg:w-80 bg-white/80 backdrop-blur-2xl p-8 rounded-[32px] border border-white/50 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-white w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">Verified</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First.</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Every item in our ecosystem passes a 42-point inspection before listing.</p>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Services Section */}
        <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Built for the <br /> <span className="text-slate-400">Circular Economy.</span></h2>
              <p className="text-lg text-slate-500">A modular suite of services designed to make buying, selling, and moving home goods seamless.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">01</div>
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">02</div>
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">03</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Item 1: Marketplace (Large) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-8 bg-white border border-slate-100 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px] shadow-sm hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <ShoppingBag className="text-indigo-600 w-7 h-7 group-hover:text-white transition-colors" />
                  </div>
                  <ArrowUpRight className="text-slate-300 w-6 h-6 group-hover:text-slate-950 transition-colors" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Verified Marketplace</h3>
                <p className="text-slate-500 max-w-md leading-relaxed">The most secure platform for high-value home-used goods in Ghana. Direct owner contact, transparent pricing.</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <span className="px-4 py-2 bg-slate-50 rounded-full text-[11px] font-bold uppercase tracking-wider text-slate-400">Shop Goods</span>
                <span className="px-4 py-2 bg-slate-50 rounded-full text-[11px] font-bold uppercase tracking-wider text-slate-400">Sell Items</span>
              </div>
            </motion.div>

            {/* Bento Item 2: Inspection (Small) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-4 bg-indigo-600 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px] shadow-lg shadow-indigo-600/20 group"
            >
              <div className="flex justify-between items-start">
                <ShieldCheck className="text-white w-10 h-10" />
                <Plus className="text-indigo-300 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Quality <br /> Assurance</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">Professional on-site inspections for electronics and appliances.</p>
              </div>
              <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-all">
                Book Inspection
              </button>
            </motion.div>

            {/* Bento Item 3: Logistics (Medium) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-5 bg-slate-950 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px] group"
            >
              <div className="flex justify-between items-start">
                <Truck className="text-white w-10 h-10" />
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Logistics</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Moving</h3>
                <p className="text-slate-400 text-sm leading-relaxed">End-to-end delivery with real-time tracking and professional handling of delicate items.</p>
              </div>
              <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all cursor-pointer">
                Track Delivery <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Bento Item 4: Advisory (Medium) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px] group"
            >
              <div className="flex justify-between items-start">
                <div className="flex -space-x-2">
                  {[4, 5, 6].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-50 bg-slate-200"></div>
                  ))}
                </div>
                <Package className="text-slate-300 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Seller Advisory</h3>
                <p className="text-slate-500 max-w-sm leading-relaxed">Consultancy for bulk sellers and businesses looking to optimize their inventory turnover in the circular market.</p>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                Partner with us <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Journal Section - Horizontal Scroll Feel (Recipe 7 inspired) */}
        <section id="journal" className="py-32 bg-slate-950 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-xl">
                <div className="text-indigo-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-6">The Journal</div>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">Insights for the <br /> <span className="text-slate-600 italic">Modern Home.</span></h2>
              </div>
              <button className="text-sm font-bold border-b border-indigo-400 pb-1 hover:text-indigo-400 transition-colors">
                Read all articles
              </button>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-12 no-scrollbar snap-x">
            {[
              {
                title: "The Rise of Circular Living in Accra",
                tag: "Economy",
                author: "Kwesi Arthur",
                img: "https://picsum.photos/seed/journal1/800/1000"
              },
              {
                title: "How to Spot Quality in Used Appliances",
                tag: "Guide",
                author: "Sandra Mensah",
                img: "https://picsum.photos/seed/journal2/800/1000"
              },
              {
                title: "Sustainable Logistics: Moving Without Waste",
                tag: "Logistics",
                author: "Dr. Ben Osei",
                img: "https://picsum.photos/seed/journal3/800/1000"
              },
              {
                title: "Valuation Secrets for Luxury Furniture",
                tag: "Finance",
                author: "Ama Serwaa",
                img: "https://picsum.photos/seed/journal4/800/1000"
              }
            ].map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="flex-shrink-0 w-[300px] sm:w-[450px] snap-start group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <div className="w-6 h-6 rounded-full bg-slate-800"></div>
                  <span>By {post.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA - Minimalist */}
        <section className="py-48 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight mb-12">Ready to join the <br /> <span className="text-indigo-600">ecosystem?</span></h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95">
                Get Started Now
              </button>
              <button className="text-slate-500 font-bold hover:text-slate-950 transition-colors">
                Talk to an Expert
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer - Brutalist Minimal */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
            <div className="md:col-span-6">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center">
                  <Package className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">RPN More</span>
              </div>
              <p className="text-2xl text-slate-400 max-w-md leading-tight">
                Empowering the home-used goods economy with professional services and verified insights.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">Services</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Inspection</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Logistics</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Advisory</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">Social</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-100 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <p>© 2026 RPN More. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-950 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-950 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
