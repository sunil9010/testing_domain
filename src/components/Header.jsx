
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Precision', href: '#precision' },
    { name: 'Contact', href: 'https://wa.me/918882576579' },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    setIsOpen(false);
  };
  
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between bg-background/30 backdrop-blur-lg border border-border/30 rounded-full px-4 sm:px-6 py-3">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Smile className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-base sm:text-lg text-foreground">Dr. Yash Madaan</h2>
              </div>
            </a>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#precision" onClick={(e) => scrollToSection(e, '#precision')} className="text-muted-foreground hover:text-foreground transition-colors">Precision</a>
            </nav>

            <a
              href="https://wa.me/8882576579"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-background bg-secondary rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={16} />
              Consult Now
            </a>
            
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2 -mr-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-24 left-4 right-4 z-40 md:hidden bg-background/80 backdrop-blur-lg border border-border/30 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col items-center p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="w-full text-center py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
