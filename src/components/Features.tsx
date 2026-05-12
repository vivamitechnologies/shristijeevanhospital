import { motion } from 'motion/react';
import { ShieldCheck, Stethoscope, Clock, HeartPulse, Activity, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Stethoscope className="w-8 h-8 text-[#0057D9]" />,
    title: "Experienced Doctors",
    description: "Highly qualified specialists with years of experience across multiple medical disciplines."
  },
  {
    icon: <Activity className="w-8 h-8 text-[#FFD400]" />,
    title: "Advanced Technology",
    description: "State-of-the-art diagnostic and surgical equipment for precision treatment."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#0057D9]" />,
    title: "24x7 Emergency",
    description: "Round-the-clock emergency and trauma care with rapid response protocols."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#FFD400]" />,
    title: "NABH Standards",
    description: "Following strict national healthcare quality and safety guidelines for all treatments."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-[#0057D9]" />,
    title: "Patient First",
    description: "Compassionate care focused entirely on the rapid and complete recovery of our patients."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-[#FFD400]" />,
    title: "Affordable & Compassionate Care",
    description: "World-class healthcare services provided at costs that are accessible, delivered with empathy and kindness."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We combine world-class medical expertise with modern technology and a compassionate approach to heal our patients.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f8fafc] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-[#0057D9]/20 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#002B6B]">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
