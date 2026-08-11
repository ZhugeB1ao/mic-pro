import { getEcommerceData } from "@/services/ecommerce";

export default async function handler(req, res) {
  const data = await getEcommerceData();
  res.status(200).json(data);
}
