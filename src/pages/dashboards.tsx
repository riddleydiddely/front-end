
import Dashboard from '../components/dashboard';
import { useSession } from "next-auth/react"

export default function Dashboards() {
  const { data: session, status } = useSession()

    return <Dashboard></Dashboard>
    
  }
  