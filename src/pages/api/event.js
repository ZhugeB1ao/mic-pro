import { getEventData } from "@/services/event";

export default function handler(req, res) {
  res.status(200).json(getEventData());
}
