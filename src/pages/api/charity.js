import { getCharityData } from "@/services/charity";

export default function handler(req, res) {
  res.status(200).json(getCharityData());
}
