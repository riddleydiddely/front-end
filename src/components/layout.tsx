
import Sidebar from "./sidebar";
import React, { FC } from 'react';
import { PropsWithChildren } from 'react'
import { Header } from "./header";
import { Body } from "./body";


type LayoutProps = {
    title:string
};

export const Layout = (props: PropsWithChildren<LayoutProps>) => {
    return (<div className="flex" >
        <Sidebar />
        <div>
            <Header>{props.title}</Header>
            {/* <div className="bg-off-white w-screen">
                
                <Body></Body>
            </div> */}
        </div>
    </div>
    )
};