
import Dashboard from '../components/dashboard';
import { useSession } from "next-auth/react"

export default function Dashboards() {
  const { data: session, status } = useSession({required:true})

    return <Dashboard></Dashboard>
    
  }
  