import doctor1Img from '../assets/images/regenerated_image_1778306559046.jpg';
import doctor2Img from '../assets/images/regenerated_image_1778308041873.jpg';
import doctor3Img from '../assets/images/regenerated_image_1778308123798.jpg';
import doctor4Img from '../assets/images/regenerated_image_1778328656459.jpg';
import doctor5Img from '../assets/images/regenerated_image_1778328995493.jpg';
import doctorPrachiImg from '../assets/images/regenerated_image_1778577353161.png';
import doctor12Img from '../assets/images/regenerated_image_1778411512866.jpg';
import doctor14Img from '../assets/images/regenerated_image_1778412865947.jpg';
import doctor9Img from '../assets/images/regenerated_image_1778569457466.png';
import doctor11Img from '../assets/images/regenerated_image_1778569483649.png';
import doctor10Img from '../assets/images/regenerated_image_1778577239683.png';

export interface Doctor {
  id: string;
  name: string;
  department: string;
  qualification: string;
  specialization: string;
  image: string;
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-amit-gaurav",
    name: "Dr. Amit Gaurav",
    department: "General Medicine",
    qualification: "MBBS, MD(Medicine)",
    specialization: "Physician",
    image: doctor1Img,
  },
  {
    id: "dr-rahul-kumar",
    name: "Dr. Rahul Kumar",
    department: "General Medicine",
    qualification: "MBBS, MD(Medicine)",
    specialization: "Physician",
    image: doctor2Img,
  },
  {
    id: "dr-sweta-mishra",
    name: "Dr. Sweta Mishra",
    department: "OBS & GYNAE",
    qualification: "MBBS, MS (Obs. & Gynae)",
    specialization: "Gynecologist",
    image: doctor3Img,
  },
  {
    id: "dr-prachi",
    name: "Dr. Prachi",
    department: "OBS & GYNAE",
    qualification: "MBBS, MS (Obs. & Gynae)",
    specialization: "Gynecologist",
    image: doctorPrachiImg,
  },
  {
    id: "dr-saurav-kumar",
    name: "Dr. Saurav Kumar",
    department: "Orthopedics",
    qualification: "MBBS, MS(ortho)",
    specialization: "Orthopedic Surgeon",
    image: doctor4Img,
  },
  {
    id: "dr-shivam-anand",
    name: "Dr. Shivam Anand",
    department: "Orthopedics",
    qualification: "MBBS, MS(ortho)",
    specialization: "Orthopedic Surgeon",
    image: "https://ui-avatars.com/api/?name=Dr+Shivam+Anand&background=0057D9&color=fff&size=400",
  },
  {
    id: "dr-sk-mishra",
    name: "Dr. S K Mishra",
    department: "General Surgery",
    qualification: "MBBS, MS",
    specialization: "Surgeon",
    image: doctor5Img,
  },
  {
    id: "dr-santosh",
    name: "Dr. Santosh",
    department: "General Surgery",
    qualification: "MBBS, MS (Gen & Lapro)",
    specialization: "Surgeon",
    image: "https://ui-avatars.com/api/?name=Dr+Santosh&background=0057D9&color=fff&size=400",
  },
  {
    id: "dr-ravi-kumar",
    name: "Dr. Ravi Kumar",
    department: "General Surgery",
    qualification: "MBBS, MS (Gen & Lapro)",
    specialization: "Surgeon",
    image: doctor9Img,
  },
  {
    id: "dr-pk-jha",
    name: "Dr. P.K Jha",
    department: "Neurology",
    qualification: "MBBS, MS MCH(NEURO)",
    specialization: "Neuro Surgeon",
    image: doctor10Img,
  },
  {
    id: "dr-satyam-mohan",
    name: "Dr. Satyam Mohan",
    department: "Nephrology",
    qualification: "MBBS, MD (NEURO)",
    specialization: "Nephrology",
    image: doctor11Img,
  },
  {
    id: "dr-anurag",
    name: "Dr. Anurag",
    department: "Anaesthesia",
    qualification: "MD (Anaesthesia)",
    specialization: "Anaesthetist",
    image: "https://ui-avatars.com/api/?name=Dr+Anurag&background=0057D9&color=fff&size=400",
  },
  {
    id: "dr-jitendra-kumar",
    name: "Dr. Jitendra Kumar",
    department: "Dental",
    qualification: "B.D.S",
    specialization: "Dentist",
    image: doctor12Img,
  },
  {
    id: "dr-bidhancharndra-singh",
    name: "Dr. Bidhancharndra Singh",
    department: "EYE",
    qualification: "MBBS, MS",
    specialization: "Eye Specialist",
    image: "https://ui-avatars.com/api/?name=Dr+Bidhancharndra+Singh&background=0057D9&color=fff&size=400",
  },
  {
    id: "dr-joyoto-pd-singh",
    name: "Dr. Joyoto PD Singh",
    department: "Physiotherapist",
    qualification: "B.P.T (Bachelor of Physiotherapy)",
    specialization: "Physiotherapist",
    image: doctor14Img,
  }
];

