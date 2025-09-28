import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    // id: { type: String, required: true, unique: true },
    name: { type: string, required: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, required: true },
    Image: { type: string, required: true },
    speciality: { type: string, required: true },
    degree: { type: string, required: true },
    experience: { type: string, required: true },
    about: { type: string, required: true },
    available: { type: Boolean, required: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const Doctor = mongoose.models.doctor || mongoose.model("Doctor", doctorSchema);

export default DoctorModel;
