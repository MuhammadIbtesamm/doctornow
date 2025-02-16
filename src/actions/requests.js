"use server"

import { auth } from "../../auth";
import { revalidatePath } from "next/cache";
import { headers } from 'next/headers';

export async function addRequest(data) {
  try {
    const session = await auth();
    
    // More detailed session check
    if (!session?.user?.email) {
      throw new Error("Please sign in to submit your application");
    }

    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    // Include session token in the request
    const response = await fetch(`${protocol}://${host}/api/doctors/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        email: session.user.email,
        name: session.user.name,
        image: session.user.image
      }),
      credentials: 'include'
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to submit application");
    }

    revalidatePath("/profile");
    revalidatePath("/doctors");
    return result;
  } catch (error) {
    console.error("Error submitting application:", error);
    throw new Error(error.message || "Failed to submit application");
  }
}

export async function getRequest(status) {
  try {
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    const response = await fetch(
      `${protocol}://${host}/api/requests?status=${status || ""}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in getRequest:", error);
    return { requests: [] }; 
  }
}

export async function getSingleRequest(id) {
  try {
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    const response = await fetch(
      `${protocol}://${host}/api/requests/${id}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in getSingleRequest:", error);
    return null;
  }
}

export async function updateRequest(id, status) {
  try {
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    const response = await fetch(`${protocol}://${host}/api/requests`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    revalidatePath("/admin/requests");
    return await response.json();
  } catch (error) {
    console.error("Error in updateRequest:", error);
    throw new Error("Failed to update request");
  }
}

