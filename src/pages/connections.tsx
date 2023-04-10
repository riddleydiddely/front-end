
import { Fragment } from 'react';
import IntegrationCard from '../components/integration/IntegrationCard';
import { Layout } from "../components/layout";
import { Systems } from '../mockData/IntegrationMockData';

export default function Connections() {
  return <div className="flex bg-white rounded-xl py-10 justify-center overflow-y-scroll">
  <div className="grid gap-x-8 gap-y-4
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-3">
  
  {
    Systems.map((system) => (IntegrationCard(system)))
  }
  </div>
  </div>
}