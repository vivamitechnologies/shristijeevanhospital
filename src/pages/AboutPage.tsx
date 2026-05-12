import { motion } from 'motion/react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-4">About Shristi Jeevan</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn more about our legacy of compassionate care, advanced medical technology, and patient-first approach.
          </p>
        </div>
      </div>
      <About />
      <Testimonials />
    </motion.div>
  );
}
