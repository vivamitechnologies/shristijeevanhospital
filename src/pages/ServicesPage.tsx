import { motion } from 'motion/react';
import { ShieldCheck, Stethoscope, Clock, HeartPulse, Activity, ActivitySquare, Brain, Droplets } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { icon: <Activity />, name: "Advanced ICU", desc: "State-of-the-art intensive care with ventilator support and 1:1 nursing." },
    { icon: <ShieldCheck />, name: "In-house Pharmacy", desc: "24/7 fully stocked pharmacy to ensure medicines are always available." },
    { icon: <Clock />, name: "24/7 Emergency", desc: "Immediate response trauma center equipped for critical emergencies." },
    { icon: <Stethoscope />, name: "Modular OTs", desc: "Infection-free operation theaters with latest surgical microscopes." },
    { icon: <Droplets />, name: "In-House Blood Bank", desc: "Our In-House Blood Bank ensures safe, screened, and readily available blood support for emergencies, surgeries, and critical patient care.", isRed: true },
    { icon: <Droplets />, name: "Dialysis Unit", desc: "Comfortable and safe dialysis center with latest machines." },
    { icon: <Brain />, name: "Neuro Diagnostics", desc: "EEG, EMG, and other neurological diagnostic tools." },
    { icon: <ActivitySquare />, name: "Pathology", desc: "Fully automated diagnostic lab for accurate blood tests and reporting." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-24 pt-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-4">Patient Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive hospital services are designed to ensure comfort, accuracy, and rapid recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group ${service.isRed ? 'hover:border-red-500' : 'hover:border-[#0057D9]'}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${service.isRed ? 'bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white' : 'bg-blue-50 text-[#0057D9] group-hover:bg-[#0057D9] group-hover:text-white'}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 text-[#002B6B] transition-colors ${service.isRed ? 'group-hover:text-red-500' : 'group-hover:text-[#0057D9]'}`}>{service.name}</h3>
              <p className="text-sm text-slate-600">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
