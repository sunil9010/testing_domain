
import React from 'react';
import { Smile, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
    const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-background/50 border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-foreground">Dr. Yash Madaan</span>
                <p className="text-sm text-muted-foreground">BDS, MDS Prosthodontist</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Redefining smiles in Delhi NCR with precision, artistry, and compassionate care.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-semibold text-lg text-foreground">Quick Links</span>
            <div className="space-y-2">
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="block text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#precision" onClick={(e) => scrollToSection(e, '#precision')} className="block text-muted-foreground hover:text-foreground transition-colors">Precision</a>
              <a href="#philosophy" onClick={(e) => scrollToSection(e, '#philosophy')} className="block text-muted-foreground hover:text-foreground transition-colors">Philosophy</a>
            </div>
          </div>

          <div className="space-y-4">
            <span className="font-semibold text-lg text-foreground">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-muted-foreground">Delhi NCR, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-muted-foreground">+91 888-257-6579</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a
                  href="https://wa.me/918882576579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center space-y-4">
           <p className="text-muted-foreground">
            © {new Date().getFullYear()} Dr. Yash Madaan. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Website designed and developed by <a href="https://arogyalens.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-400 hover:text-teal-300 transition-colors">ArogyaLens.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
