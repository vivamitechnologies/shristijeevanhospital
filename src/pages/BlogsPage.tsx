import { motion } from 'motion/react';
import Blog from '../components/Blog';

export default function BlogsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-16"
    >
      <div className="bg-[#002B6B] py-16 text-center text-white mb-0">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Health & Wellness Blog</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4">
          Expert medical advice, health tips, and wellness insights from our specialists.
        </p>
      </div>
      <Blog />
    </motion.div>
  );
}
