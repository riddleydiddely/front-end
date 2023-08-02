
import { useSession } from 'next-auth/react';


export default function Settings() {
  const { data: session, status } = useSession()
    return <h1 className='justify-center items-center'>Settings</h1>
  }
