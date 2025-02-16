import connectDB from "./connectDB";
import { UserModel } from "./models/UserModel";

export const categories = [
    "Allergist/Immunologist",
    "Anesthesiologist",
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Geriatrician",
    "Hematologist",
    "Infectious Disease Specialist",
    "Internal Medicine Specialist",
    "Nephrologist",
    "Neurologist",
    "Obstetrician/Gynecologist (OB/GYN)",
    "Oncologist",
    "Ophthalmologist",
    "Orthopedic Surgeon",
    "Otolaryngologist (ENT Specialist)",
    "Pediatrician",
    "Plastic Surgeon",
    "Psychiatrist",
    "Pulmonologist",
    "Radiologist",
    "Rheumatologist",
    "Sports Medicine Specialist",
    "Surgeon (General)",
    "Urologist",
    "Vascular Surgeon",
  ];
  
  export const doctors = [
    {
      name: "Dr. Ayesha Khan",
      appointmentTime: "9:00 AM - 12:00 PM",
      fees: 150,
      category: "Cardiologist",
      hospital: "Karachi Heart Hospital",
      gender: "Female",
      id: 1,
    },
    {
      name: "Dr. Ahmed Ali",
      appointmentTime: "2:00 PM - 6:00 PM",
      fees: 200,
      category: "Dermatologist",
      hospital: "Skin Care Clinic Lahore",
      gender: "Male",
      id: 2,
    },
    {
      name: "Dr. Sara Malik",
      appointmentTime: "10:00 AM - 1:00 PM",
      fees: 180,
      category: "Pediatrician",
      hospital: "Children's Medical Center Islamabad",
      gender: "Female",
      id: 3,
    },
    {
      name: "Dr. Imran Siddiqui",
      appointmentTime: "11:00 AM - 3:00 PM",
      fees: 250,
      category: "Orthopedic Surgeon",
      hospital: "OrthoCare Hospital Lahore",
      gender: "Male",
      id: 4,
    },
    {
      name: "Dr. Fatima Raza",
      appointmentTime: "3:00 PM - 7:00 PM",
      fees: 220,
      category: "Psychiatrist",
      hospital: "Mental Wellness Center Karachi",
      gender: "Female",
      id: 5,
    },
    {
      name: "Dr. Hassan Javed",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 300,
      category: "Oncologist",
      hospital: "Cancer Care Hospital Lahore",
      gender: "Male",
      id: 6,
    },
    {
      name: "Dr. Noor Fatima",
      appointmentTime: "1:00 PM - 4:00 PM",
      fees: 170,
      category: "Allergist/Immunologist",
      hospital: "Allergy Relief Center Islamabad",
      gender: "Female",
      id: 7,
    },
    {
      name: "Dr. Usman Shah",
      appointmentTime: "2:00 PM - 5:00 PM",
      fees: 160,
      category: "Gastroenterologist",
      hospital: "Digestive Health Clinic Karachi",
      gender: "Male",
      id: 8,
    },
    {
      name: "Dr. Anam Qureshi",
      appointmentTime: "9:00 AM - 12:00 PM",
      fees: 190,
      category: "Ophthalmologist",
      hospital: "Vision Care Institute Lahore",
      gender: "Female",
      id: 9,
    },
    {
      name: "Dr. Tariq Khan",
      appointmentTime: "10:00 AM - 2:00 PM",
      fees: 210,
      category: "Urologist",
      hospital: "Men's Health Clinic Karachi",
      gender: "Male",
      id: 10,
    },
    {
      name: "Dr. Maryam Abbas",
      appointmentTime: "1:00 PM - 6:00 PM",
      fees: 180,
      category: "Rheumatologist",
      hospital: "Arthritis Relief Center Islamabad",
      gender: "Female",
      id: 11,
    },
    {
      name: "Dr. Asad Iqbal",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 270,
      category: "Pulmonologist",
      hospital: "Lung Care Hospital Karachi",
      gender: "Male",
      id: 12,
    },
  ];
  
  export const currentUser = {
    name: "Bilal",
    role: "doctor",
    email: "bilal@gmail.com",
  };
  
  export const appointments = [
    {
      user: {
        name: "Ali Hassan",
        email: "ali.hassan@example.com",
      },
      appointmentTime: "9:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-01",
      doctor: {
        name: "Dr. Ayesha Khan",
        hospital: "Karachi Heart Hospital",
      },
    },
    {
      user: {
        name: "Amna Tariq",
        email: "amna.tariq@example.com",
      },
      appointmentTime: "2:15 PM",
      status: "Pending",
      appointmentDate: "2024-11-03",
      doctor: {
        name: "Dr. Ahmed Ali",
        hospital: "Skin Care Clinic Lahore",
      },
    },
    {
      user: {
        name: "Hamza Ahmed",
        email: "hamza.ahmed@example.com",
      },
      appointmentTime: "10:45 AM",
      status: "Cancelled",
      appointmentDate: "2024-11-05",
      doctor: {
        name: "Dr. Sara Malik",
        hospital: "Children's Medical Center Islamabad",
      },
    },
    {
      user: {
        name: "Sana Iqbal",
        email: "sana.iqbal@example.com",
      },
      appointmentTime: "11:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-08",
      doctor: {
        name: "Dr. Imran Siddiqui",
        hospital: "OrthoCare Hospital Lahore",
      },
    },
    {
      user: {
        name: "Danish Farooq",
        email: "danish.farooq@example.com",
      },
      appointmentTime: "3:00 PM",
      status: "Pending",
      appointmentDate: "2024-11-09",
      doctor: {
        name: "Dr. Fatima Raza",
        hospital: "Mental Wellness Center Karachi",
      },
    },
    {
      user: {
        name: "Nida Ali",
        email: "nida.ali@example.com",
      },
      appointmentTime: "8:15 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-12",
      doctor: {
        name: "Dr. Hassan Javed",
        hospital: "Cancer Care Hospital Lahore",
      },
    },
    {
      user: {
        name: "Omer Siddiqui",
        email: "omer.siddiqui@example.com",
      },
      appointmentTime: "2:30 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-15",
      doctor: {
        name: "Dr. Noor Fatima",
        hospital: "Allergy Relief Center Islamabad",
      },
    },
    {
      user: {
        name: "Faisal Malik",
        email: "faisal.malik@example.com",
      },
      appointmentTime: "9:45 AM",
      status: "Cancelled",
      appointmentDate: "2024-11-18",
      doctor: {
        name: "Dr. Anam Qureshi",
        hospital: "Vision Care Institute Lahore",
      },
    },
    {
      user: {
        name: "Zainab Raza",
        email: "zainab.raza@example.com",
      },
      appointmentTime: "1:00 PM",
      status: "Pending",
      appointmentDate: "2024-11-20",
      doctor: {
        name: "Dr. Tariq Khan",
        hospital: "Men's Health Clinic Karachi",
      },
    },
    {
      user: {
        name: "Saad Ahmed",
        email: "saad.ahmed@example.com",
      },
      appointmentTime: "11:00 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-23",
      doctor: {
        name: "Dr. Maryam Abbas",
        hospital: "Arthritis Relief Center Islamabad",
      },
    },
  ];
  
