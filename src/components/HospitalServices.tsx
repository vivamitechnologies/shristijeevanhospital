import { motion } from 'motion/react';
import { Activity, HeartPulse, Scan, Pill, Microscope, ArrowRight, Droplets } from 'lucide-react';

const services = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Ultrasound",
    description: "Advanced diagnostic ultrasound imaging services."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "ECO",
    description: "Accurate cardiac evaluation and monitoring."
  },
  {
    icon: <Scan className="w-8 h-8" />,
    title: "Digital X-Ray",
    description: "High-resolution digital radiology solutions."
  },
  {
    icon: <Pill className="w-8 h-8" />,
    title: "Pharmacy",
    description: "24/7 availability of genuine medicines."
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Pathology",
    description: "Comprehensive laboratory testing and diagnostics."
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "In-House Blood Bank",
    description: "Our In-House Blood Bank ensures safe, screened, and readily available blood support for emergencies, surgeries, and critical patient care.",
    isRed: true
  }
];

export default function HospitalServices() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="services">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0057D9]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-6"
          >
            Hospital Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Providing state-of-the-art diagnostic and medical facilities specialized for your care and rapid recovery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white group p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col ${service.isRed ? 'hover:border-red-500/30' : 'hover:border-[#0057D9]/30'}`}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 ${service.isRed ? 'bg-red-50' : 'bg-[#0057D9]/5'}`} />
              
              <div className="relative z-10 flex-grow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-colors duration-300 ${service.isRed ? 'bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white' : 'bg-[#0057D9]/10 text-[#0057D9] group-hover:bg-[#0057D9] group-hover:text-white'}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#002B6B] leading-tight">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="relative z-10 mt-auto pt-4 border-t border-slate-100">
                <a href="#contact" className={`inline-flex items-center font-bold transition-colors ${service.isRed ? 'text-red-500 group-hover:text-red-700' : 'text-[#0057D9] group-hover:text-[#002B6B]'}`}>
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
