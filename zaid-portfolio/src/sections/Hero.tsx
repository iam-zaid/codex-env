import { motion } from 'framer-motion';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const phrases = [
  'I build scalable Salesforce apps',
  'I connect business goals with tech',
  'I design product-centric solutions'
];

const typingDelay = 120;

const TypingHeadline = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, deleting ? typingDelay / 2 : typingDelay);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, index]);

  return (
    <span className="text-lg text-tealGlow/80 md:text-xl">
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6">
      <div className="absolute inset-0 wave-pattern" aria-hidden />
      <div className="section-container flex flex-col gap-10 pb-32 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-sm uppercase tracking-[0.4em] text-tealGlow"
        >
          Zaid Shaikh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-semibold leading-tight text-white drop-shadow-md md:text-6xl"
        >
          Salesforce Developer | Future Product Manager
        </motion.h1>

        <TypingHeadline />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl text-lg text-slate-200"
        >
          I fuse platform engineering, user empathy, and go-to-market thinking to design AI-assisted
          Salesforce experiences that move KPIs and delight stakeholders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="glow-border inline-flex items-center gap-2 rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            View Projects <ArrowDownRight size={18} />
          </a>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-tealGlow hover:text-tealGlow"
          >
            <MessageCircle size={18} /> Chat with Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
