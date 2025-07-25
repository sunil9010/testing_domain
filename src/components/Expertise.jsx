import React from 'react';
import { motion } from 'framer-motion';

const expertiseAreas = [
  "Crowns & Bridges",
  "Veneers & Laminates",
  "Implant-Supported Restorations",
  "Full-Mouth Reconstruction",
  "Removable & Fixed Dentures",
  "Maxillofacial Prosthetics",
];

const Expertise = ({ onFeatureClick }) => {
  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Prosthodontic <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Dr. Madaan's passion for innovation is reflected in his academic achievements and his dedication to integrating AI, digital workflows, and biomimetic materials into modern prosthodontics. His expertise covers the full spectrum of smile restoration.
            </p>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-x-8 gap-y-4"
            >
              {expertiseAreas.map((area) => (
                <motion.li key={area} variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <span className="text-muted-foreground">{area}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                alt="A display of precision dental tools and models"
                className="w-full rounded-3xl shadow-2xl shadow-teal-900/50"
                src="images/Ai.svg"
              />
            </div>
             <div className="absolute -top-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-teal-500/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;