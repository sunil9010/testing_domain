
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.7,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 pt-32 pb-20 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground"
            >
              The Architecture of a Perfect
              <span className="gradient-text text-glow block mt-2 lg:mt-0 lg:inline"> Smile</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Dr. Yash Madaan, a leading prosthodontic consultant in Delhi NCR, blends advanced digital technology with artistry to restore function, health, and aesthetics to every smile.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/918882576579"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} className="mr-2" />
                Book Consultation
              </a>
              <button onClick={scrollToServices} className="btn-secondary">
                Our Services
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[280px] h-[380px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[466px] z-10">
              <img
                src="images/doctor.jpeg"
                alt="Dr. Yash Madaan - Best Prosthodontist in Delhi NCR"
                className="w-full h-full object-cover rounded-[5rem] border-4 border-border/50 shadow-2xl shadow-teal-500/10"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="absolute -bottom-4 right-0 sm:-bottom-8 sm:-right-8 glass-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold">5-Star Patient Care</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
