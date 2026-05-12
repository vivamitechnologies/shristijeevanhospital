import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-[#002B6B] text-white py-2 hidden md:block z-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#FFD400]" />
            <span className="font-semibold text-[#FFD400]">Emergency: +91 9031800801</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-200" />
            <span className="text-blue-100">info@shristijeevanhospital.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-200" />
            <span className="text-blue-100 truncate max-w-[200px]" title="Dak Banglow Road, East Of SK Mahila College, Begusarai">Dak Banglow Road, Begusarai</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-blue-200">Follow Us:</span>
          <a href="#" className="text-white hover:text-[#FFD400] transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="text-white hover:text-[#FFD400] transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="text-white hover:text-[#FFD400] transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="text-white hover:text-[#FFD400] transition-colors"><Youtube className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  );
}
