import { AccountChart } from './accountChart';
import {  MockRevenueData, statsRevenue, totalReceivables } from '../mockData/mockDashboardData/MockRevenueData';
import Link from 'next/link'
import { Fragment, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { IDashboard, MockFeesData, statsFees, totalFees } from '../mockData/mockDashboardData/MockFeesData';
import { StatsData } from '@/components/types/StatsData';
import Tabs, {Tab} from "@/components/src/components/common/tabs";
import {
    MockReconciliationData, statsReconciliation,
    totalReconciliation
} from "@/components/src/mockData/mockDashboardData/MockReconciliationData";

const tabs: Tab[] = [
    { id: "reconciliation", button_name: "reconciliation"},
    { id: "revenue", button_name: "revenue"},
    { id: "fees", button_name: "fees" },
    { id: "refund", button_name: "refund" },
    { id: "disputes", button_name: "disputes" },
    { id: "returns", button_name: "returns" },
    { id: "chargeback", button_name: "chargeback", disabled: true },
]

function getStats(data: StatsData[]) {
  return (
    <div className="stats shadow flex align-middle justify-center my-10   ">
      {data.map((element: StatsData, key:number) => (
        <div key={key} className="stat ">
          <div className="stat-figure text-riddle-palette-dark-purple">
            {element.svg}
          </div>
          <div className="stat-title">{element.title}</div>
          <div className="stat-value">{element.value}</div>
          <div className="stat-desc">{element.desc}</div>
        </div>
      )
      )}
    </div>)
}
//
// function getTabs(currentTab: string, setCurrentTab: Function) {
//   return (
//     <div className="btn-group lg:btn-group-horizontal flex align-middle justify-center">
//       <button className={`btn ${currentTab === "revenue" && "bg-riddle-primary-dark-purple border-riddle-primary-dark-purple"}`} onClick={() => setCurrentTab("revenue")}> Revenue</button>
//       <button className={`btn ${currentTab === "fees" && "bg-riddle-primary-dark-purple border-riddle-primary-dark-purple"}`} onClick={() => setCurrentTab("fees")}>Fees</button>
//       <button className={`btn ${currentTab === "refund" && "bg-riddle-primary-dark-purple border-riddle-primary-dark-purple"}`} onClick={() => setCurrentTab("refund")}>Refund</button>
//       <button className={`btn ${currentTab === "chargeback" && "bg-riddle-primary-dark-purple border-riddle-primary-dark-purple"}`} onClick={() => setCurrentTab("chargeback")}>Chargeback</button>
//       <button className={`btn ${currentTab === "disputes" && "bg-riddle-primary-dark-purple border-riddle-primary-dark-purple"}`} onClick={() => setCurrentTab("disputes")}>Disputes</button>
//       <button className={`btn btn-disabled`}>Returns </button>
//       <button className={`btn btn-disabled`}>Settlements </button>
//     </div>
//   )
// }

function getRevenueDashboard(gridDashboardData: IDashboard[], mainDashboardData: ApexOptions['series'],statsData: StatsData[], numberOfPredictions:number, titleMainDashboard:string) {
  return (
    <div>
      {getStats(statsData)}
      <div className='card shadow-xl border flex my-10'>
        <div className='card-body flex'>
          <Link href={""}> <h2 className="card-title">{titleMainDashboard}</h2></Link>
          <AccountChart dataSeries={mainDashboardData} type="area" numberOfPredictions={numberOfPredictions}></AccountChart>
        </div>
      </div>
      <div className="grid gap-x-8 gap-y-5 my-10
        sm:grid-cols-1
        md:grid-cols-1
        lg:grid-cols-1
        xl:grid-cols-2 ">
        {(gridDashboardData).map(
          (dashboard, key) =>
            <div key={key} className="card w-auto bg-base-100 shadow-xl border">
              <div className="card-body">
                <Link href={dashboard.url}> <h2 className="card-title">{dashboard.title}</h2></Link>
                <p>{dashboard.subtitle}</p>
                <AccountChart dataSeries={dashboard.data} numberOfPredictions={2} ></AccountChart>
              </div>
            </div>
        )}
      </div>
    </div>
  )
}

function getDashboards(currentTab: string) {
  switch (currentTab) {
    case 'revenue':
      return getRevenueDashboard( MockRevenueData, totalReceivables(7), statsRevenue, 2, "Total Revenue");
    case 'fees':
      return getRevenueDashboard(MockFeesData, totalFees, statsFees, 2, "Total fees");
      case 'reconciliation':
      return getRevenueDashboard(MockReconciliationData, totalReconciliation, statsReconciliation, 0, "Reconciliation rate");
    default:
      return null;
  }
}

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("revenue")

    let tabSettings = {
        currentTab: currentTab,
        setCurrentTab: setCurrentTab,
        tabs: tabs
    }

    return (
    <div>
      {/*{getTabs(currentTab, setCurrentTab)}*/}
        {Tabs(tabSettings)}
      {getDashboards(currentTab)}
    </div>

  )
}
