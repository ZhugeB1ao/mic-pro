import { getAgencyData } from "@/services/agency";

export default function handler(req, res) {
  res.status(200).json(getAgencyData());
}
