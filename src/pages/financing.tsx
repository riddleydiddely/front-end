
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import { Layout } from "../components/layout";

export default function Financing() {
  const { data: session, status } = useSession()
    return  <h1 className='text-black'>Financing</h1>
  }