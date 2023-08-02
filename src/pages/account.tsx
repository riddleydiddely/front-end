import { useSession } from 'next-auth/react';


export default function Account() {
  const { data: session, status } = useSession()
    return   <h1 className='text-black'>Account</h1>
  }
