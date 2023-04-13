
import { useSession } from 'next-auth/react';
import Dashboard from '../components/dashboard';


export default function Home() {
  const { data: session, status } = useSession({required:true})
  return  <Dashboard></Dashboard>
}


