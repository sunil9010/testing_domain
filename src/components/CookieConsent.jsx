
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-[101] p-5 bg-background/80 backdrop-blur-lg border border-border/30 rounded-2xl shadow-2xl"
        >
          <p className="text-sm text-muted-foreground mb-4">
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 text-sm font-semibold text-background bg-secondary rounded-full hover:bg-yellow-400 transition-all duration-300"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 px-4 py-2 text-sm font-semibold text-foreground bg-muted hover:bg-muted/80 rounded-full transition-all duration-300"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
