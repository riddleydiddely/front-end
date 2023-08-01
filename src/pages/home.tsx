import {useSession} from 'next-auth/react';
import React from 'react';
import ChatBox from "@/components/src/components/chatBox/chatBox";
import BankBalances from "@/components/src/components/BankBalances";
import Revenue from "@/components/src/components/Revenue";
import UpcomingPayments from "@/components/src/components/UpcomingPayments";
import {AccountChart} from "@/components/src/components/accountChart";
import {totalReceivables} from "@/components/src/mockData/mockDashboardData/MockRevenueData";
import Link from "next/link";
import {dateRangeGenerator} from "@/components/src/utils/dateutils";
import {BarChart} from "@/components/src/components/barchart";
import {Todo} from "@/components/src/components/todo";


export default function Home() {
    const TODAY = new Date(Date.now())
    let START_DATE: Date = new Date();
    START_DATE.setDate(TODAY.getDate() - 30); // subtract 7 days


    const {data: session, status} = useSession()
    const titleStyle = "text-4xl font-semibold leading-6 text-gray-900 mb-5";
    let dividerStyle = "divider my-10";
    return <>
        <div className={"mb-10"}>
            <h3 className={titleStyle}>Bank Balances</h3>
            <div className={"flex space-x-5 "}>
                <div className={"flex-1"}>
                    <div className={"grid grid-cols-2 gap-4"}>
                        <div className={"col-span-2 "}>
                            <BankBalances></BankBalances>
                        </div>
                        <div className={"col-span-2 card bg-base-100 shadow-xl border border-gray-100"}>
                            <Link href={""}><h2 className="card-title my-5 ml-5">{"Bank balance last 6 months"}</h2>
                            </Link>
                            {/*<AccountChart dataSeries={totalReceivables(30)} type="area" numberOfPredictions={3} dates={dateRangeGenerator(START_DATE, TODAY)}></AccountChart>*/}
                            <BarChart dataSeries={undefined} numberOfPredictions={2}></BarChart>
                        </div>

                    </div>
                </div>

                <Todo></Todo>
            </div>
        </div>

        <div className={"mb-10"}>

            <h3 className={titleStyle}>Revenue</h3>
            <div className={"grid grid-cols-2 gap-4"}>
                <Revenue></Revenue>
                <div className={"col-span-1 card bg-base-100 shadow-xl ml-10 border border-gray-100"}>
                    <Link href={""}><h2 className="card-title ml-5 mt-5">{"Total revenue last 30 days"}</h2></Link>
                    <AccountChart dataSeries={totalReceivables(30)} type="area" numberOfPredictions={3}
                                  dates={dateRangeGenerator(START_DATE, TODAY)}></AccountChart>
                    {/*<BarChart dataSeries={totalReceivables} type="bar" numberOfPredictions={2}></BarChart>*/}
                </div>

            </div>
        </div>

        <div className={"mb-10"}>
            <h3 className={titleStyle}>Upcoming payments</h3>
            <div className={""}>
                <UpcomingPayments></UpcomingPayments>
            </div>
            <ChatBox session={session}></ChatBox>
        </div>
    </>
}
