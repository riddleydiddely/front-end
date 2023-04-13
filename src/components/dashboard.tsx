import { AccountChart } from './accountChart';
import { DashboardData } from '../mockData/chartMockData';
import Link from 'next/link'

export default function Dashboard() {

  return (
    <div className="flex bg-white rounded-xl py-20 justify-center overflow-y-scroll">
      <div className="grid gap-x-8 gap-y-4
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
        
        ">
        {(DashboardData.concat(DashboardData, DashboardData)).map(
          (dashboard, key) =>
            <div key={key} className="py-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <Link href={dashboard.url}><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dashboard.title}</h5></Link>
              <p className="font-normal text-gray-700 dark:text-gray-400">{dashboard.subtitle}</p>
              <AccountChart dataSeries={dashboard.data}></AccountChart>
            </div>
        )}
      </div>

    </div>
  )
}
