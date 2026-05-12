"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import { 
  Users, MapPin, Target, Briefcase, TrendingUp, 
  DollarSign, ShieldCheck, CheckCircle2, Star,
  Utensils, Wine, Music, Trophy
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area 
} from 'recharts';

// Mock data for charts
const financialData = [
  { month: 'Year 1', revenue: 400, profit: 120 },
  { month: 'Year 2', revenue: 600, profit: 240 },
  { month: 'Year 3', revenue: 900, profit: 450 },
  { month: 'Year 4', revenue: 1300, profit: 700 },
  { month: 'Year 5', revenue: 1800, profit: 1100 },
];

const marketShare = [
  { name: 'Dining & Drinks', value: 45 },
  { name: 'Nightlife', value: 30 },
  { name: 'VIP', value: 15 },
  { name: 'Events', value: 10 },
];

export default function Home() {
  return (
    <main className="bg-luxury-black text-white">
      <Navbar />
      <Hero />

      {/* 1. Executive Summary */}
      <Section id="executive-summary" title="Executive Summary" subtitle="The Vision">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              BlackWoods Bar & Grill is a premium modern dining and nightlife destination located on East Joshua Road, 
              designed to deliver a unique blend of luxury atmosphere, quality food, signature beverages, and live entertainment.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our vision is to create more than just a restaurant — we aim to build a social hotspot where customers can relax, 
              celebrate, network, and enjoy unforgettable experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Utensils, label: "Premium Grill" },
                { icon: Wine, label: "Signature Drinks" },
                { icon: Music, label: "Themed Nights" },
                { icon: Star, label: "VIP Service" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 flex items-center space-x-3 border-l-2 border-l-gold">
                  <item.icon className="text-gold w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden gold-border">
            <Image src="/cocktail.png" alt="Signature Drinks" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </Section>

      {/* 2. Meet The Team */}
      <Section id="team" title="Leadership" subtitle="The Excellence Behind The Brand" className="bg-luxury-gray/30">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Duffii Marcos", role: "Owner & Primary Investor", bio: "Leadership & Brand Vision", img: "/team_owner.jpg" },
            { name: "Tejas Joshi", role: "Co-Owner", bio: "Operations & Event Management", img: "/team_coowner.jpg" },
            { name: "Kai Gill", role: "Manager", bio: "Daily Operations & Inventory", img: "/team_manager.jpg" },
            { name: "Gopal Haldar", role: "Head Chef", bio: "Menu & Food Quality Control", img: "/team_chef.jpg" },
          ].map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 text-center group transition-all duration-300 hover:border-gold/50"
            >
              <div className="w-32 h-40 relative mx-auto mb-6 overflow-hidden rounded-lg border-2 border-gold/20 shadow-2xl group-hover:border-gold/50 transition-all duration-500 bg-black">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top"
                  sizes="128px"
                  onError={(e) => {
                    (e.target as any).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <Users className="text-gold w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-cinzel font-bold text-gold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Business Location */}
      <Section id="location" title="The Destination" subtitle="Prime Real Estate">
        <div className="glass-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-2xl font-cinzel font-bold mb-2">East Joshua Road</h3>
                  <p className="text-gray-400">Strategic placement for high visibility and premium traffic.</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "High Customer Traffic",
                  "Excellent Nightlife Potential",
                  "Nearby Residential & Commercial Hubs",
                  "Easy Accessibility",
                ].map((point, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="text-gold w-5 h-5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[400px] relative">
              <Image src="/ext_close.jpg" alt="Location Exterior" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Aims & Objectives */}
      <Section id="objectives" title="Strategy" subtitle="Aims & Objectives" className="bg-luxury-gray/30">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 p-8 glass-card border-t-4 border-t-gold">
            <h3 className="text-2xl font-cinzel font-bold flex items-center">
              <Target className="mr-3 text-gold" /> Short-Term Goals
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>• Successful Brand Launch</li>
              <li>• Strong Local Recognition</li>
              <li>• Consistent Customer Flow</li>
              <li>• Established Loyal Base</li>
            </ul>
          </div>
          <div className="space-y-6 p-8 glass-card border-t-4 border-t-gold">
            <h3 className="text-2xl font-cinzel font-bold flex items-center">
              <TrendingUp className="mr-3 text-gold" /> Long-Term Vision
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>• Franchise Expansion</li>
              <li>• Major Social Events Hosting</li>
              <li>• Region's Top Recognized Brand</li>
              <li>• Global Digital Presence</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. Market Analysis */}
      <Section id="market" title="Market Landscape" subtitle="Industry Analysis">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-[300px] glass-card p-6">
            <h4 className="text-center text-gold mb-6 uppercase tracking-widest text-xs">Target Segments</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketShare}>
                <XAxis dataKey="name" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121212', border: '1px solid #D4AF37' }}
                  itemStyle={{ color: '#D4AF37' }}
                />
                <Bar dataKey="value" fill="#D4AF37" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-cinzel font-bold">Competitive Edge</h3>
            <p className="text-gray-400 leading-relaxed">
              BlackWoods stands out through its modern luxury ambiance and high-quality grill menu. 
              Our target audience includes young professionals, corporate clients, and social influencers 
              seeking an elite dining experience.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Social Media', 'Influencers', 'Live Events', 'Loyalty Programs'].map(tag => (
                <span key={tag} className="px-4 py-2 border border-gold/30 text-gold text-xs rounded-full uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Operational Analysis */}
      <Section id="operations" title="Operational Analysis" subtitle="Efficiency & Structure" className="bg-luxury-gray/30">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden gold-border">
            <Image src="/interior_wide.jpg" alt="Operational View" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-cinzel font-bold">Daily Workflows</h3>
            <div className="space-y-4">
              {[
                "Food preparation and quality checks",
                "Bar management and beverage services",
                "Customer service handling",
                "Reservation management",
                "Inventory and supply monitoring",
                "Staff coordination and scheduling",
              ].map((op, i) => (
                <div key={i} className="flex items-center space-x-3 text-gray-400">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>{op}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 border-r-4 border-r-gold">
            <h3 className="text-2xl font-cinzel font-bold mb-6">Operational Strengths</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Briefcase className="text-gold w-5 h-5" />
                <span className="text-gray-300">Experienced management team</span>
              </li>
              <li className="flex items-center space-x-3">
                <Utensils className="text-gold w-5 h-5" />
                <span className="text-gray-300">Skilled kitchen staff</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="text-gold w-5 h-5" />
                <span className="text-gray-300">Premium atmosphere and interior design</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 7. Management Controls */}
      <Section id="management" title="Management Controls" subtitle="Accountability">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8">
            <ShieldCheck className="text-gold w-10 h-10 mb-6" />
            <h3 className="text-xl font-cinzel font-bold mb-4">Quality Control</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Hygiene inspections</li>
              <li>• Food quality standards</li>
              <li>• Customer satisfaction reviews</li>
              <li>• Safety compliance monitoring</li>
            </ul>
          </div>
          <div className="glass-card p-8">
            <TrendingUp className="text-gold w-10 h-10 mb-6" />
            <h3 className="text-xl font-cinzel font-bold mb-4">Performance</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Daily operational reporting</li>
              <li>• Inventory tracking</li>
              <li>• Employee performance reviews</li>
              <li>• Financial monitoring</li>
            </ul>
          </div>
          <div className="glass-card p-8">
            <Users className="text-gold w-10 h-10 mb-6" />
            <h3 className="text-xl font-cinzel font-bold mb-4">Leadership</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Clear communication</li>
              <li>• Strong accountability</li>
              <li>• Efficient teamwork</li>
              <li>• Professional decision-making</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. Financial Analysis */}
      <Section id="financials" title="Projections" subtitle="Financial Analysis" className="bg-luxury-gray/30">
        <div className="space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Initial Investment", value: 450, prefix: "$", suffix: "K+", icon: Briefcase },
              { label: "Stability Target", value: 12, prefix: "Month ", suffix: "", icon: ShieldCheck },
              { label: "Revenue Target", value: 25, prefix: "$", suffix: "M+", icon: DollarSign },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 border-b-2 border-b-gold flex flex-col items-center">
                <stat.icon className="text-gold w-8 h-8 mb-4" />
                <span className="text-gray-400 text-sm uppercase tracking-widest mb-2">{stat.label}</span>
                <span className="text-3xl font-cinzel font-bold text-white">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
              </div>
            ))}
          </div>
          
          <div className="h-[400px] glass-card p-8">
            <h4 className="text-center text-gold mb-8 uppercase tracking-widest text-xs">5-Year Growth Forecast</h4>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financialData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121212', border: '1px solid #D4AF37' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#D4AF37" fillOpacity={1} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="profit" stroke="#F9E498" fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>

      {/* 7. Conclusion */}
      <Section id="conclusion" className="relative pb-32">
        <div className="absolute inset-0 z-0">
          <Image src="/ext_wide.jpg" alt="Exterior Night" fill className="object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto">
          <Trophy className="text-gold w-16 h-16 mx-auto mb-8 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-cinzel font-bold">The Future of Hospitality</h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            BlackWoods Bar & Grill is designed to become a premium destination that combines exceptional dining, 
            luxury nightlife, and unforgettable customer experiences. We are committed to excellence, 
            customer satisfaction, and continuous business development.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="gold-border px-12 py-4 text-gold uppercase font-bold tracking-widest hover:bg-gold hover:text-black transition-all">
              Download PDF
            </button>
            <button className="bg-gold text-luxury-black px-12 py-4 uppercase font-bold tracking-widest hover:bg-white transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-gold/10 text-center text-gray-500 text-sm tracking-widest uppercase">
        &copy; 2026 BlackWoods Bar & Grill | Duffii Marcos corps
      </footer>
    </main>
  );
}
