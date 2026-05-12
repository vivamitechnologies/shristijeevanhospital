import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import blogImg1 from '../assets/images/regenerated_image_1778317394830.png';

const blogs = [
  {
    title: "Understanding Heart Health in 2024",
    category: "Cardiology",
    date: "May 5, 2024",
    image: blogImg1,
    excerpt: "Learn about the crucial steps you can take today to prevent cardiovascular diseases tomorrow."
  },
  {
    title: "Why Regular Body Checkups are Important",
    category: "Wellness",
    date: "Apr 28, 2024",
    image: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=80&w=800",
    excerpt: "Discover how early diagnosis through routine checkups can save lives and money."
  },
  {
    title: "Tips for Faster Recovery after Surgery",
    category: "Surgical Care",
    date: "Apr 15, 2024",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    excerpt: "Expert advice from our top surgeons on nutrition and habits for post-operative care."
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-[#f8fafc]" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-4 w-max">
              <span className="text-sm font-semibold text-[#0057D9]">Health Articles</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-[#002B6B]"
            >
              Latest Medical Insights
            </motion.h2>
          </div>
          <a href="#" className="px-6 py-3 rounded-full border border-[#0057D9] text-[#0057D9] font-medium hover:bg-[#0057D9] hover:text-white transition-colors whitespace-nowrap">
            View All Posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0057D9]">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Clock className="w-4 h-4" />
                  {blog.date}
                </div>
                <h3 className="text-xl font-bold text-[#002B6B] mb-3 group-hover:text-[#0057D9] transition-colors">{blog.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>
                <a href="#" className="flex items-center gap-2 text-[#0057D9] font-semibold hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
