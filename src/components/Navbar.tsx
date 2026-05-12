import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import BookAppointmentButton from './BookAppointmentButton';
import logoImg from '../assets/images/regenerated_image_1778310243829.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Departments", href: "/departments" },
    { name: "Doctors", href: "/doctors" },
    { name: "Appointment", href: "/appointment" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4 sm:py-5 border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Shristi Jeevan Hospital Logo" 
                className="h-10 sm:h-12 md:h-14 object-contain rounded-xl overflow-hidden shadow-sm"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex flex-1 items-center justify-center gap-6 xl:gap-8 xl:pl-24 2xl:pl-36">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name}
                  to={link.href} 
                  className={({ isActive }) => 
                    `text-sm font-semibold transition-colors relative group ${isActive ? 'text-[#0057D9]' : 'text-slate-700 hover:text-[#0057D9]'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#0057D9] transition-all group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
                title="Toggle Dark Mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <BookAppointmentButton size="md" />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden flex items-center gap-2 ml-auto">
              <BookAppointmentButton size="sm" text="Book Appointment" className="mr-2" />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#002B6B]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 flex flex-col h-screen overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-center pt-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={({ isActive }) => 
                    `text-xl font-medium transition-colors ${isActive ? 'text-[#0057D9] font-bold' : 'text-[#002B6B]'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="h-px bg-slate-100 my-4" />
              
              <div className="flex justify-center w-full pb-4">
                <BookAppointmentButton 
                  size="lg" 
                  className="w-full max-w-[300px]" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
