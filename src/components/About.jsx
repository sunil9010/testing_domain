import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                alt="Dr. Yash Madaan consulting with a patient"
                className="w-full rounded-3xl shadow-2xl shadow-teal-900/50"
                src="images/treatment.png"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Meet <span className="gradient-text">Dr. Yash Madaan</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                With over seven years of clinical experience, Dr. Yash Madaan (BDS, MDS) is recognized as one of Delhi NCR’s leading prosthodontic consultants, renowned for restoring function, health, and aesthetics to every smile he treats.
              </p>
              <p>
                A specialist in prosthodontics—the field often called the “architecture of the smile”—Dr. Yash Madaan is highly skilled in the diagnosis, rehabilitation, and maintenance of patients with missing or damaged teeth. His practice blends advanced prosthetic dentistry with cutting-edge digital technology, offering personalized care that transforms both oral health and confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="glass-card px-4 py-2">
                <span className="font-semibold text-teal-400 text-sm">BDS, MDS</span>
              </div>
              <div className="glass-card px-4 py-2">
                <span className="font-semibold text-teal-400 text-sm">7+ Years Experience</span>
              </div>
              <div className="glass-card px-4 py-2">
                <span className="font-semibold text-teal-400 text-sm">AI in Dentistry Innovator</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;