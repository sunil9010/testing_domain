import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, CheckCircle, Award, BrainCircuit } from 'lucide-react';

const stats = [
  { number: "7+", label: "Years Experience", icon: Clock },
  { number: "2000+", label: "Happy Patients", icon: Users },
  { number: "AI", label: "Driven Precision", icon: BrainCircuit },
  { number: "98%", label: "Success Rate", icon: CheckCircle }
];

const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 mb-4">
                <stat.icon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.number}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;