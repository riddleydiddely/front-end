// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"; 
import { getToken } from 'next-auth/jwt';
import { useRouter } from 'next/router';

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
  return res.redirect(307, "https://apps.fortnox.se/oauth-v1/auth?client_id=GQgPFNBPkuoB&redirect_uri=https://puls-frontend-lgqztuoqea-ew.a.run.app/&scope=bookkeeping%20salary&state=somestate123&access_type=offline&response_type=code&account_type=service")
}
