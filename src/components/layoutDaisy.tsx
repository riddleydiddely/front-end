import React, { FC, Fragment, ReactNode } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { Session } from "next-auth";

type LayoutProps = {
    title: string,
    subtitle?: string,
    children: ReactNode;
};

function renderLoginArea(session: Session | null) {

    if (session) {
        return (
            <Fragment>
                <div className="dropdown dropdown-end">
                    <div className='flex justify-center  mt-3 p-2'>
                        <div className='text-xs mr-6'>
                            <b><p>{`Logged in as ${session.user?.name}`}</p></b>
                            {`${session.user?.email}`}
                        </div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-5">

                            <div className="w-24 rounded-full ring ring-[rgb(240,0,184)] ring-offset-base-100 ring-offset-2">

                                <img src={session.user?.image ?? session.user?.name ?? 'img'} />
                            </div>
                        </label>
                    </div>
                    <ul tabIndex={0} className="menu menu-compact shadow-2xl dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
                        <li>
                            <Link href={"account"} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link href={"/settings"}>Settings</Link></li>
                        <li>
                            <button onClick={() => signOut()}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="dropdown dropdown-end">
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
            <button className='btn' onClick={() => signIn()}>Sign in</button>
        </Fragment>
    )
}

export const LayoutDaisy = (props: LayoutProps) => {

    const { data: session } = useSession({ required: true })
    const [activeTab, setActiveTab] = useState("integrations")

    return (
        <Fragment>
            <div className="navbar bg-base-100 border-b-2 mb-10">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                    {renderLoginArea(session)}
                </div>
            </div>
            <div className="px-24 mb-10 w-screen h-screen">
                {props.children}
            </div>
        </Fragment>
    )
};

function getMenu(activeTab: string, setActiveTab:Function) {
    return (
        <Fragment>
            <li className={` mx-5  ${activeTab==="reconciliation" && "underline underline-offset-8 decoration-2"} rounded hover:text-secondary`} onClick={() => setActiveTab("reconciliation")}><Link href={"/reconciliation/settlements"}>Reconciliation</Link></li>
            <li className={` mx-5  ${activeTab==="dashboards" && "underline underline-offset-8 decoration-2"} rounded hover:text-secondary`} onClick={() => setActiveTab("dashboards")}><Link href={"/dashboards"}>Dashboards</Link></li>
            <li className={` mx-5  ${activeTab==="home" && "underline underline-offset-8 decoration-2"} rounded hover:text-secondary`} onClick={() => setActiveTab("home")}><Link href={"/home"}>Home</Link></li>
            <li className={` mx-5  ${activeTab==="integrations" && "underline underline-offset-8 decoration-2"} rounded hover:text-secondary`} onClick={() => setActiveTab("integrations")}><Link href={"/integrations/adding"}>Integrations</Link></li>
        </Fragment>
    )

}

