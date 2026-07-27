import { getSportsData } from "@/services/sports";

export default function handler(req, res) {
  res.status(200).json(getSportsData());
}
