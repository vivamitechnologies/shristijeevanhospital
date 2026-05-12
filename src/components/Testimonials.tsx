import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The doctors at Shristi Jeevan saved my father's life during a cardiac emergency. The ICU care is world-class, and the staff is unbelievably supportive.",
    author: "Rakesh Singh",
    role: "Patient Family",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Very clean hospital with advanced machinery. I had my orthopaedic surgery here, and the recovery was very smooth. Highly recommend to everyone in Begusarai.",
    author: "Pooja Mishra",
    role: "Recovered Patient",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "From admission to discharge, the process was seamless. The transparent billing and 24x7 doctor availability gave us peace of mind when we needed it most.",
    author: "Vikash Kumar",
    role: "Patient Family",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6 w-max">
            <span className="text-sm font-semibold text-[#0057D9]">Patient Stories</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-6"
          >
            Trust built through care
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#f8fafc] border border-slate-200 p-8 rounded-3xl flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-100" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-[#002B6B]">{t.author}</h4>
                  <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
