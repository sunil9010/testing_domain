import React from 'react';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          duration: 1.5,
        }}
        className="relative w-24 h-24"
      >
        <Smile className="w-full h-full text-teal-400 text-glow" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-serif text-2xl mt-6 text-foreground"
      >
        Redefining Smiles...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;