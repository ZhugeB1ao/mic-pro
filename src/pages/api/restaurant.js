import { getRestaurantData } from "@/services/restaurant";

export default function handler(req, res) {
  res.status(200).json(getRestaurantData());
}
