"use server"

import { revalidatePath } from "next/cache";

export async function addRequest(data) {
    let  response = await fetch(`${process.env.BASE_URI}api/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error("Failed to submit request.");
    }
  
    return await response.json();
  }
  
  export async function getRequest(status) {
    try {
      // Fetch data from the API
      const response = await fetch(
        `${process.env.BASE_URI}api/requests?status=${status ? status : ""}`
      );
  
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON data
      const data = await response.json();
  
      // Return the parsed data
      return data;
    } catch (error) {
      // Handle any errors that occur during the fetch or JSON parsing
      console.error("Error in getRequest:", error);
      return { requests: [] }; 
    }
  }
  export async function getSingleRequest(id) {
    let request = await fetch(`${process.env.BASE_URI}api/requests/${id}`);
    request = request.json();
  
    return request;
  }
  
  export async function updateRequest(id, status) {
    let requests = await fetch(`${process.env.BASE_URI}api/requests`, {
      method: "PUT",
      body: JSON.stringify({ id, status }),
    });
    requests = requests.json();
    revalidatePath("/admin/requests");
    return requests;
  }

