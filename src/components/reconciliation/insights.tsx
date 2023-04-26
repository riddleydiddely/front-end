import { AccountChart } from '../accountChart';
import { MockRevenueData, statsRevenue, totalReceivables } from '../../mockData/mockDashboardData/MockRevenueData';
import Link from 'next/link'
import { Fragment, ReactNode, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { IDashboard, MockFeesData, statsFees, totalFees } from '../../mockData/mockDashboardData/MockFeesData';
import { StatsData } from '@/components/types/StatsData';


function getStats(data: StatsData[]): ReactNode {
    return (
        <div className="stats shadow flex align-middle justify-center my-10   ">
            {data.map((element: StatsData, key: number) => (
                <div key={key} className="stat ">
                    <div className="stat-figure text-secondary">
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

function getMainDashboard(titleMainDashboard: string, mainDashboardData: ApexOptions['series'], numberOfPredictions: number): ReactNode {
    return (
        <div className='card shadow-xl border flex my-10'>
            <div className='card-body flex'>
                <h2 className="card-title">{titleMainDashboard}</h2>
                <AccountChart dataSeries={mainDashboardData} type="area" numberOfPredictions={numberOfPredictions}></AccountChart>
            </div>
        </div>
    )
}

function getDashboardGrid(gridDashboardData: IDashboard[]): ReactNode {
    return (
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
    )
}
function getRevenueDashboard(gridDashboardData: IDashboard[], mainDashboardData: ApexOptions['series'], statsData: StatsData[], numberOfPredictions: number, titleMainDashboard: string) {
    return (
        <div >
            {/* {getStats(statsData)} */}
            {getMainDashboard(titleMainDashboard, mainDashboardData, numberOfPredictions)}
            {getDashboardGrid(gridDashboardData)}
        </div>
    )
}

function getDashboards(currentTab: string) {
    switch (currentTab) {
        case 'insights':
            return getRevenueDashboard(MockRevenueData, totalReceivables, statsRevenue, 2, "Reconciliation rate");
        case 'settlements':
            return getRevenueDashboard(MockFeesData, totalFees, statsFees, 2, "Total fees");
        default:
            return null;
    }
}

export default function Insights(currentTab: string) {
    return getDashboards(currentTab)

}
