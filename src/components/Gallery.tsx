import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const staticGalleryImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
];

export default function Gallery() {
  const [firebaseImages, setFirebaseImages] = useState<any[]>([]);

  useEffect(() => {
    const unsubs = onSnapshot(query(collection(db, 'gallery'), orderBy('createdAt', 'desc')), (snapshot) => {
      setFirebaseImages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubs();
  }, []);

  const galleryImages = [
    ...firebaseImages.map(img => img.url),
    ...staticGalleryImages
  ];

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6 w-max">
            <span className="text-sm font-semibold text-[#0057D9]">Our Infrastructure</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-6"
          >
            Hospital Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery visual ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-[#0057D9] px-4 py-2 rounded-full">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
