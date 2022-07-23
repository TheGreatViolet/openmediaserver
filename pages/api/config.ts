import { getConfig } from "functions/config";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    getConfig().then(config => {
      res.status(200).json(config);
    });
  }
}