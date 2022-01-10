// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import data from "../../json/projects.json";

type Data = {
  name: string,
  id: number,
  projectUrl: string,
  screenshotUrl: string,
  category: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(data)
}
