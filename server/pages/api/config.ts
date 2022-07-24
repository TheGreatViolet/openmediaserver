import { getConfig, updateConfig } from "functions/config";
import { NextApiRequest, NextApiResponse } from "next";
import { MediaServerConfig } from "types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    getConfig().then(config => {
      res.status(200).json(config);
    });

  } else if (req.method === "POST") {
    const newConfig = req.body as MediaServerConfig;

    updateConfig(newConfig).then(() => {
      res.status(200);
    }).catch(e => {
      if (e instanceof TypeError) {
        res.status(400).send(e.message);
      } else {
        res.status(500).send(e.message);
      }
    });
  }
}