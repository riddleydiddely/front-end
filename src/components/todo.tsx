import Link from "next/link";
import {LuCheckCircle, LuCircle} from "react-icons/lu";
import React from "react";

export function Todo() {
    return <div className={"shadow-2xl max-w-md rounded-2xl border border-gray-100"}>
        <div className={"card-body"}>
            <h1 className={"card-title text-4xl"}>Outstanding tasks</h1>
            <div className="flex m-3 justify-between items-center hover:text-gray-500">
                <Link href={""}>3 Invoices pending approval</Link>
                <LuCircle className="align-middle text-xl font-bold text-gray-500"></LuCircle>
            </div>
            <div className="flex m-3 justify-between items-center hover:text-gray-500">
                <Link href={""}> 10 transactions missing receipts</Link>
                <LuCircle className="align-middle text-xl font-bold text-gray-500"></LuCircle>
            </div>
            <div className="flex m-3 justify-between items-center hover:text-gray-500">
                <Link href={""}>{"Payments haven't been received (company 1 and 2)"}</Link>
                <LuCircle className="align-middle text-xl font-bold text-gray-500"></LuCircle>
            </div>
            <div className="flex m-3 justify-between items-center hover:text-gray-500">
                <Link href={""}>4 unreconiled transactions</Link>
                <LuCircle className="align-middle text-xl font-bold text-gray-500"></LuCircle>
            </div>
            <h1 className={"card-title text-4xl text-green-500"}>Done</h1>
            <div className="flex m-3 justify-between items-center text-gray-300">
                <Link href={""} className={"line-through"}>3 Invoices pending approval</Link>
                <LuCheckCircle className="align-middle text-xl font-bold text-green-500"></LuCheckCircle>
            </div>

        </div>
    </div>;
}
