import {useSession} from 'next-auth/react';
import React, {Fragment} from 'react';
import {Layout} from "../components/layout";
import ChatBox from "@/components/src/components/chatBox/chatBox";
import BankBalances from "@/components/src/components/BankBalances";
import Runway from "@/components/src/components/Runway";


export default function Home() {
    const {data: session, status} = useSession()
    return <>

        <h3 className="text-4xl font-semibold leading-6 text-gray-900">Bank Balances</h3>
        <div className={"flex space-x-5"}>
            <BankBalances></BankBalances>
            <Runway></Runway>
        </div>
        <ChatBox session={session}></ChatBox>
    </>
}
