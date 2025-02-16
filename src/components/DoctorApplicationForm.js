"use client";

import { useState } from "react";
import { addRequest } from "@/actions/requests";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

export default function DoctorApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    specialization: "",
    experience: "",
    consultationFee: "",
    hospital: "",
    appointmentTime: "",
    about: "",
    gender: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.specialization || !formData.experience || !formData.consultationFee || 
        !formData.hospital || !formData.appointmentTime || !formData.about || !formData.gender) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      
      // Convert consultationFee and experience to numbers
      const processedData = {
        ...formData,
        consultationFee: Number(formData.consultationFee),
        experience: Number(formData.experience)
      };

      const response = await addRequest(processedData);
      
      if (response.error) {
        throw new Error(response.error);
      }

      toast({
        title: "Success",
        description: "Application submitted successfully!",
      });

      // Reset form
      setFormData({
        specialization: "",
        experience: "",
        consultationFee: "",
        hospital: "",
        appointmentTime: "",
        about: "",
        gender: ""
      });
    } catch (error) {
      console.error("Application error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div>
        <Select
          value={formData.specialization}
          onValueChange={(value) => handleChange("specialization", value)}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Specialization" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Input
        value={formData.experience}
        onChange={(e) => handleChange("experience", e.target.value)}
        placeholder="Years of Experience"
        type="number"
        min="0"
        required
      />

      <Input
        value={formData.consultationFee}
        onChange={(e) => handleChange("consultationFee", e.target.value)}
        placeholder="Consultation Fee"
        type="number"
        min="0"
        required
      />

      <Input
        value={formData.hospital}
        onChange={(e) => handleChange("hospital", e.target.value)}
        placeholder="Hospital/Clinic Name"
        type="text"
        required
      />

      <Input
        value={formData.appointmentTime}
        onChange={(e) => handleChange("appointmentTime", e.target.value)}
        placeholder="Appointment Time (e.g., 9:00 AM - 5:00 PM)"
        type="text"
        required
      />

      <Textarea
        value={formData.about}
        onChange={(e) => handleChange("about", e.target.value)}
        placeholder="About yourself and your practice"
        required
      />

      <Select
        value={formData.gender}
        onValueChange={(value) => handleChange("gender", value)}
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
} 