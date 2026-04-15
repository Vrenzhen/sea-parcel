import React from 'react';
import { Ship, Package, Globe, ShieldCheck, Clock, CheckCircle2, TrendingUp, BarChart3, Navigation, ArrowRight } from 'lucide-react';

export default function SeaParcelPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      
      {/* NAVBAR */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Ship className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">Sea Parcel</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">SOLUTIONS</a>
          <a href="#" className="hover:text-white transition-colors">LOGISTICS</a>
          <a href="#" className="hover:text-white transition-colors">ANALYTICS</a>
          <a href="#" className="hover:text-white transition-colors">GLOBAL FLEET</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-400 hover:text-white">LOG IN</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
            GET STARTED
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 space-y-32">
        
        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#160E24] border border-purple-900/50 text-purple-400 text-xs font-semibold tracking-wider">
              NEW LATEST FEATURES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Sea Parcel.
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              A simple website for reliable sea freight shipping, allowing users to book shipments, check rates, and track deliveries easily.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
              More Info About Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Mockup Right Side */}
          <div className="relative">
             <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full"></div>
             <div className="relative bg-[#110B19] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Ocean Freight - Atlantic</h3>
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs">Active</span>
                </div>
                <div className="space-y-4 text-sm text-gray-400">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Logistics Fee</span> <span className="text-white">$1240.00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Port Handling</span> <span className="text-white">$180.00</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-semibold text-white">TOTAL</span> 
                    <span className="text-purple-400 font-bold">$1,420.00</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* ABOUT & MISSION SECTION */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About Sea Parcel</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sea Parcel is your reliable international shipping partner, specializing in ocean freight and delivery across 130 countries worldwide. Since 2008, we've been making global shipping accessible and affordable for everyone.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Our advanced tracking system provides real-time updates on your shipments, giving you complete visibility from pickup to delivery. We handle customs clearance, documentation, and last-mile delivery with expertise and care.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <div className="bg-[#160E24] border border-purple-900/30 p-8 rounded-2xl space-y-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                To make international shipping simple, affordable, and reliable for everyone. We bridge distances and connect people across borders with seamless parcel delivery services backed by cutting-edge technology.
              </p>
              <ul className="space-y-3">
                {['AFFORDABLE PRICING', 'SECURE HANDLING', 'FAST DELIVERY', 'CUSTOMER FIRST'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-purple-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Our Solutions</h2>
            <p className="text-gray-400 text-sm">Comprehensive shipping solutions tailored for businesses and individuals worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Package className="w-6 h-6 text-orange-400"/>, title: "E-Commerce Shipping", desc: "Streamlined logistics solutions for online businesses with automated tracking." },
              { icon: <Globe className="w-6 h-6 text-blue-400"/>, title: "Business Freight", desc: "For matter-grade ocean freight solutions with dedicated account management." },
              { icon: <Ship className="w-6 h-6 text-pink-400"/>, title: "Personal Parcels", desc: "Affordable international parcel delivery for individuals sending to family and friends." }
            ].map((sol, idx) => (
              <div key={idx} className="bg-[#160E24] border border-purple-900/30 p-6 rounded-2xl space-y-4 hover:border-purple-500/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#2a1b3d] rounded-xl flex items-center justify-center mb-4">
                  {sol.icon}
                </div>
                <h3 className="text-lg font-bold">{sol.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOGISTICS NETWORK SECTION */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Logistics Network</h2>
            <p className="text-gray-400 text-sm">Our global logistics infrastructure ensures your parcels reach their destination safely.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#160E24] border border-purple-900/30 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Port-to-Port Service</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center gap-3"><Navigation className="w-4 h-4 text-purple-500" /> 140 major ports worldwide</li>
                <li className="flex items-center gap-3"><Navigation className="w-4 h-4 text-purple-500" /> Direct shipping routes</li>
                <li className="flex items-center gap-3"><Navigation className="w-4 h-4 text-purple-500" /> Customs clearance support</li>
              </ul>
            </div>
            <div className="bg-[#160E24] border border-purple-900/30 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Door-to-Door Delivery</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-purple-500" /> End-to-end secure delivery</li>
                <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-purple-500" /> Real-time GPS tracking</li>
                <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-purple-500" /> Delivery time guarantees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* REAL-TIME ANALYTICS SECTION */}
        <section className="space-y-8">
           <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Real-Time Analytics</h2>
            <p className="text-gray-400 text-sm">Advanced tracking and analytics dashboard for complete shipment visibility.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "UPTIME", value: "99.9%" },
              { label: "LATENCY", value: "32ms" },
              { label: "API ENDPOINTS", value: "50+" },
              { label: "REQ / DAY", value: "1M+" }
            ].map((stat, idx) => (
               <div key={idx} className="bg-[#160E24] border border-purple-900/30 py-6 rounded-xl text-center">
                 <div className="text-purple-400 text-xs font-bold tracking-wider mb-2">{stat.label}</div>
                 <div className="text-3xl font-bold">{stat.value}</div>
               </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 mt-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            <span className="font-bold text-white mr-2">Sea Parcel</span>
            © 2026 Sea Parcel. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}