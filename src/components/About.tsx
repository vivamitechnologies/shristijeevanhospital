import { motion } from 'motion/react';
import { CheckCircle2, Heart, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookAppointmentButton from './BookAppointmentButton';
import aboutImg from '../assets/images/regenerated_image_1778310361908.png';

export default function About() {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6 w-max">
              <span className="text-sm font-semibold text-[#0057D9]">About Our Hospital</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#002B6B] leading-tight">
              Healing with compassion, guided by excellence.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Shristi Jeevan Hospital is committed to delivering affordable, advanced, and compassionate healthcare services. With experienced doctors, modern infrastructure, and a patient-first approach, we strive to be the most trusted healthcare provider in Begusarai.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['24/7 Emergency Support', 'Modern ICU Facilities', 'Experienced Doctors', 'Advanced Tech Lab'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0057D9] shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <BookAppointmentButton size="md" />
              <Link to="/contact" className="px-8 py-3 rounded-full border-2 border-[#002B6B] text-[#002B6B] font-medium hover:bg-blue-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Abstract Image / Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0057D9]/20 to-[#FFD400]/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src={aboutImg} 
                 alt="Doctor at Hospital" 
                 className="w-full h-auto object-cover object-center aspect-[4/3] sm:aspect-video lg:aspect-[4/5]"
                 loading="lazy"
               />
               
               {/* Floating Stats Card 1 */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute bottom-10 -left-6 sm:left-10 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/40 shadow-xl max-w-[200px]"
               >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0057D9]">
                     <Award className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="font-bold text-2xl text-[#002B6B]">10k+</p>
                     <p className="text-sm text-slate-500 font-medium">Years Experience</p>
                   </div>
                 </div>
               </motion.div>

               {/* Floating Stats Card 2 */}
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute top-10 -right-6 sm:right-10 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/40 shadow-xl max-w-[200px]"
               >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                     <Heart className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="font-bold text-2xl text-[#002B6B]">10k+</p>
                     <p className="text-sm text-slate-500 font-medium">Happy Patients</p>
                   </div>
                 </div>
               </motion.div>
               
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
