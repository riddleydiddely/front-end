import {useSession} from 'next-auth/react';
import React, {Fragment} from 'react';
import {Layout} from "../components/layout";
import ChatBox from "@/components/src/components/chatBox/chatBox";
import BankBalances from "@/components/src/components/BankBalances";
import Runway from "@/components/src/components/Runway";
import Revenue from "@/components/src/components/Revenue";
import UpcomingPayments from "@/components/src/components/UpcomingPayments";


export default function Home() {
    const {data: session, status} = useSession()
    const titleStyle = "text-4xl font-semibold leading-6 text-gray-900";
    return <>

        <h3 className={titleStyle}>Bank Balances</h3>
        <div className={"flex space-x-5"}>
            <BankBalances></BankBalances>
            <Runway></Runway>
        </div>

        <div className="divider py-14"></div>

        <h3 className={titleStyle}>Revenue</h3>
        <div className={"flex space-x-5"}>
            <Revenue></Revenue>
        </div>

        <div className="divider py-14"></div>

        <h3 className={titleStyle}>Upcoming payments</h3>
        <div className={" space-x-5 "}>
            <UpcomingPayments></UpcomingPayments>
        </div>

        <ChatBox session={session}></ChatBox>
    </>
}
