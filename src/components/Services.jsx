
import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Zap, Shield, Star, Heart, Award } from 'lucide-react';

const services = [
  { icon: Smile, title: "Advanced Smile Design", description: "Utilizing DSD, intraoral scanning, and facial analysis to craft balanced, natural smiles you can preview before treatment." },
  { icon: Zap, title: "Precision Dental Implants", description: "From single-tooth implants to All-on-4, using guided surgery and CAD/CAM for seamless, comfortable results." },
  { icon: Shield, title: "Full-Mouth Rehabilitation", description: "Restoring complete oral architecture by correcting extensive wear, bite collapse, and functional disharmony." },
  { icon: Star, title: "Aesthetic Veneers & Laminates", description: "Ultra-thin, minimally invasive porcelain solutions to enhance symmetry and deliver long-lasting beauty." },
  { icon: Heart, title: "TMJ & Occlusal Therapy", description: "Expert diagnosis and custom splint therapy to relieve TMJ discomfort and protect long-term oral health." },
  { icon: Award, title: "Maxillofacial Prosthetics", description: "A blend of technical skill and compassionate care to restore facial structures lost to trauma or surgery." }
];

const Services = () => {
  const scrollToContact = (e) => {
     e.preventDefault();
     const cta = document.querySelector('.py-24');
     if (cta) cta.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Signature Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining advanced technology with artistic precision for exceptional results that redefine your smile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 text-center flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-teal-500/20 flex-shrink-0">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
               <a href="https://wa.me/918882576579" target="_blank" rel="noopener noreferrer" className="mt-6 text-teal-400 font-semibold hover:text-teal-300 transition-colors">Learn More &rarr;</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
