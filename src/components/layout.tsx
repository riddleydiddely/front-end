import React, { createContext, Fragment, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import Dropdown from "@/components/src/components/dropdown";
import Sidebar, { SidebarItem } from "@/components/src/components/sidebar";
import { AiOutlineCalculator, AiOutlineHome, AiOutlineMoneyCollect } from "react-icons/ai";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GiExpense } from "react-icons/gi";
import { MdOutlineInsights } from "react-icons/md";
import { PiPlugsConnected } from "react-icons/pi";
import { useRouter } from "next/router";
import { Tab } from "@/components/src/components/common/tabs";
import {TabName} from "@/components/types/Tabs";

type LayoutProps = {
    title: string,
    subtitle?: string,
    children: ReactNode;
};

export type SubTabSetter = (value: TabName) => void;
export type MainTabSetter = (value: string) => void;
const options = [
    { country: "se", entity: "Nine Pine AB" },
    { country: "gb", entity: "Nine Pine Ltd" },
    { country: "fi", entity: "Nine Pine Oy" },
    { country: "de", entity: "Nine Pine GmbH" },
];

const sideBarItems = [
    { icon: <AiOutlineHome />, text: "Home", href: "/home" },
    { icon: <AiOutlineCalculator />, text: "Accounting", href: "/reconciliation/settlements" },
    { icon: <AiOutlineMoneyCollect />, text: "Pay", href: "/pay" },
    { icon: <LiaFileInvoiceSolid />, text: "Get paid", href: "/getpaid" },
    { icon: <GiExpense />, text: "Expense Management", href: "/expensemanagement" },
    { icon: <MdOutlineInsights />, text: "Insights", href: "/insights" },
    { icon: <PiPlugsConnected />, text: "Integrations", href: "/integrations" },
];

const SideBar = (activeTab: string, setActiveTab: MainTabSetter) => (
    <Sidebar selectedTab={activeTab} setSelectedTab={setActiveTab}>
        {sideBarItems.map((item, key) => (
            <SidebarItem icon={item.icon} text={item.text} href={item.href} key={key} />
        ))}
    </Sidebar>
);

const TopBar = (activeSubTab: string | undefined, setActiveSubTab: SubTabSetter, activeMainTab: string) => {
    const getMenu = (activeSubTab: string | undefined, setActiveSubTab: SubTabSetter, activeMainTab: string) => {
        activeMainTab = activeMainTab.toLowerCase().replace(" ", "")
        const subMenus: { [key: string]: TabName[] } = {
            "/insights": ["Reconciliation", "Revenue", "Fees", "Refund", "Disputes", "Returns"],
            "/integrations": ["Accounting Systems", "OMS", "PSPs"],
        }

        let items = subMenus[activeMainTab] || [];

        return (
            <Fragment>
                {items.map((item, key) => {
                    return (
                        <li key={key}
                            className={`mx-5  ${activeSubTab === item && "underline underline-offset-8 decoration-2"} rounded hover:text-riddle-primary-dark-purple`}
                            onClick={() => setActiveSubTab(item)}>{item}</li>
                    )
                })}
            </Fragment>
        )
    }

    return (
        <div className="navbar bg-base-100 border-b-2 mb-10 sticky top-0 z-[500]">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {getMenu(activeSubTab, setActiveSubTab, activeMainTab)}
                    </ul>
                </div>
                <Link href={"/insights"} className="btn btn-ghost normal-case text-4xl">Riddle</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul tabIndex={0} className="menu-horizontal dropdown-content px-1 ">
                    {getMenu(activeSubTab, setActiveSubTab, activeMainTab)}
                </ul>
            </div>
            <div className="navbar-end">
                <Dropdown options={options}/>
            </div>
        </div>
    );
}

export const ActiveSubMenuContext = createContext<TabName | undefined>(undefined);

const getActiveSubTab = (activeMainTab: string): TabName => {
    activeMainTab = activeMainTab.toLowerCase().replace(" ", "")
    const subMenus: { [key: string]: TabName[] } = {
        "/insights": ["Reconciliation", "Revenue", "Fees", "Refund", "Disputes", "Returns"],
        "/integrations": ["Accounting Systems", "OMS", "PSPs"],
    }

    let items = subMenus[activeMainTab] || [];

    return items[0];
}

export const Layout = ({ children }: LayoutProps) => {
    const { data: session, status } = useSession({ required: true });
    const [activeMainTab, setActiveMainTab] = useState<string>("/home");
    const router = useRouter();

    let initialActiveSubTab:TabName = "OMS";
    if (typeof window !== 'undefined') {
        initialActiveSubTab = (localStorage.getItem(activeMainTab + "-activeSubTab") || getActiveSubTab(activeMainTab)) as TabName
    }

    const [activeSubTab, setActiveSubTab] = useState<TabName>(initialActiveSubTab);

    useEffect(() => {
        localStorage.setItem(activeMainTab + "-activeSubTab", activeSubTab);
    }, [activeSubTab]);

    useEffect(() => {
        setActiveMainTab(router.pathname);
        setActiveSubTab(getActiveSubTab(activeMainTab));
    }, [router.pathname]);

    return (
        <div className={"flex"}>
            {SideBar(activeMainTab, setActiveMainTab)}
            <div className={"w-full ml-16"}>
                {TopBar(activeSubTab, setActiveSubTab, activeMainTab)}
                <div className="px-24 pb-10 mb-10">
                    <ActiveSubMenuContext.Provider value={activeSubTab}>
                        {children}
                    </ActiveSubMenuContext.Provider>
                </div>
            </div>
        </div>
    );
};
