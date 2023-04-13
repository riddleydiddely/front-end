
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import { Layout } from "../components/layout";

export default function About() {
  const { data: session, status } = useSession({required:true})
    return   <h1 className='text-black'>About</h1>
  }