import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/regenerated_image_1778310887047.png';

export default function Footer() {
  return (
    <footer className="bg-[#001D4A] pt-20 pb-10 border-t border-[#002B6B] text-slate-300" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logoImg} 
                alt="Shristi Jeevan Hospital Logo" 
                className="h-12 md:h-14 object-contain rounded-xl overflow-hidden shadow-sm"
              />
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Compassionate care with advanced medical technology, serving Begusarai and beyond with trust and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD400] hover:text-[#002B6B] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD400] hover:text-[#002B6B] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD400] hover:text-[#002B6B] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD400] hover:text-[#002B6B] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</Link></li>
              <li><Link to="/departments" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Departments</Link></li>
              <li><Link to="/doctors" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Our Doctors</Link></li>
              <li><Link to="/appointment" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Book Appointment</Link></li>
              <li><Link to="/gallery" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Gallery</Link></li>
              <li><Link to="/blogs" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Blogs</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Careers</Link></li>
              <li><Link to="/admin" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Admin Panel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Departments</h4>
            <ul className="space-y-3">
              <li><Link to="/departments" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Cardiology</Link></li>
              <li><Link to="/departments" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Orthopedics</Link></li>
              <li><Link to="/departments" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Gynecology</Link></li>
              <li><Link to="/departments" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Neurology</Link></li>
              <li><Link to="/departments" className="text-slate-400 hover:text-[#FFD400] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> 24x7 Emergency</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#FFD400] shrink-0 mt-1" />
                <span className="text-slate-400 leading-relaxed">Dak Banglow Road, East Of SK Mahila College, Begusarai – 851129</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#FFD400] shrink-0" />
                <span className="text-slate-400">+91 9031800801 <br/>+91 9031800802</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#FFD400] shrink-0" />
                <span className="text-slate-400">info@shristijeevanhospital.com</span>
              </li>
            </ul>
            
            <div className="mt-8 rounded-lg overflow-hidden border border-white/10 h-32">
              <iframe 
                src="https://maps.google.com/maps?q=Shristi%20Jeevan%20Multispeciality%20Hospital%20PVT%20LTD%20Begusarai&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Map Location"
              ></iframe>
            </div>
            
            <div className="mt-8">
               <h5 className="text-sm font-semibold text-white mb-3">Subscribe to Newsletter</h5>
               <div className="flex">
                 <input type="email" placeholder="Email Address" className="bg-white/10 border-none px-4 py-2 rounded-l-lg outline-none text-white w-full" />
                 <button className="bg-[#0057D9] px-4 rounded-r-lg hover:bg-[#FFD400] hover:text-[#002B6B] transition-colors">
                   <ArrowRight className="w-5 h-5" />
                 </button>
               </div>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shristi Jeevan Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="hover:text-white transition-colors">Designed with Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