// Update the staticDoctors array
const staticDoctors = doctors.map((doc, index) => ({
  id: doc.id,
  name: doc.name,
  firstname: doc.name.split(' ')[1],
  lastname: doc.name.split(' ')[2] || '',
  picture: '/default-avatar.png',
  specialization: doc.category,
  experience: '5+',
  consultationFee: doc.fees,
  hospital: doc.hospital,
  availableDays: ['Monday', 'Wednesday', 'Friday'],
  about: `Experienced ${doc.category} at ${doc.hospital}`,
  appointmentTime: doc.appointmentTime,
  gender: doc.gender,
  isApproved: true,
  role: 'doctor'
}));

export async function getDoctors() {
  try {
    await connectDB();
    // Get all approved doctors from the database
    const dbDoctors = await UserModel.find({ 
      role: "doctor", 
      isApproved: true 
    });

    // Transform database doctors to match the required format
    const formattedDbDoctors = dbDoctors.map(doc => ({
      _id: doc._id.toString(),
      firstname: doc.firstname || doc.firstName,
      lastname: doc.lastname || doc.lastName,
      picture: doc.picture,
      specialization: doc.specialization,
      experience: doc.experience || '0',
      consultationFee: doc.consultationFee || 0,
      hospital: doc.hospital || 'Not specified',
      availableDays: doc.availableDays || ['Monday', 'Wednesday', 'Friday'],
      about: doc.about || `${doc.specialization} specialist`,
      appointmentTime: doc.appointmentTime || '9:00 AM - 5:00 PM',
      gender: doc.gender,
      isApproved: true,
      role: 'doctor'
    }));
    
    // Combine database doctors with static doctors
    // Use static doctors only if no database doctors exist
    const allDoctors = formattedDbDoctors.length > 0 
      ? formattedDbDoctors 
      : staticDoctors;

    return allDoctors;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return staticDoctors; // Fallback to static data if database fails
  }
}

