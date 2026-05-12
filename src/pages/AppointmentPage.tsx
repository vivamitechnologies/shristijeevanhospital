import { motion } from 'motion/react';
import AppointmentForm from '../components/AppointmentForm';

export default function AppointmentPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#0057D9] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Book an Appointment</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4">
          Schedule your visit easily. Select your preferred date, time, and specialist.
        </p>
      </div>
      <AppointmentForm />
    </motion.div>
  );
}
