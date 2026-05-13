"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Wine, ChevronRight, Star, Clock, Flame } from "lucide-react";
import Image from "next/image";

const foodMenu = [
  {
    category: "Pasta",
    description: "Al dente perfection with house-made sauces.",
    image: "/steak.png", // Using steak as a placeholder for food
    items: [
      { name: "Red Sauce Pasta", price: "$18", desc: "Tangy tomato base with fresh basil and herbs." },
      { name: "White Sauce Pasta", price: "$20", desc: "Creamy béchamel with parmesan and black pepper." },
      { name: "Brown Sauce Pasta", price: "$22", desc: "Savory demi-glace with roasted mushrooms." },
    ]
  },
  {
    category: "Wraps",
    description: "Hand-rolled luxury in every bite.",
    image: "/hero.png",
    items: [
      { name: "Mexican Paneer Wrap", price: "$16", desc: "Spiced paneer with salsa and crunchy veggies." },
      { name: "Veg Kabab Wrap", price: "$15", desc: "Traditional seekh kabab with mint chutney." },
      { name: "Chicken Grill Wrap", price: "$18", desc: "Succulent grilled chicken with garlic aioli." },
    ]
  },
  {
    category: "Sandwiches",
    description: "Toasted to perfection with premium fillings.",
    image: "/interior_wide.jpg",
    items: [
      { name: "Potato Sandwich", price: "$12", desc: "Spiced mash with green chutney." },
      { name: "Cheese Corn Sandwich", price: "$14", desc: "Sweet corn and melty cheddar." },
      { name: "Korma Sandwich", price: "$16", desc: "Rich korma gravy with paneer cubes." },
      { name: "Chicken Sandwich", price: "$18", desc: "Classic shredded chicken with mayo." },
      { name: "Chicken Grill Sandwich", price: "$20", desc: "Triple-decker with grilled breast and veggies." },
    ]
  },
  {
    category: "Burgers",
    description: "Gourmet patties on toasted brioche buns.",
    image: "/ext_close.jpg",
    items: [
      { name: "Veg Burger", price: "$14", desc: "Crispy veg patty with house sauce." },
      { name: "Double Dekker Veg Burger", price: "$18", desc: "Two patties, extra cheese, extra luxury." },
      { name: "Chicken Burger", price: "$18", desc: "Flame-grilled chicken with lettuce and tomato." },
      { name: "Chicken Cheese Burger", price: "$20", desc: "Gooey molten cheese center." },
      { name: "Double Dekker Chicken Burger", price: "$24", desc: "The ultimate hunger killer." },
    ]
  },
  {
    category: "Mains",
    description: "Hearty signature plates for the elite.",
    image: "/steak.png",
    items: [
      { name: "Chicken Gravy Bowl", price: "$22", desc: "Slow-cooked chicken in aromatic gravy." },
      { name: "Chicken Steak", price: "$28", desc: "Tenderized breast with mushroom sauce." },
      { name: "Chicken Barbeque", price: "$26", desc: "Smoky BBQ glaze with grilled sides." },
      { name: "Vegetable Gravy Bowl with Nachos", price: "$20", desc: "Fusion comfort food at its best." },
    ]
  }
];

const drinksMenu = [
  { name: "Old Fashioned", price: "$14", desc: "Bourbon, sugar, bitters, citrus." },
  { name: "Negroni", price: "$15", desc: "Gin, Campari, Sweet Vermouth." },
  { name: "Daiquiri", price: "$13", desc: "White Rum, lime, simple syrup." },
  { name: "Dry Martini", price: "$16", desc: "Gin or Vodka, Dry Vermouth, olive." },
  { name: "Margarita", price: "$14", desc: "Tequila, Cointreau, lime juice." },
  { name: "Espresso Martini", price: "$16", desc: "Vodka, Espresso, Kahlua." },
  { name: "Whiskey Sour", price: "$15", desc: "Bourbon, lemon, egg white, bitters." },
  { name: "Manhattan", price: "$15", desc: "Rye Whiskey, Vermouth, Angostura." },
  { name: "Aperol Spritz", price: "$12", desc: "Aperol, Prosecco, soda, orange." },
  { name: "Mojito", price: "$13", desc: "White Rum, mint, lime, soda." },
  { name: "Bloody Mary", price: "$14", desc: "Vodka, tomato juice, spices." },
  { name: "Gimlet", price: "$13", desc: "Gin, lime cordial, fresh lime." },
  { name: "Moscow Mule", price: "$14", desc: "Vodka, ginger beer, lime." },
  { name: "Penicillin", price: "$16", desc: "Scotch, ginger, honey, lemon, Islay float." },
  { name: "Dark 'n' Stormy", price: "$14", desc: "Gosling's Black Seal Rum, ginger beer." },
  { name: "Corpse Reviver", price: "$15", desc: "Gin, Lillet Blanc, Cointreau, Absinthe." }
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <main className="bg-luxury-black min-h-screen text-white pb-20">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cocktail.png" alt="Menu Header" fill className="object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
        </div>
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-cinzel font-bold gold-gradient-text uppercase tracking-tighter">
              The Menu
            </h1>
            <div className="w-24 h-[2px] bg-gold mx-auto my-6" />
            <p className="text-gray-400 tracking-[0.4em] uppercase text-sm">Experience the Art of Taste</p>
          </motion.div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center space-x-4 mb-16 -mt-8 relative z-20">
        {["food", "drinks"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-12 py-4 font-cinzel font-bold uppercase tracking-widest transition-all duration-500 border-2 ${
              activeTab === tab 
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
                <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-[500px] gold-border rounded-2xl overflow-hidden group ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image src={cat.image} alt={cat.category} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <h2 className="text-5xl font-cinzel font-bold text-white mb-2">{cat.category}</h2>
                      <p className="text-gold tracking-widest text-xs uppercase">{cat.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {cat.items.map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 10 }}
                        className="group cursor-default"
                      >
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="text-xl font-cinzel font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                        </div>
                        <p className="text-gray-500 text-sm italic font-poppins">{item.desc}</p>
                      </motion.div>
                    ))}
                    
                    <div className="pt-8 flex space-x-6">
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
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-12"
            >
              {drinksMenu.map((drink, idx) => (
                <div key={idx} className="glass-card p-8 border-l-4 border-l-gold group hover:bg-gold/5 transition-all">
                  <div className="flex justify-start items-baseline mb-4">
                    <h3 className="text-2xl font-cinzel font-bold text-white group-hover:text-gold transition-colors">{drink.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{drink.desc}</p>
                  <div className="mt-4 flex items-center text-gold/30 group-hover:text-gold transition-colors">
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
        &copy; 2026 BlackWoods Bar & Grill | Duffii Marcos corps
      </footer>
    </main>
  );
}
