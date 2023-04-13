
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import { Layout } from "../components/layout";

export default function Settings() {
  const { data: session, status } = useSession({required:true})
    return <h1 className='justify-center items-center'>Settings</h1>
  }