import { motion } from 'motion/react';
import { ArrowRight, Briefcase } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    { title: "Senior Resident - Cardiology", department: "Cardiology", type: "Full Time" },
    { title: "Staff Nurse (ICU)", department: "Nursing", type: "Full Time" },
    { title: "Medical Officer", department: "Emergency", type: "Full / Part Time" },
    { title: "Receptionist / Front Desk", department: "Administration", type: "Full Time" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002B6B] mb-4">Join Our Team</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Build your career with Shristi Jeevan Hospital. We are always looking for compassionate and talented professionals.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#002B6B] mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#0057D9]" />
            Current Openings
          </h3>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#0057D9] transition-colors group">
                <div>
                  <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#0057D9] transition-colors">{job.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                    <span className="bg-blue-50 text-[#0057D9] px-2 py-0.5 rounded-full font-medium">{job.department}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="text-[#0057D9] font-medium flex items-center gap-2 hover:gap-3 transition-all shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-600 mb-4">Don't see a matching role? Send your resume to us anyway!</p>
            <a href="mailto:hr@shristijeevanhospital.com" className="inline-block px-8 py-3 bg-[#002B6B] text-white rounded-full font-medium hover:bg-[#001D4A] transition-colors">
              Email Resume to HR
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
