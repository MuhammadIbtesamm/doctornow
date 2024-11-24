"use server"


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
  
    return await response.json(); // Ensure this returns a plain object
  }
  


