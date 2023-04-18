// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"; 
import { getToken } from 'next-auth/jwt';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const secret = process.env.NEXT_AUTH_SECRET;
  const token = await getToken({
    req: req
  });

  console.log("=============req=============")
  console.log(req)
  return res.redirect(307, "/connections")
}
