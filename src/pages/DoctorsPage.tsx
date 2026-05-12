import { motion } from 'motion/react';
import Doctors from '../components/Doctors';

export default function DoctorsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#f8fafc]"
    >
      <div className="bg-[#002B6B] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B] to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Our Medical Experts</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4 leading-relaxed">
            A dedicated team of internationally trained doctors committed to providing compassionate, comprehensive, and advanced healthcare.
          </p>
        </div>
      </div>
      <Doctors showAll={true} showHeader={false} />
    </motion.div>
  );
}
