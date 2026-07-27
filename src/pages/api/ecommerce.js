import { getEcommerceData } from "@/services/ecommerce";

export default function handler(req, res) {
  res.status(200).json(getEcommerceData());
}
