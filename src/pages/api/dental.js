import { getDentalData } from "@/services/dental";

export default function handler(req, res) {
  res.status(200).json(getDentalData());
}
