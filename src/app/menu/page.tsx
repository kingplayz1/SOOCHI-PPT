"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Wine, ChevronRight, Star, Clock, Flame } from "lucide-react";
import Image from "next/image";

const foodMenu = [
  {
    category: "Sushi & Sashimi",
    description: "Fresh, premium cuts flown in daily.",
    image: "/maguro-tuna-sushi.png", // Keeping existing image paths as requested
    items: [
      { name: "Maguro (Tuna) Nigiri", price: "$12", desc: "Two pieces of premium tuna over vinegared rice." },
      { name: "Sake (Salmon) Sashimi", price: "$16", desc: "Five thick slices of fatty Atlantic salmon." },
      { name: "Omakase Platter", price: "$45", desc: "Chef's selection of 12 premium seasonal pieces." },
    ]
  },
  {
    category: "Signature Rolls",
    description: "Creative Maki crafted with precision.",
    image: "/Dragon-Roll-1-scaled.png",
    items: [
      { name: "Dragon Roll", price: "$18", desc: "Eel and cucumber topped with avocado and sweet tare sauce." },
      { name: "Spicy Tuna Crunch", price: "$15", desc: "Spicy minced tuna, tempura flakes, and spicy mayo." },
      { name: "Soochi Ocean Roll", price: "$22", desc: "Lobster tempura topped with seared scallop and black truffle." },
    ]
  },
  {
    category: "Appetizers",
    description: "Perfect beginnings to your waterfront meal.",
    image: "/Miso Soup.png",
    items: [
      { name: "Edamame", price: "$8", desc: "Steamed soybeans with Himalayan pink sea salt." },
      { name: "Shrimp Tempura", price: "$14", desc: "Five pieces of lightly battered tiger shrimp with tentsuyu dip." },
      { name: "Pork Gyoza", price: "$10", desc: "Pan-fried dumplings served with a soy-vinegar dipping sauce." },
      { name: "Miso Soup", price: "$6", desc: "Traditional broth with tofu, wakame, and scallions." },
      { name: "Agedashi Tofu", price: "$9", desc: "Deep-fried tofu in a savory dashi broth." },
    ]
  },
  {
    category: "Hot Mains",
    description: "Hearty Japanese classics from the kitchen.",
    image: "/Tonkotsu_ramen.png",
    items: [
      { name: "Chicken Teriyaki", price: "$24", desc: "Grilled chicken breast glazed in house-made teriyaki sauce." },
      { name: "Miso Black Cod", price: "$32", desc: "Alaskan black cod marinated in sweet Saikyo miso." },
      { name: "Tonkotsu Ramen", price: "$18", desc: "Rich pork bone broth, chashu, soft boiled egg, and wood ear mushrooms." },
      { name: "Wagyu Beef Donburi", price: "$35", desc: "A5 Wagyu slices over rice with an onsen egg." },
      { name: "Vegetable Udon", price: "$16", desc: "Thick wheat noodles in a light broth with seasonal vegetables." },
    ]
  },
  {
    category: "Desserts",
    description: "Sweet finishes to your dining experience.",
    image: "/Yuzu Cheesecake.png",
    items: [
      { name: "Matcha Mille Crepe", price: "$12", desc: "Layers of delicate crepes with green tea cream." },
      { name: "Mochi Ice Cream", price: "$8", desc: "Three assorted flavors of ice cream wrapped in sweet rice dough." },
      { name: "Yuzu Cheesecake", price: "$10", desc: "Light cheesecake infused with Japanese citrus." },
      { name: "Black Sesame Ice Cream", price: "$7", desc: "House-made rich and nutty ice cream." },
    ]
  }
];

