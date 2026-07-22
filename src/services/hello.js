import { axios } from "axios";

export async function getHello() {
  try {
    const response = await axios.get("/api/hello");
    return response.data;
  } catch (error) {
    console.error("Error fetching hello:", error);
    throw error;
  }
}