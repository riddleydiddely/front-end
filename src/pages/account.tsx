
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import { Layout } from "../components/layout";

export default function Account() {
  const { data: session, status } = useSession()
    return   <h1 className='text-black'>Account</h1>
  }