export async function getDoctorById(id) {
  try {
    await connectDB();
    const doctor = await UserModel.findOne({ 
      _id: id, 
      role: "doctor", 
      isApproved: true 
    });
    
    if (doctor) {
      // Format database doctor
      return {
        _id: doctor._id.toString(),
        firstname: doctor.firstname || doctor.firstName,
        lastname: doctor.lastname || doctor.lastName,
        picture: doctor.picture,
        specialization: doctor.specialization,
        experience: doctor.experience || '0',
        consultationFee: doctor.consultationFee || 0,
        hospital: doctor.hospital || 'Not specified',
        availableDays: doctor.availableDays || ['Monday', 'Wednesday', 'Friday'],
        about: doctor.about || `${doctor.specialization} specialist`,
        appointmentTime: doctor.appointmentTime || '9:00 AM - 5:00 PM',
        gender: doctor.gender,
        isApproved: true,
        role: 'doctor'
      };
    }
    
    // If not found in database, look in static data
    const staticDoctor = staticDoctors.find(doc => doc.id.toString() === id);
    return staticDoctor || null;
  } catch (error) {
    console.error("Error fetching doctor:", error);
    // Look in static data as fallback
    const staticDoctor = staticDoctors.find(doc => doc.id.toString() === id);
    return staticDoctor || null;
  }
}

export async function applyForDoctor(userId, doctorData) {
  try {
    await connectDB();
    // Update user to become a doctor
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        role: "doctor",
        isApproved: false, // Requires admin approval
        specialization: doctorData.specialization,
        experience: doctorData.experience,
        consultationFee: doctorData.consultationFee,
        hospital: doctorData.hospital,
        availableDays: doctorData.availableDays || ['Monday', 'Wednesday', 'Friday'],
        about: doctorData.about,
        appointmentTime: doctorData.appointmentTime,
        gender: doctorData.gender
      },
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error("Error applying for doctor:", error);
    return null;
  }
}

// Add function to approve doctor applications
export async function approveDoctorApplication(userId) {
  try {
    await connectDB();
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { isApproved: true },
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error("Error approving doctor application:", error);
    return null;
  }
}

// Add function to get pending doctor applications
export async function getPendingDoctorApplications() {
  try {
    await connectDB();
    const pendingDoctors = await UserModel.find({ 
      role: "doctor", 
      isApproved: false 
    });
    return JSON.parse(JSON.stringify(pendingDoctors));
  } catch (error) {
    console.error("Error fetching pending applications:", error);
    return [];
  }
}
  