import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { doctorsData as staticDoctorsData } from '../data/doctors';

export default function Doctors({ showAll = true, showHeader = true }: { showAll?: boolean, showHeader?: boolean }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [firebaseDoctors, setFirebaseDoctors] = useState<any[]>([]);

  useEffect(() => {
    const unsubs = onSnapshot(query(collection(db, 'doctors'), orderBy('createdAt', 'desc')), (snapshot) => {
      setFirebaseDoctors(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubs();
  }, []);

  const allDoctors = useMemo(() => {
     return [...firebaseDoctors, ...staticDoctorsData];
  }, [firebaseDoctors]);

  const departments = ['All', ...new Set(allDoctors.map(doc => doc.department))].sort();

  const filteredDoctors = useMemo(() => {
    let filtered = allDoctors;
    if (selectedDept !== 'All') {
      filtered = filtered.filter(doc => doc.department === selectedDept);
    }
    if (searchTerm) {
      filtered = filtered.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return showAll ? filtered : filtered.slice(0, 6);
  }, [searchTerm, selectedDept, showAll, allDoctors]);

  return (
    <section className={`py-24 bg-gradient-to-b from-[#f8fafc] to-white relative ${showHeader ? '' : 'pt-12'}`} id="doctors">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0057D9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6 w-max">
              <span className="text-sm font-semibold text-[#0057D9]">Expert Team</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-6"
            >
              Meet Our Specialists
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-10"
            >
              Our team of internationally trained doctors brings decades of experience to ensure the highest standard of care at Shristi Jeevan Hospital.
            </motion.p>
          </div>
        )}

        {showAll && (
          <div className="mb-12 flex flex-col md:flex-row items-center gap-4 justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search doctors, specializations..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#0057D9] transition-all"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter className="text-slate-400 w-5 h-5 shrink-0" />
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-medium transition-all ${
                    selectedDept === dept 
                      ? 'bg-[#002B6B] text-white shadow-md' 
                      : 'bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-[#0057D9]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doc, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={doc.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100/50 group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
              >
                <div className="relative h-[400px] overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out" 
                    loading="lazy"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                    <h3 className="text-2xl font-bold mb-1">{doc.name}</h3>
                    <div className="flex flex-col items-center gap-1.5">
                      <p className="font-semibold text-blue-200">{doc.qualification}</p>
                      <p className="text-sm font-medium bg-[#0057D9]/80 backdrop-blur-md px-3 py-1 rounded-full inline-block mt-2">
                        {doc.specialization} • {doc.department}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <a href="/doctors" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold hover:bg-[#0057D9] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              View All Doctors <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}

        {filteredDoctors.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No Doctors Found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}
              className="mt-6 px-6 py-2.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
