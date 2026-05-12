import { motion } from 'motion/react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-16"
    >
      <div className="bg-slate-50 py-16 text-center border-b border-slate-200 mb-0">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-4">Hospital Gallery</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-4">
          Take a look at our world-class infrastructure and facilities designed for maximum patient comfort.
        </p>
      </div>
      <div className="-mt-16">
        <Gallery />
      </div>
    </motion.div>
  );
}
