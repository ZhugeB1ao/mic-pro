import { agencyData } from "@/data/agency";

export function getAgencyData() {
  return agencyData;
}

export function getAgencyBlogs() {
  return agencyData?.blogs?.items || [];
}

export function getAgencyBlogPostById(id) {
  const blogs = agencyData?.blogs?.items || [];
  return blogs.find((item) => String(item.id) === String(id)) || null;
}
