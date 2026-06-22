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
      <Section id="executive-summary" title="Introduction" subtitle="The Vision">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hey, this is Kai Gill & Team, and we are applying for the proposal of Soochi, a premier Japanese sushi restaurant nestled at the end of Del Perro Pier, Los Santos.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We want this food business because we have a passion for preparing different types of cuisines. We have extensive experience in seafood dishes, which is why we are highly interested in putting forward a proposal for Soochi. We feel like it will be the perfect place to serve great-tasting seafood with exquisite Japanese-style cuisine. We believe our passion and experience will help create a unique dining experience, and we would love the opportunity to bring that vision to Soochi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8">
              {[
                { icon: Utensils, label: "Fresh Sushi & Sashimi" },
                { icon: Wine, label: "Premium Sake Bar" },
                { icon: Star, label: "Waterfront Sea View" },
                { icon: Trophy, label: "Omakase Experience" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 flex items-center space-x-3 border-l-2 border-l-gold">
                  <item.icon className="text-gold w-5 h-5 shrink-0" />
                  <span className="text-xs md:text-sm uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden gold-border">
            <Image src="/ramen.png" alt="Soochi Ramen" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </Section>

      {/* 2. Meet The Team */}
      <Section id="team" title="Leadership" subtitle="The Excellence Behind The Brand" className="bg-luxury-gray/30">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Kai Gill", role: "Owner", bio: "Phone: 999 999 9991", img: "/kai_gill.jpg" },
            { name: "Nakul Singh", role: "Co-Owner", bio: "Phone: 417 257 9460", img: "/nakul.png" },
            { name: "Shivam Gupta", role: "Head-Chef", bio: "Phone: 426 509 9510", img: "/shivam.png" },
            { name: "Lucifer Singh", role: "Management", bio: "Phone: 919 999 9999", img: "/Lucifer.png" },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 text-center group transition-all duration-300 hover:border-gold/50"
            >
              <div className="w-40 h-48 relative mx-auto mb-6 overflow-hidden rounded-lg border-2 border-gold/20 shadow-2xl group-hover:border-gold/50 transition-all duration-500 bg-black">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="256px"
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
            <div className="p-6 md:p-12 space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-cinzel font-bold mb-2">Del Perro Pier, Los Santos</h3>
                  <p className="text-gray-400 text-sm md:text-base">An unforgettable waterfront dining experience right on the shoreline.</p>
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
            <div className="h-[250px] md:h-[400px] relative">
              <Image src="/soochiexp_close.jpg" alt="Location Exterior" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Aims & Objectives / Vision */}
      <Section id="objectives" title="Vision" subtitle="Our Commitment" className="bg-luxury-gray/30">
        <div className="glass-card p-6 md:p-12 border-t-4 border-t-gold text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
          <Target className="mx-auto text-gold w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" />
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Our vision for this business is to provide good quality, hygienic seafood so that everyone can enjoy both vegetarian and non-vegetarian meals in a Japanese style.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            We would also like to focus on customer engagement so that the dining experience is more peaceful and enjoyable. Since Soochi is located on the shoreline, customers will be able to enjoy their meals with a beautiful sea view.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            We also have plans to organize events that can bring the whole city closer together. Our main focus will be on serving good-quality food at affordable prices while creating a welcoming and memorable dining experience for everyone.
          </p>
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
              Soochi stands out through its authentic Japanese style cuisine, hygienic seafood, and stunning waterfront views.
              Our target audience includes locals, tourists, and anyone seeking a peaceful and affordable yet high-quality dining experience.
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
            <Image src="/soochi_interior_wide.jpg" alt="Operational View" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-cinzel font-bold">Daily Workflows</h3>
            <div className="space-y-4">
              {[
                "Fresh sushi & sashimi preparation with daily ingredient checks",
                "Sake and beverage & service",
                "Waterfront table reservations & guest experience management",
                "Strict seafood cold-chain and hygiene compliance",
                "Inventory of fresh seafood, produce, and Japanese imports",
                "Kitchen and front-of-house staff coordination & scheduling",
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
                <span className="text-gray-300">Experienced restaurant management team with seafood expertise</span>
              </li>
              <li className="flex items-center space-x-3">
                <Utensils className="text-gold w-5 h-5" />
                <span className="text-gray-300">Skilled Japanese cuisine chefs and sushi masters</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="text-gold w-5 h-5" />
                <span className="text-gray-300">Unique waterfront location on Del Perro Pier</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="text-gold w-5 h-5" />
                <span className="text-gray-300">High foot traffic from pier tourism and sea-view dining demand</span>
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
              { label: "Initial Investment", value: 1.2, prefix: "$", suffix: "M", icon: Briefcase },
              { label: "Stability Target", value: 12, prefix: "Month ", suffix: "", icon: ShieldCheck },
              { label: "Revenue Target", value: 30, prefix: "$", suffix: "M+", icon: DollarSign },
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
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
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
          <Image src="/soochi(2).jpg" alt="Exterior Night" fill className="object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent" />
        </div>

        <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto">
          <Trophy className="text-gold w-16 h-16 mx-auto mb-8 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-cinzel font-bold">The Future of Hospitality</h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Soochi is designed to become a premier destination that combines exceptional Japanese cuisine,
            waterfront tranquility, and unforgettable customer experiences. We are committed to hygiene,
            quality, and continuous community engagement.
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
        &copy; 2026 Soochi | Kai Gill & Team
      </footer>
    </main>
  );
}
