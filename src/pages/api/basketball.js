import { getBasketballData } from "@/services/basketball";

export default function handler(req, res) {
  res.status(200).json(getBasketballData());
}
