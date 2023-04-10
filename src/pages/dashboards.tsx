
import { Fragment } from 'react';
import Dashboard from '../components/dashboard';
import { Layout } from "../components/layout";
import { useSession, signIn, signOut } from "next-auth/react"

export default function About() {
  const { data: session } = useSession()

    return <Dashboard></Dashboard>
    
  }
  