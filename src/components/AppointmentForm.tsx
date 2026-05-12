import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, Mail, Stethoscope, Clock, FileText } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import emailjs from '@emailjs/browser';
import BookAppointmentButton from './BookAppointmentButton';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'Select Department',
    date: '',
    timeSlot: 'Morning (9AM - 1PM)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.phone || formData.department === 'Select Department' || !formData.date) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'appointments'), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        department: formData.department,
        date: formData.date,
        timeSlot: formData.timeSlot,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'pending'
      });

      // Send email if EmailJS config is available
      if (
        import.meta.env.VITE_EMAILJS_SERVICE_ID && 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID && 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
        formData.email
      ) {
         try {
           await emailjs.send(
             import.meta.env.VITE_EMAILJS_SERVICE_ID,
             import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
             {
               to_name: formData.name,
               to_email: formData.email,
               department: formData.department,
               date: formData.date,
               time: formData.timeSlot,
             },
             import.meta.env.VITE_EMAILJS_PUBLIC_KEY
           );
         } catch (emailErr) {
           console.error("Failed to send email confirmation", emailErr);
         }
      }

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: 'Select Department',
        date: '',
        timeSlot: 'Morning (9AM - 1PM)',
        message: ''
      });
    } catch (err) {
      console.error("Error adding appointment: ", err);
      setError('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="appointment">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6 w-max">
                <span className="text-sm font-semibold text-[#0057D9]">Easy Booking</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-6 leading-tight">
                Book your visit online effortlessly
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Skip the waiting room. Schedule your appointment directly with our specialists. We will confirm your visit via SMS and WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#0057D9] rounded-xl flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002B6B]">Select Date & Time</h4>
                    <p className="text-sm text-slate-500">Pick a slot that suits your schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#0057D9] rounded-xl flex items-center justify-center shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002B6B]">Choose Specialist</h4>
                    <p className="text-sm text-slate-500">Find the right doctor for your condition.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {success && (
                  <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center font-medium flex flex-col items-center gap-4">
                    <p>Your appointment request has been received. We will contact you shortly.</p>
                    <a 
                      href={`https://wa.me/919031800801?text=Hi, I just submitted an appointment request for ${formData.name} on ${formData.date} at ${formData.timeSlot}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-800 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                      Get WhatsApp Confirmation
                    </a>
                  </div>
                )}
                {error && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 text-center font-medium">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Patient Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" />
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Mobile Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50" />
                    </div>
                  </div>
                  {/* Department */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Department <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <select name="department" value={formData.department} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50 appearance-none text-slate-600">
                        <option>Select Department</option>
                        <option>General Medicine</option>
                        <option>Obs & Gynae</option>
                        <option>Orthopedics</option>
                        <option>General Surgery</option>
                        <option>Neurology</option>
                        <option>Neuro Surgery</option>
                        <option>Nephrology</option>
                        <option>Urology</option>
                        <option>ENT</option>
                        <option>EYE</option>
                        <option>Dental</option>
                        <option>Urology</option>
                        <option>Anaesthesia</option>
                        <option>Physiotherapy</option>
                        <option>Emergency</option>
                        <option>ICU</option>
                        <option>Dialysis</option>
                      </select>
                    </div>
                  </div>
                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Preferred Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50 text-slate-600" />
                    </div>
                  </div>
                  {/* Time slot */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Time Slot</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50 appearance-none text-slate-600">
                        <option>Morning (9AM - 1PM)</option>
                        <option>Afternoon (2PM - 5PM)</option>
                        <option>Evening (6PM - 9PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Symptoms or Notes</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 text-slate-400 w-5 h-5" />
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Briefly describe your condition..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20 focus:border-[#0057D9] transition-all bg-slate-50 resize-none"></textarea>
                  </div>
                </div>

                <BookAppointmentButton 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full" 
                  size="lg" 
                  text={isSubmitting ? 'Confirming...' : 'Book Appointment'} 
                />
                <p className="text-center text-xs text-slate-500 mt-4">
                  By booking an appointment, you agree to our Terms of Service. In case of emergency, immediately call +91 9031800801.
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
