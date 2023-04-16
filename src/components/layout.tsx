
import Sidebar from "./sidebar";
import React, { FC, ReactNode } from 'react';
import { Header } from "./header";


type LayoutProps = {
    title: string,
    subtitle?: string,
    children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
    return (
    <div className="flex" >
        <Sidebar />
        <div className="main-content">
            <Header title={props.title} subtitle="" />
            <div className="p-5 w-screen h-screen">
                {props.children}
            </div>
        </div>
    </div>
    )
};


