import { motion } from 'motion/react';
import { 
  Stethoscope, Baby, Activity, Scissors, Brain, 
  Droplets, Ear, Eye, Smile, HeartPulse, 
  Syringe, Accessibility, Heart, ShieldPlus, Ambulance 
} from 'lucide-react';

import genSurgeonImg from '../assets/images/regenerated_image_1778406019485.webp';
import genMedicineImg from '../assets/images/regenerated_image_1778404593167.png';
import obsGynaeImg from '../assets/images/regenerated_image_1778405717418.jpg';
import nephrologyImg from '../assets/images/regenerated_image_1778405476027.jpg';
import orthopedicsImg from '../assets/images/regenerated_image_1778405834441.webp';
import entImg from '../assets/images/regenerated_image_1778406125634.jpg';
import eyeImg from '../assets/images/regenerated_image_1778406251985.jpg';
import dentalImg from '../assets/images/regenerated_image_1778406413250.jpg';
import urologyImg from '../assets/images/regenerated_image_1778406513755.webp';
import anaesthetistImg from '../assets/images/regenerated_image_1778406698066.jpg';
import icuImg from '../assets/images/regenerated_image_1778571297420.png';
import physiotherapistImg from '../assets/images/regenerated_image_1778571647902.png';
import dialysisImg from '../assets/images/regenerated_image_1778574583802.jpg';

const departmentsData = [
  { 
    name: "General Medicine", 
    desc: "Comprehensive diagnosis and non-surgical treatment for adult patients, encompassing a wide range of illnesses.", 
    image: genMedicineImg, 
    icon: <Stethoscope /> 
  },
  { 
    name: "Obs & Gynae", 
    desc: "Compassionate and comprehensive care for women's reproductive health, maternity, and high-risk pregnancies.", 
    image: obsGynaeImg, 
    icon: <Baby /> 
  },
  { 
    name: "Orthopedics", 
    desc: "Advanced treatment and surgical interventions for bone, joint, muscle, ligaments and spine disorders.", 
    image: orthopedicsImg, 
    icon: <Activity /> 
  },
  { 
    name: "General Surgeon", 
    desc: "Expert surgical procedures for a wide range of common ailments and complex medical conditions.", 
    image: genSurgeonImg, 
    icon: <Scissors /> 
  },
  { 
    name: "Neuro Surgery", 
    desc: "Specialized and advanced surgical care for disorders of the brain, spine, and central nervous system.", 
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", 
    icon: <Brain /> 
  },
  { 
    name: "Nephrology", 
    desc: "Expert diagnosis and treatment of acute and chronic kidney diseases, including management of hypertension.", 
    image: nephrologyImg, 
    icon: <Droplets /> 
  },
  { 
    name: "ENT", 
    desc: "Specialized medical and surgical care for conditions affecting the ear, nose, throat, and related structures.", 
    image: entImg, 
    icon: <Ear /> 
  },
  { 
    name: "EYE", 
    desc: "Comprehensive eye care, from routine vision checkups to advanced corrective surgeries.", 
    image: eyeImg, 
    icon: <Eye /> 
  },
  { 
    name: "Dental", 
    desc: "Expert dental care, covering routine checkups, orthodontics, oral surgeries, and cosmetic procedures.", 
    image: dentalImg, 
    icon: <Smile /> 
  },
  { 
    name: "Urology", 
    desc: "Specialized care for diseases of the urinary tract and the male reproductive organs.", 
    image: urologyImg, 
    icon: <Droplets /> 
  },
  { 
    name: "Anaesthetist", 
    desc: "Expert pain management and comprehensive anesthesia services ensuring safety during surgical procedures.", 
    image: anaesthetistImg, 
    icon: <Syringe /> 
  },
  { 
    name: "Physiotherapist", 
    desc: "Dedicated rehabilitation services designed to restore mobility, alleviate pain, and improve physical function.", 
    image: physiotherapistImg, 
    icon: <Accessibility /> 
  },
  { 
    name: "Emergency", 
    desc: "24/7 rapid response critical care and trauma services equipped with state-of-the-art life-saving technology.", 
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800", 
    icon: <Ambulance /> 
  },
  { 
    name: "ICU", 
    desc: "Intensive care units offering advanced continuous life support and vigilant monitoring for critically ill patients.", 
    image: icuImg, 
    icon: <HeartPulse /> 
  },
  { 
    name: "Dialysis", 
    desc: "Modern and comfortable hemodialysis units providing state-of-the-art renal replacement therapy.", 
    image: dialysisImg, 
    icon: <Droplets /> 
  }
];

export default function DepartmentsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-20 bg-slate-50 min-h-screen"
    >
      <div className="bg-[#002B6B] py-20 text-center text-white mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Departments</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4">
            Comprehensive healthcare services under one roof with specialized doctors and advanced technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentsData.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-[#0057D9]/30 transition-all duration-300 flex flex-col"
            >
              {/* Animated Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#002B6B]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <motion.img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white text-[#0057D9] rounded-lg flex items-center justify-center shadow-lg">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{dept.name}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                  {dept.desc}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-[#0057D9] font-bold self-start text-sm flex items-center gap-2 group-hover:text-[#002B6B] transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
