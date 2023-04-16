
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import IntegrationCard from '../components/integration/IntegrationCard';
import { Layout } from "../components/layout";
import { Systems } from '../mockData/IntegrationMockData';

export default function Connections() {
  const { data: session, status } = useSession({required:true})
  return   <div className="grid gap-x-8 gap-y-4
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-3">
      {Systems.map((system, index) => (IntegrationCard(system, index)))}

  </div>
}