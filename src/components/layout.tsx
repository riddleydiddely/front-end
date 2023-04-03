
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
        <div>
            <Header title={props.title} subtitle="" />
            <div className="bg-off-white p-12 w-screen h-screen">
                {props.children}
            </div>
        </div>
    </div>
    )
};


