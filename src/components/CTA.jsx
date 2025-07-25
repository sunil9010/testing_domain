
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gradient-to-br from-teal-900/50 to-background p-10 md:p-16 rounded-3xl text-center relative overflow-hidden border border-teal-500/20"
        >
          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule your consultation today and take the first step towards the perfect smile you've always dreamed of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8882576579"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
              <a href="tel:+918882576579" className="btn-secondary">
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
