import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BookAppointmentButton from '../components/BookAppointmentButton';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-16 bg-slate-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are here to answer your questions. Reach out to us for emergencies, appointments, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-[#002B6B] mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" placeholder="+91 99999 00000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" placeholder="How can we help you?" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50 resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-[#0057D9] text-white rounded-full font-bold hover:bg-[#002B6B] transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#0057D9] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-sm text-slate-600">+91 9031800801</p>
                  <p className="text-sm text-slate-600">+91 9031800802</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#0057D9] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-sm text-slate-600">info@shristijeevanhospital.com</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#0057D9] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                  <p className="text-sm text-slate-600">Dak Banglow Road, East Of SK Mahila College, Begusarai – 851129</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Emergency</h4>
                  <p className="text-sm text-slate-600 font-bold text-red-600">24/7 Available</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 h-80">
              <iframe 
                src="https://maps.google.com/maps?q=Shristi%20Jeevan%20Multispeciality%20Hospital%20PVT%20LTD%20Begusarai&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shristi Jeevan Hospital Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
