import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: String,
    role: {
        type: String,
        enum: ['user', 'doctor', 'admin'],
        default: 'user'
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    specialization: String,
    experience: String,
    consultationFee: Number,
    hospital: String,
    availableDays: [String],
    about: String,
    appointmentTime: String,
    gender: String
}, {
    timestamps: true
});

export const UserModel =
    mongoose.models.User || mongoose.model("User", userSchema);