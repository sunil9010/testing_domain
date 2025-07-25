import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MessageSquare, ShieldCheck } from 'lucide-react';

const principles = [
  {
    icon: UserCheck,
    title: 'Personalized Philosophy',
    description: 'Every treatment begins with a comprehensive evaluation and transparent discussion, ensuring you are a fully informed and involved partner in your care.',
  },
  {
    icon: ShieldCheck,
    title: 'Restorations That Last',
    description: 'We use the highest quality, biocompatible materials to design restorations that deliver both exceptional durability and perfectly natural aesthetics.',
  },
  {
    icon: MessageSquare,
    title: 'More Than Replacing Teeth',
    description: "For us, prosthodontics is about restoring identity, confidence, and quality of life. Your new smile is a reflection of our shared commitment to excellence.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Patient-Centric <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            What truly sets Dr. Yash Madaan apart is his personalized philosophy of care.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;