import { auth } from "../../../../../auth";
import connectDB from "@/lib/connectDB";
import { UserModel } from "@/lib/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    
    const session = await auth();
    
    // More detailed session check
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Please sign in to submit your application" },
        { status: 401 }
      );
    }

    const formData = await req.json();
    
    // Find existing user
    let user = await UserModel.findOne({ email: session.user.email });

    if (!user) {
      // Create new user if doesn't exist
      user = await UserModel.create({
        email: session.user.email,
        firstname: formData.name?.split(' ')[0] || '',
        lastname: formData.name?.split(' ')[1] || '',
        picture: formData.image,
        role: 'user'
      });
    }

    // Update user with doctor information
    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      {
        role: "doctor",
        isApproved: false,
        specialization: formData.specialization,
        experience: formData.experience,
        consultationFee: formData.consultationFee,
        hospital: formData.hospital,
        availableDays: ['Monday', 'Wednesday', 'Friday'],
        about: formData.about,
        appointmentTime: formData.appointmentTime,
        gender: formData.gender,
        // Ensure user data is preserved
        firstname: user.firstname || formData.name?.split(' ')[0] || '',
        lastname: user.lastname || formData.name?.split(' ')[1] || '',
        picture: user.picture || formData.image
      },
      { 
        new: true, 
        runValidators: true 
      }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: "Failed to update user information" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Doctor application submitted successfully",
      user: updatedUser
    });

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { 
        error: "Server error: " + (error.message || "Unknown error occurred"),
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 