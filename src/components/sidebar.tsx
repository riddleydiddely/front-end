import React, {useContext, createContext, useState, ReactNode, FunctionComponent, useEffect} from "react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {signOut, useSession} from "next-auth/react";
import {Session} from "next-auth";
import {BiDotsVerticalRounded} from "react-icons/bi";
import Link from "next/link";
import {MainTabSetter} from "@/components/src/components/layout";

interface SidebarContextType {
    expanded: boolean;
    selectedTab: string;
    selectTab: (tab: string) => void;
}

interface SidebarProps {
    selectedTab: string;
    setSelectedTab: MainTabSetter;
    children: ReactNode;
}

interface SidebarItemProps {
    icon: JSX.Element;
    text: string;
    href: string;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

function optionsArea() {
    return <div className={"z-300 fixed"}>

        <ul tabIndex={0}
            className="menu menu-compact shadow-2xl dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
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
}

function UserSection(expanded: boolean, session: Session) {
    let fullName = (session.user?.name) ? (session.user?.name) : "Unknown name";
    let email = (session.user?.email) ? (session.user?.email) : "Unknown email";
    return <>
        <div className="border-t flex p-3 items-center">
            <img
                src={session.user?.image ?? "/unknown.jpg"}
                alt=""
                className="w-10 h-10 rounded-full ring-gray-500 ring hover:ring-gray-900 ring-offset-2 items-center"
            />
            <div
                className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                <div className="leading-4">
                    <h4 className="font-semibold">{fullName}</h4>
                    <span className="text-xs text-gray-600">{email}</span>
                </div>
                <div className="dropdown dropdown-left dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-5">
                        <BiDotsVerticalRounded size={20}/>
                    </label>
                    {optionsArea()}
                </div>
            </div>
        </div>
    </>
}

const Sidebar: FunctionComponent<SidebarProps> = ({children, selectedTab, setSelectedTab}) => {
    const [expanded, setExpanded] = useState<boolean>(true);
    const {data: session, status} = useSession({required: true});
    const selectTab = (tab: string) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        // set state from local storage on client after mount
        setExpanded(JSON.parse(localStorage.getItem("expanded") || "true"));
        setSelectedTab(localStorage.getItem("selectedTab") || "home");
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("expanded", JSON.stringify(expanded));
            localStorage.setItem("selectedTab", selectedTab);
        }
    }, [expanded, selectedTab]);
    return (
        <aside className={`h-screen fixed z-[1000] `}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm ">
                <div className="px-5 pb-8 pt-10 flex justify-between items-center">
                    <img
                        src="/riddle_logo.png"
                        alt=""
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
                    />

                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 hover:font-extrabold hover:text-riddle-primary-dark-purple"
                    >
                        {expanded ? <BsChevronLeft/> : <BsChevronRight/>}
                    </button>
                </div>

                <SidebarContext.Provider value={{expanded, selectedTab, selectTab}}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
                {(session && status === "authenticated") ? UserSection(expanded, session) : null}
            </nav>
        </aside>
    );
};

const SidebarItem: FunctionComponent<SidebarItemProps> = ({icon, text, href}) => {
    const context = useContext(SidebarContext);
    const expanded = context?.expanded ?? true;
    const active = context?.selectedTab === href;
    const selectTab = context?.selectTab;
    const onClick = () => {
        selectTab?.(href.toLowerCase().replace(" ", ""));
    };

    return (
        <Link href={href} onClick={() => onClick()}>
            <li className={` relative flex items-center p-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-black text-white" : "hover:underline"} flex-nowrap`}>
                <div className="flex-shrink-0 text-2xl">{icon}</div>

                <span
                    className={`overflow-hidden transition-all duration-500 flex-shrink-0 whitespace-nowrap ${expanded ? "w-52 ml-3" : "w-0"}`}>
                    {text}
                </span>
                {!expanded && (
                    <div
                        className={` absolute left-full rounded-md px-2 py-1 ml-6 bg-black text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0   `}>
                        {text}
                    </div>
                )}
            </li>
        </Link>
    );
};

export default Sidebar;
export {SidebarItem};
