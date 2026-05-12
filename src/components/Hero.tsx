import { motion } from 'motion/react';
import { CalendarDays, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookAppointmentButton from './BookAppointmentButton';
import heroBgImg from '../assets/images/regenerated_image_1778233854398.png';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 lg:pt-0">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroBgImg} 
          alt="Shristi Jeevan Hospital" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B6B]/95 via-[#002B6B]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/90 md:from-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#FFD400] animate-pulse"></span>
            <span className="text-sm font-semibold text-white tracking-wide">24x7 Emergency Services Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight"
          >
            Trusted Multi Speciality Hospital in <span className="text-[#FFD400]">Begusarai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed"
          >
            Compassionate healthcare with advanced medical technology, experienced doctors, emergency support, and patient-first treatment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <BookAppointmentButton size="lg" className="w-full sm:w-auto" />
            <a 
              href="tel:+919031800801"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#002B6B] rounded-full font-semibold border border-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <PhoneCall className="w-5 h-5 text-[#0057D9]" />
              Call Emergency
            </a>
            <a 
              href="https://wa.me/919031800801"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold border border-[#25D366] hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Floating Cards next to hero - desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 space-y-4"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white shadow-2xl">
            <h3 className="font-bold text-xl mb-2 text-[#FFD400]">Expert Doctors</h3>
            <p className="text-sm text-blue-100 mb-4">Our specialized team of medical professionals is here to guide you to recovery.</p>
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-[#002B6B] object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150" alt="Doctor" />
              <img className="w-10 h-10 rounded-full border-2 border-[#002B6B] object-cover" src="https://images.unsplash.com/photo-1594824436998-058b23c96214?auto=format&fit=crop&q=80&w=150" alt="Doctor" />
              <img className="w-10 h-10 rounded-full border-2 border-[#002B6B] object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" alt="Doctor" />
              <div className="w-10 h-10 rounded-full border-2 border-[#002B6B] bg-[#0057D9] flex items-center justify-center text-xs font-bold">+15</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white shadow-2xl">
             <div className="flex items-center gap-4 mb-2">
               <div className="p-3 bg-[#FFD400] rounded-xl text-[#002B6B]">
                  <PhoneCall className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-lg leading-tight">24/7 Ambulance</h3>
                 <p className="text-sm text-blue-100">+91 9031800801</p>
               </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
