import { AccountChart } from './accountChart';
import { DashboardData } from '../mockData/chartMockData';


export default function Dashboard() {

  const dataSeries: ApexAxisChartSeries = [{
    name: '3000',
    data: [100, 100, 100, 100, 90, 75, 70]
  }
  ]

  return (
    <div className="flex bg-white rounded-xl py-10  justify-center overflow-y-scroll">

      {/* <a href="#" className="py-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </a>

      <a href="#" className="py-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </a> */}



      <div className="grid gap-x-8 gap-y-4
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3">
        {DashboardData.map(
          (dashboard, index) =>
            <div className="py-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <a href={dashboard.url}><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dashboard.title}</h5></a>
              <p className="font-normal text-gray-700 dark:text-gray-400">{dashboard.subtitle}</p>
              {/* <ReactApexChart options={options} series={series} type="area" height={350} /> */}
              <AccountChart dataSeries={dashboard.data}></AccountChart>
              {/* <ReChart data={data}></ReChart> */}
            </div>
        )}
      </div>

    </div>
  )
}
