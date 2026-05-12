import { motion } from 'motion/react';
import { Ambulance, ArrowRight } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#002B6B] to-[#0057D9]"></div>
      
      {/* Background Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/20 rounded-full blur-[100px]"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-[#FFD400] text-[#002B6B] rounded-2xl flex items-center justify-center mb-6 animate-pulse"
            >
              <Ambulance className="w-8 h-8" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            >
              Emergency? We are available 24/7
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-blue-100 max-w-2xl"
            >
              Our emergency and trauma center is fully equipped with advanced life-saving technology and ready to respond immediately.
            </motion.p>
          </div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="w-full md:w-auto"
          >
            <a 
              href="tel:+919031800802"
              className="w-full md:w-auto px-8 py-5 bg-[#FFD400] hover:bg-yellow-300 text-[#002B6B] rounded-full font-bold text-xl transition-colors flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(255,212,0,0.4)]"
            >
              Call +91 9031800802
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
