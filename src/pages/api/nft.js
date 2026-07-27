import { getNftData } from "@/services/nft";

export default function handler(req, res) {
  res.status(200).json(getNftData());
}
