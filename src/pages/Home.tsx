import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Departments from '../components/Departments';
import EmergencyBanner from '../components/EmergencyBanner';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Features />
      <About />
      <Departments />
      <EmergencyBanner />
      <Doctors showAll={false} />
      <Testimonials />
    </motion.div>
  );
}
