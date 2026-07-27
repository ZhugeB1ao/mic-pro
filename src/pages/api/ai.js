import { getAiData } from "@/services/ai";

export default function handler(req, res) {
  res.status(200).json(getAiData());
}
