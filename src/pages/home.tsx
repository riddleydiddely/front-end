import {useSession} from 'next-auth/react';
import React, {Fragment} from 'react';
import {Layout} from "../components/layout";
import ChatBox from "@/components/src/components/chatBox/chatBox";
import BankBalances from "@/components/src/components/BankBalances";
import Runway from "@/components/src/components/Runway";
import Revenue from "@/components/src/components/Revenue";
import UpcomingPayments from "@/components/src/components/UpcomingPayments";
import {AccountChart} from "@/components/src/components/accountChart";
import {totalReceivables} from "@/components/src/mockData/mockDashboardData/MockRevenueData";
import {BarChart} from "@/components/src/components/barChart";
import Link from "next/link";
import {dateRangeGenerator} from "@/components/src/utils/dateutils";


export default function Home() {
    const TODAY = new Date(Date.now())
    let START_DATE: Date = new Date();
    START_DATE.setDate(TODAY.getDate() - 30); // subtract 7 days


    const {data: session, status} = useSession()
    const titleStyle = "text-4xl font-semibold leading-6 text-gray-900 mb-5";
    let dividerStyle = "divider my-10";
    return <>

        <h3 className={titleStyle}>Bank Balances</h3>
        <div className={"flex"}>
            <div className={"flex-1 card bg-base-100 shadow-xl mr-10"}>
                <Link href={""}><h2 className="card-title my-5 ml-5">{"Bank balance last 30 days"}</h2></Link>
                <AccountChart dataSeries={totalReceivables(30)} type="area" numberOfPredictions={3}
                              dates={dateRangeGenerator(START_DATE, TODAY)}></AccountChart>

            </div>
            <div className={"flex-1"}>
                <BankBalances></BankBalances>
            </div>
        </div>

        <div className={dividerStyle}></div>


        <h3 className={titleStyle}>Revenue</h3>
        <div className={"flex"}>
            <Revenue></Revenue>
            <div className={"flex-1 card bg-base-100 shadow-xl ml-10"}>
                <Link href={""}><h2 className="card-title my-5 ml-5">{"Total revenue last 30 days"}</h2></Link>
                <AccountChart dataSeries={totalReceivables(30)} type="area" numberOfPredictions={3}
                              dates={dateRangeGenerator(START_DATE, TODAY)}></AccountChart>
                {/*<BarChart dataSeries={totalReceivables} type="bar" numberOfPredictions={2}></BarChart>*/}
            </div>

        </div>

        <div className={dividerStyle}></div>

        <h3 className={titleStyle}>Upcoming payments</h3>
        <div className={""}>
            <UpcomingPayments></UpcomingPayments>
        </div>
        <ChatBox session={session}></ChatBox>
    </>
}
