import { motion } from 'motion/react';
import { HeartPulse, Stethoscope, Activity, Baby, Eye, Brain, Droplets } from 'lucide-react';

const departments = [
  { icon: <Activity />, name: "Emergency Care", desc: "24/7 dedicated trauma and emergency services." },
  { icon: <Droplets />, name: "Dialysis", desc: "Modern hemodialysis unit for kidney patients." },
  { icon: <Activity />, name: "Center for Critical Care & ICU", desc: "Advanced intensive care and critical support." },
  { icon: <HeartPulse />, name: "Trauma Centre", desc: "Specialized care for acute trauma and injuries." },
  { icon: <Stethoscope />, name: "Orthopedic", desc: "Specialized care for bones, joints, and spine." },
  { icon: <Baby />, name: "Gynecology & Pediatrics", desc: "Maternity and child care with expert doctors." },
  { icon: <Brain />, name: "General Medicine", desc: "Comprehensive diagnosis and non-surgical treatment." },
  { icon: <Eye />, name: "Pathology & Pharmacy", desc: "Accurate diagnostics and 24/7 pharmacy access." }
];

export default function Departments() {
  return (
    <section className="py-20 bg-slate-50" id="departments">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-[#0057D9]">Specialities</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-6"
          >
            Centers of Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We offer a wide range of specialized medical services all under one roof, guided by expert professionals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0057D9] hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-50 text-[#0057D9] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0057D9] group-hover:text-white transition-colors">
                {dept.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#002B6B] group-hover:text-[#0057D9] transition-colors">{dept.name}</h3>
              <p className="text-sm text-slate-600">
                {dept.desc}
              </p>
              
              <div className="mt-4 flex items-center text-sm font-semibold text-[#0057D9] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                Learn more &rarr;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
