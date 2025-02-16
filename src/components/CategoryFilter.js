"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (value) => {
    if (value === "all") {
      router.push("/doctors");
    } else {
      router.push(`/doctors?specialty=${value}`);
    }
  };

  return (
    <Select
      onValueChange={handleCategoryChange}
      defaultValue={searchParams.get("specialty") || "all"}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Specialty" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Specialties</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category.toLowerCase()}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 