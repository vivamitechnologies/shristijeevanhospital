import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppFloat() {
  return (
    <motion.a 
      href="https://wa.me/919031800801?text=Hello%20Shristi%20Jeevan%20Hospital,%20I%20need%20assistance."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer z-50 hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
    </motion.a>
  );
}