const drinksMenu = [
  { name: "House Hot Sake", price: "$12", desc: "Traditional warm Junmai sake, perfect for pairing." },
  { name: "Dassai 45 Junmai Daiginjo", price: "$28", desc: "Premium chilled sake with notes of melon and peach." },
  { name: "Yamazaki 12yr Whisky", price: "$35", desc: "Neat or on the rocks, Japan's premier single malt." },
  { name: "Matcha Highball", price: "$16", desc: "Japanese whisky, soda water, and a splash of ceremonial matcha." },
  { name: "Plum Wine (Umeshu)", price: "$10", desc: "Sweet and tart Japanese plum wine served over ice." },
  { name: "Yuzu Margarita", price: "$15", desc: "Tequila, yuzu juice, and a shichimi salt rim." },
  { name: "Tokyo Mule", price: "$14", desc: "Vodka, fresh ginger, lime, and cucumber." },
  { name: "Sapporo Premium Draft", price: "$8", desc: "Crisp and refreshing Japanese lager." },
  { name: "Kyoto Old Fashioned", price: "$18", desc: "Japanese whisky, kuromitsu (black sugar), and bitters." },
  { name: "Sakura Spritz", price: "$14", desc: "Cherry blossom liqueur, prosecco, and club soda." },
  { name: "Lychee Martini", price: "$15", desc: "Vodka, fresh lychee puree, and vermouth." },
  { name: "Sencha Green Tea", price: "$6", desc: "Hot, premium loose-leaf Japanese green tea." },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <main className="bg-luxury-black min-h-screen text-white pb-20">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/maguro-tuna-sushi.png" alt="Menu Header" fill className="object-cover opacity-30 grayscale" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-cinzel font-bold gold-gradient-text uppercase tracking-tighter">
              The Menu
            </h1>
            <div className="w-16 md:w-24 h-[2px] bg-gold mx-auto my-4 md:my-6" />
            <p className="text-gray-400 tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm">Experience the Art of Taste</p>
          </motion.div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center space-x-3 mb-10 md:mb-16 -mt-6 md:-mt-8 relative z-20 px-4">
        {["food", "drinks"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 md:px-12 py-3 md:py-4 font-cinzel font-bold uppercase tracking-widest transition-all duration-500 border-2 text-sm md:text-base ${activeTab === tab
              ? "bg-gold text-luxury-black border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              : "bg-transparent text-gold border-gold/30 hover:border-gold"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeTab === "food" ? (
            <motion.div
              key="food"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-32"
            >
              {foodMenu.map((cat, idx) => (
                <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                  <div className={`relative h-[280px] sm:h-[380px] lg:h-[500px] gold-border rounded-2xl overflow-hidden group ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image src={cat.image} alt={cat.category} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                      <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-1 md:mb-2">{cat.category}</h2>
                      <p className="text-gold tracking-widest text-xs uppercase">{cat.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6 md:space-y-8">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 10 }}
                        className="group cursor-default border-b border-white/5 pb-4"
                      >
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-base md:text-xl font-cinzel font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                        </div>
                        <p className="text-gray-500 text-sm italic font-poppins">{item.desc}</p>
                      </motion.div>
                    ))}

                    <div className="pt-4 flex space-x-6">
                      <div className="flex items-center text-gold/60 text-xs uppercase tracking-widest">
                        <Flame className="w-4 h-4 mr-2" /> Signature
                      </div>
                      <div className="flex items-center text-gold/60 text-xs uppercase tracking-widest">
                        <Star className="w-4 h-4 mr-2" /> Top Rated
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="drinks"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-20 md:gap-y-12"
            >
              {drinksMenu.map((drink, idx) => (
                <div key={idx} className="glass-card p-5 md:p-8 border-l-4 border-l-gold group hover:bg-gold/5 transition-all">
                  <div className="flex justify-between items-baseline mb-2 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-cinzel font-bold text-white group-hover:text-gold transition-colors">{drink.name}</h3>
                    <span className="text-gold font-bold text-sm ml-2">{drink.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{drink.desc}</p>
                  <div className="mt-3 flex items-center text-gold/30 group-hover:text-gold transition-colors">
                    <Wine className="w-4 h-4 mr-2" />
                    <span className="text-[10px] uppercase tracking-tighter">Premium Selection</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="mt-32 py-12 border-t border-gold/10 text-center text-gray-500 text-sm tracking-widest uppercase">
        &copy; 2026 Soochi | Kai Gill & Team
      </footer>
    </main>
  );
}
