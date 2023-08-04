
import Dashboard from '../components/dashboard';
import ChatBox from '../components/chatBox/chatBox';
import { useSession } from "next-auth/react"

export default function Insights() {
  const { data: session } = useSession()

  return <div>
    <Dashboard></Dashboard>
    <ChatBox session={session}></ChatBox>
  </div>



}
