import { getEducationData } from "@/services/education";

export default function handler(req, res) {
  res.status(200).json(getEducationData());
}
