import React, { Fragment, ReactNode, useState } from 'react';
import Link from 'next/link';
import {useSession} from "next-auth/react"
import Dropdown from "@/components/src/components/dropdown";
import Sidebar, {SidebarItem} from "@/components/src/components/sidebar";
import {AiOutlineCalculator, AiOutlineHome, AiOutlineMoneyCollect} from "react-icons/ai";
import {LiaFileInvoiceSolid} from "react-icons/lia";
import {GiExpense} from "react-icons/gi";
import {MdOutlineInsights} from "react-icons/md";

type LayoutProps = {
    title: string,
    subtitle?: string,
    children: ReactNode;
};

type TabSetter = (value: string) => void;

const options = [
    {country: "se", entity: "Nine Pine AB"},
    {country: "gb", entity: "Nine Pine Ltd"},
    {country: "fi", entity: "Nine Pine Oy"},
    {country: "de", entity: "Nine Pine GmbH"},
];

function sideBar() {
    return (
        <Sidebar>
            <SidebarItem icon={<AiOutlineHome></AiOutlineHome>} text={"Home"} active={true} alert={false} href={"/home"}></SidebarItem>
            <SidebarItem icon={<AiOutlineCalculator></AiOutlineCalculator>} text={"Accounting"} active={false} alert={false} href={"/reconciliation/settlements"}></SidebarItem>
            <SidebarItem icon={<AiOutlineMoneyCollect></AiOutlineMoneyCollect>} text={"Pay"} active={false} alert={false} href={"/pay"}></SidebarItem>
            <SidebarItem icon={<LiaFileInvoiceSolid></LiaFileInvoiceSolid>} text={"Get paid"} active={false} alert={false} href={"/getpaid"}></SidebarItem>
            <SidebarItem icon={<GiExpense></GiExpense>} text={"Expense Management"} active={false} alert={false} href={"/"}></SidebarItem>
            <SidebarItem icon={<MdOutlineInsights></MdOutlineInsights>} text={"Insights"} active={false} alert={false} href={"/dashboards"}></SidebarItem>
        </Sidebar>)
}

const TopBar = (activeTab: string, setActiveTab: TabSetter) => {
    return (
        <div className="navbar bg-base-100 border-b-2 mb-10 sticky top-0 z-[500]">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {getMenu(activeTab, setActiveTab)}
                    </ul>
                </div>
                <Link href={"/dashboards"} className="btn btn-ghost normal-case text-4xl">Riddle</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul tabIndex={0} className="menu-horizontal dropdown-content px-1 ">
                    {getMenu(activeTab, setActiveTab)}
                </ul>
            </div>
            <div className="navbar-end">
                <Dropdown options={options}/>
            </div>
        </div>
    );
}

export const Layout = (props: LayoutProps) => {

    const {data: session, status} = useSession({required: true})
    const [activeTab, setActiveTab] = useState<string>("integrations")

    return (
        <div className={"flex"}>
            {sideBar()}
            <div className={"w-full ml-16"}>
                {TopBar(activeTab, setActiveTab)}
                <div className="px-24 pb-10 mb-10">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

function getMenu(activeTab: string, setActiveTab: TabSetter) {
    return (
        <Fragment>
            <li className={` mx-5  ${activeTab === "reconciliation" && "underline underline-offset-8 decoration-2"} rounded hover:text-riddle-primary-dark-purple`}
                onClick={() => setActiveTab("reconciliation")}><Link
                href={"/reconciliation/settlements"}>Reconciliation</Link></li>
            <li className={` mx-5  ${activeTab === "dashboards" && "underline underline-offset-8 decoration-2"} rounded hover:text-riddle-primary-dark-purple`}
                onClick={() => setActiveTab("dashboards")}><Link href={"/dashboards"}>Dashboards</Link></li>
            <li className={` mx-5  ${activeTab === "home" && "underline underline-offset-8 decoration-2"} rounded hover:text-riddle-primary-dark-purple`}
                onClick={() => setActiveTab("home")}><Link href={"/home"}>Home</Link></li>
            <li className={` mx-5  ${activeTab === "integrations" && "underline underline-offset-8 decoration-2"} rounded hover:text-riddle-primary-dark-purple`}
                onClick={() => setActiveTab("integrations")}><Link href={"/integrations/adding"}>Integrations</Link>
            </li>
        </Fragment>
    )
}
