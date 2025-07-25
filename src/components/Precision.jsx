import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, Cpu, Printer, Palette } from 'lucide-react';

const technologies = [
  { icon: ScanLine, name: "Intraoral Scanners", description: "For precise, comfortable digital impressions." },
  { icon: Cpu, name: "CAD/CAM & AI", description: "AI-driven planning and in-house prosthetic design." },
  { icon: Printer, name: "3D Printing", description: "For surgical guides and accurate models." },
  { icon: Palette, name: "Digital Shade Matching", description: "Ensuring perfectly natural aesthetics." },
];

const Precision = () => {
  return (
    <section id="precision" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Future of Dentistry, <span className="gradient-text">Today</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Precision is central to our approach. We integrate cutting-edge tools for unmatched accuracy, comfort, and results.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                <tech.icon className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Precision;