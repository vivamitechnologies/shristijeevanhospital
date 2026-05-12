import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, updateDoc, doc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { 
  Lock, Mail, Users, CalendarDays, CheckCircle, Clock, 
  LayoutDashboard, Image as ImageIcon, UserPlus, LogOut, Trash2, Plus, X, Menu, Stethoscope, Edit
} from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { staticGalleryImages } from '../components/Gallery';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('info@shristijeevanhospital.com');
  const [password, setPassword] = useState('Shristi@2026');
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState('');
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [appointments, setAppointments] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);

  // Gallery Modal
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [editingGalleryId, setEditingGalleryId] = useState<string | null>(null);
  const [galleryUrl, setGalleryUrl] = useState('');
  const [galleryCaption, setGalleryCaption] = useState('');
  
  // Doctor Modal
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [editingDoctorId, setEditingDoctorId] = useState<string | null>(null);
  const [doctorForm, setDoctorForm] = useState({ name: '', department: '', qualification: '', specialization: '', image: '', description: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    
    // Fetch Appointments
    const unsubsApt = onSnapshot(query(collection(db, 'appointments'), orderBy('createdAt', 'desc')), (snapshot) => {
      setAppointments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Fetch Gallery
    const unsubsGal = onSnapshot(query(collection(db, 'gallery'), orderBy('createdAt', 'desc')), (snapshot) => {
      setGallery(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Fetch Doctors
    const unsubsDoc = onSnapshot(query(collection(db, 'doctors'), orderBy('createdAt', 'desc')), (snapshot) => {
      setDoctors(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubsApt(); unsubsGal(); unsubsDoc(); };
  }, [user]);

  const handleGoogleLogin = async () => {
    setLoginError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setLoginError(err.message || 'Failed to login with Google');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setLoginError(err.message || 'Failed to login');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // Appointment Actions
  const updateAptStatus = async (id: string, newStatus: string) => {
    await updateDoc(doc(db, 'appointments', id), { status: newStatus });
  };
  const deleteAppointment = async (id: string) => {
    if(window.confirm('Are you sure you want to delete this appointment?')) await deleteDoc(doc(db, 'appointments', id));
  };

  // Gallery Actions
  const handleAddGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryUrl) return;
    if (editingGalleryId) {
      await updateDoc(doc(db, 'gallery', editingGalleryId), {
        url: galleryUrl,
        caption: galleryCaption,
        updatedAt: serverTimestamp()
      });
    } else {
      await addDoc(collection(db, 'gallery'), {
        url: galleryUrl,
        caption: galleryCaption,
        createdAt: serverTimestamp()
      });
    }
    setGalleryUrl('');
    setGalleryCaption('');
    setEditingGalleryId(null);
    setIsGalleryModalOpen(false);
  };
  const editGallery = (img: any) => {
    setGalleryUrl(img.url || '');
    setGalleryCaption(img.caption || '');
    setEditingGalleryId(img.id);
    setIsGalleryModalOpen(true);
  };
  const deleteGallery = async (id: string) => {
    if(window.confirm('Are you sure you want to delete this image?')) await deleteDoc(doc(db, 'gallery', id));
  };

  // Doctor Actions
  const handleAddDoctor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDoctorId) {
      await updateDoc(doc(db, 'doctors', editingDoctorId), {
        ...doctorForm,
        updatedAt: serverTimestamp()
      });
    } else {
      await addDoc(collection(db, 'doctors'), {
        ...doctorForm,
        createdAt: serverTimestamp()
      });
    }
    setDoctorForm({ name: '', department: '', qualification: '', specialization: '', image: '', description: '' });
    setEditingDoctorId(null);
    setIsDoctorModalOpen(false);
  };
  const editDoctor = (docItem: any) => {
    setDoctorForm({ 
      name: docItem.name || '', 
      department: docItem.department || '', 
      qualification: docItem.qualification || '', 
      specialization: docItem.specialization || '', 
      image: docItem.image || '', 
      description: docItem.description || '' 
    });
    setEditingDoctorId(docItem.id);
    setIsDoctorModalOpen(true);
  };
  const deleteDoctor = async (id: string) => {
    if(window.confirm('Are you sure you want to delete this doctor?')) await deleteDoc(doc(db, 'doctors', id));
  };

  if (loading) return <div className="min-h-screen py-24 flex items-center justify-center">Loading...</div>;

  if (!user) {
    return (
      <div className="min-h-screen py-24 bg-slate-50 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-200">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-blue-100 text-[#0057D9] rounded-2xl mx-auto flex items-center justify-center mb-4"><Lock className="w-8 h-8" /></div>
            <h1 className="text-2xl font-bold text-[#002B6B]">Admin Login</h1>
            <p className="text-slate-500 mt-2">Sign in to Hospital Admin Panel</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">{loginError}</div>}
            <div>
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/20" required />
              </div>
            </div>
            <button type="submit" className="w-full py-3 mt-4 bg-[#0057D9] hover:bg-[#0046B0] text-white rounded-xl font-bold transition-colors">Sign In</button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Or continue with</span>
              </div>
            </div>
            <button 
              onClick={handleGoogleLogin} 
              className="w-full py-3 mt-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button onClick={() => setActiveTab('appointments')} className="text-left w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 text-[#0057D9] rounded-xl flex items-center justify-center shrink-0"><CalendarDays className="w-7 h-7" /></div>
          <div><p className="text-slate-500 text-sm font-medium">Total Appointments</p><h3 className="text-2xl font-bold text-[#002B6B]">{appointments.length}</h3></div>
        </button>
        <button onClick={() => setActiveTab('doctors')} className="text-left w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex items-center gap-4">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0"><Stethoscope className="w-7 h-7" /></div>
          <div><p className="text-slate-500 text-sm font-medium">Total Doctors</p><h3 className="text-2xl font-bold text-[#002B6B]">{doctors.length + doctorsData.length}</h3></div>
        </button>
        <button onClick={() => setActiveTab('gallery')} className="text-left w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-center gap-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0"><ImageIcon className="w-7 h-7" /></div>
          <div><p className="text-slate-500 text-sm font-medium">Gallery Images</p><h3 className="text-2xl font-bold text-[#002B6B]">{gallery.length + staticGalleryImages.length}</h3></div>
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
         <h2 className="text-xl font-bold text-[#002B6B] mb-4">Recent Appointments</h2>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-slate-50 border-b text-sm"><th className="py-3 px-4">Patient</th><th className="py-3 px-4">Date</th><th className="py-3 px-4">Status</th></tr></thead>
              <tbody>
                {appointments.slice(0, 5).map(apt => (
                  <tr key={apt.id} className="border-b last:border-0 hover:bg-slate-50">
                    <td className="py-3 px-4"><div>{apt.name}</div><div className="text-xs text-slate-500">{apt.phone}</div></td>
                    <td className="py-3 px-4 text-sm">{apt.date} {apt.timeSlot}</td>
                    <td className="py-3 px-4"><span className={`px-2 py-1 text-xs rounded-full ${apt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{apt.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-xl font-bold text-[#002B6B]">Manage Appointments</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
              <th className="py-4 px-6 font-semibold">Patient Stats</th>
              <th className="py-4 px-6 font-semibold">Department</th>
              <th className="py-4 px-6 font-semibold">Date & Time</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {appointments.map((apt) => (
              <tr key={apt.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-semibold text-[#002B6B]">{apt.name}</div>
                  <div className="text-sm text-slate-500">{apt.phone}</div>
                  {apt.email && <div className="text-xs text-slate-400">{apt.email}</div>}
                  {apt.message && <div className="text-xs text-slate-600 mt-1 italic">"{apt.message}"</div>}
                </td>
                <td className="py-4 px-6 font-medium text-slate-700">{apt.department}</td>
                <td className="py-4 px-6"><div className="text-sm font-medium text-slate-800">{apt.date}</div><div className="text-xs text-slate-500">{apt.timeSlot}</div></td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium capitalize
                    ${apt.status === 'pending' ? 'bg-amber-100 text-amber-800' : apt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : apt.status === 'completed' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                    {apt.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                  <select 
                    value={apt.status || 'pending'} 
                    onChange={e => updateAptStatus(apt.id, e.target.value)}
                    className="text-xs px-2 py-1 rounded-md border border-slate-200 mr-2"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button onClick={() => deleteAppointment(apt.id)} className="text-xs px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-md font-medium"><Trash2 className="w-3 h-3 inline-block" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#002B6B]">Manage Gallery</h2>
        <button onClick={() => { setGalleryUrl(''); setGalleryCaption(''); setEditingGalleryId(null); setIsGalleryModalOpen(true); }} className="px-4 py-2 bg-[#0057D9] text-white rounded-lg flex items-center gap-2"><Plus className="w-4 h-4"/> Add Image</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map(img => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <img src={img.url} alt={img.caption || 'Hospital image'} className="w-full h-40 object-cover" />
            {img.caption && <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 p-2 text-white text-xs truncate">{img.caption}</div>}
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button onClick={() => editGallery(img)} className="bg-slate-100 text-slate-700 p-1.5 rounded-lg hover:bg-slate-200"><Edit className="w-4 h-4"/></button>
               <button onClick={() => deleteGallery(img.id)} className="bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600"><Trash2 className="w-4 h-4"/></button>
            </div>
            <div className="absolute top-2 left-2 flex gap-2">
               <span className="bg-[#0057D9]/80 backdrop-blur-sm text-white font-medium px-2 py-1 text-[10px] rounded flex items-center shrink-0 uppercase tracking-wider shadow-sm">Database</span>
            </div>
          </div>
        ))}
        {staticGalleryImages.map((url, index) => (
          <div key={`static-${index}`} className="relative group rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <img src={url} alt={`Static image ${index + 1}`} className="w-full h-40 object-cover" />
            <div className="absolute top-2 left-2 flex gap-2">
               <span className="bg-slate-100/80 backdrop-blur-sm text-slate-500 font-medium px-2 py-1 text-[10px] rounded flex items-center shrink-0 uppercase tracking-wider shadow-sm">Pre-loaded</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gallery Modal */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4"><h3 className="text-lg font-bold">{editingGalleryId ? 'Edit Image' : 'Add Image'}</h3><button onClick={() => setIsGalleryModalOpen(false)}><X className="w-5 h-5"/></button></div>
            <form onSubmit={handleAddGallery} className="space-y-4">
              <div>
                <label className="text-sm font-semibold">Image (Upload or URL)</label>
                <div className="flex flex-col gap-2 mt-1">
                  <input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => setGalleryUrl(reader.result as string);
                      reader.readAsDataURL(file);
                    }
                  }} className="w-full px-3 py-2 border border-slate-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#0057D9] hover:file:bg-blue-100" />
                  <input type="url" value={galleryUrl.startsWith('data:') ? '' : galleryUrl} onChange={e => setGalleryUrl(e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="Or Image URL" />
                </div>
                {galleryUrl && <img src={galleryUrl} alt="Preview" className="mt-2 h-32 w-full object-cover rounded-lg border border-slate-200" />}
              </div>
              <div><label className="text-sm font-semibold">Caption (Optional)</label><input type="text" value={galleryCaption} onChange={e => setGalleryCaption(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-lg" /></div>
              <button type="submit" className="w-full py-2 bg-[#0057D9] text-white rounded-lg">{editingGalleryId ? 'Update Image' : 'Upload'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderDoctors = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#002B6B]">Manage Doctors</h2>
        <button onClick={() => { setDoctorForm({ name: '', department: '', qualification: '', specialization: '', image: '', description: '' }); setEditingDoctorId(null); setIsDoctorModalOpen(true); }} className="px-4 py-2 bg-[#0057D9] text-white rounded-lg flex items-center gap-2"><UserPlus className="w-4 h-4"/> Add Doctor</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map(docItem => (
          <div key={docItem.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0057D9]/10 text-[#0057D9] text-[10px] font-bold px-2 py-1 rounded-bl-lg">DATABASE</div>
            <img src={docItem.image} alt={docItem.name} className="w-20 h-20 rounded-full object-cover shrink-0 bg-slate-100" />
            <div className="flex-1 min-w-0">
               <h3 className="font-bold text-lg truncate">{docItem.name}</h3>
               <p className="text-sm text-[#0057D9] font-medium">{docItem.specialization}</p>
               <p className="text-xs text-slate-500 mb-2 truncate">{docItem.department}</p>
               <div className="flex gap-2">
                 <button onClick={() => editDoctor(docItem)} className="text-xs bg-slate-100 p-1.5 rounded-md hover:bg-slate-200 text-slate-700"><Edit className="w-3.5 h-3.5" /></button>
                 <button onClick={() => deleteDoctor(docItem.id)} className="text-xs bg-red-50 p-1.5 rounded-md hover:bg-red-100 text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
               </div>
            </div>
          </div>
        ))}
        {doctorsData.map(docItem => (
          <div key={docItem.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 opacity-75 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-bl-lg">PRE-LOADED</div>
            <img src={docItem.image} alt={docItem.name} className="w-20 h-20 rounded-full object-cover shrink-0 bg-slate-100" />
            <div className="flex-1 min-w-0">
               <h3 className="font-bold text-lg truncate">{docItem.name}</h3>
               <p className="text-sm text-[#0057D9] font-medium">{docItem.specialization}</p>
               <p className="text-xs text-slate-500 mb-2 truncate">{docItem.department}</p>
            </div>
          </div>
        ))}
      </div>

       {/* Doctor Modal */}
       {isDoctorModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4"><h3 className="text-lg font-bold">{editingDoctorId ? 'Edit Doctor' : 'Add Doctor'}</h3><button onClick={() => setIsDoctorModalOpen(false)}><X className="w-5 h-5"/></button></div>
            <form onSubmit={handleAddDoctor} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-sm font-semibold">Doctor Name</label><input type="text" required value={doctorForm.name} onChange={e => setDoctorForm({...doctorForm, name: e.target.value})} className="w-full mt-1 px-3 py-2 border rounded-lg" placeholder="Dr. John Doe" /></div>
              <div><label className="text-sm font-semibold">Department (Optional)</label><input type="text" value={doctorForm.department} onChange={e => setDoctorForm({...doctorForm, department: e.target.value})} className="w-full mt-1 px-3 py-2 border rounded-lg" placeholder="Cardiology" /></div>
              <div><label className="text-sm font-semibold">Qualification (Optional)</label><input type="text" value={doctorForm.qualification} onChange={e => setDoctorForm({...doctorForm, qualification: e.target.value})} className="w-full mt-1 px-3 py-2 border rounded-lg" placeholder="MBBS, MD" /></div>
              <div><label className="text-sm font-semibold">Specialization (Optional)</label><input type="text" value={doctorForm.specialization} onChange={e => setDoctorForm({...doctorForm, specialization: e.target.value})} className="w-full mt-1 px-3 py-2 border rounded-lg" placeholder="Cardiologist" /></div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Doctor Image (Upload or URL - Optional)</label>
                <div className="flex flex-col sm:flex-row gap-2 mt-1">
                  <input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => setDoctorForm({...doctorForm, image: reader.result as string});
                      reader.readAsDataURL(file);
                    }
                  }} className="w-full sm:w-1/2 px-3 py-2 border border-slate-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#0057D9] hover:file:bg-blue-100" />
                  <input type="url" value={doctorForm.image.startsWith('data:') ? '' : doctorForm.image} onChange={e => setDoctorForm({...doctorForm, image: e.target.value})} className="w-full sm:w-1/2 px-3 py-2 border rounded-lg" placeholder="Or Image URL" />
                </div>
                {doctorForm.image && <img src={doctorForm.image} alt="Preview" className="mt-2 h-20 w-20 object-cover rounded-lg border border-slate-200" />}
              </div>
              <div className="md:col-span-2"><label className="text-sm font-semibold">Description (Optional)</label><textarea rows={3} value={doctorForm.description} onChange={e => setDoctorForm({...doctorForm, description: e.target.value})} className="w-full mt-1 px-3 py-2 border rounded-lg resize-none" placeholder="Brief description..." /></div>
              <div className="md:col-span-2"><button type="submit" className="w-full py-2.5 bg-[#0057D9] text-white rounded-lg font-bold">{editingDoctorId ? 'Update Doctor' : 'Save Doctor'}</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row pt-16 mt-0">
      
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden bg-[#002B6B] text-white p-4 flex justify-between items-center z-20">
         <span className="font-bold">Admin Panel</span>
         <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={isSidebarOpen}
            aria-controls="admin-sidebar"
            className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
         >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
         </button>
      </div>

      {/* Sidebar */}
      <aside 
         id="admin-sidebar"
         className={`fixed inset-y-0 left-0 w-64 bg-[#002B6B] text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-30 md:static md:shrink-0 flex flex-col`}
         aria-label="Admin sidebar"
      >
         <div className="p-6 border-b border-blue-800 flex items-center gap-3">
           <LayoutDashboard className="w-6 h-6 text-blue-400" aria-hidden="true" />
           <h2 className="text-xl font-bold">Admin Panel</h2>
         </div>
         
         <div className="flex-1 overflow-y-auto">
           <nav className="p-4" aria-label="Main navigation">
             <ul className="space-y-2" role="list">
               {[
                 { id: 'dashboard', icon: <LayoutDashboard className="w-5 h-5"/>, label: 'Dashboard' },
                 { id: 'appointments', icon: <CalendarDays className="w-5 h-5"/>, label: 'Appointments' },
                 { id: 'gallery', icon: <ImageIcon className="w-5 h-5"/>, label: 'Gallery' },
                 { id: 'doctors', icon: <Stethoscope className="w-5 h-5"/>, label: 'Doctors' },
               ].map(item => (
                 <li key={item.id}>
                   <button 
                     onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }} 
                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === item.id ? 'bg-[#0057D9]' : 'hover:bg-blue-900/50'}`}
                     aria-current={activeTab === item.id ? 'page' : undefined}
                   >
                     <span aria-hidden="true">{item.icon}</span>
                     <span className="font-medium">{item.label}</span>
                   </button>
                 </li>
               ))}
             </ul>
           </nav>
         </div>
         
         <div className="p-4 border-t border-blue-800 mt-auto">
            <button 
              onClick={handleLogout} 
              className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-red-500/10 hover:text-red-200 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Sign out"
            >
              <LogOut className="w-5 h-5" aria-hidden="true" /> 
              <span className="font-medium">Sign Out</span>
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto w-full h-[calc(100vh-4rem)] md:h-screen">
         <div className="max-w-6xl mx-auto">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'appointments' && renderAppointments()}
            {activeTab === 'gallery' && renderGallery()}
            {activeTab === 'doctors' && renderDoctors()}
         </div>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
}
