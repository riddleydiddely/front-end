import Link from "next/link";
import {LuCheckCircle, LuCircle} from "react-icons/lu";
import React from "react";


const todos = [
    {
        name: "3 Invoices pending approval",
        icon: LuCircle
    },
    {
        name: "10 transactions missing receipts",
        icon: LuCircle
    },
    {
        name: "Payments not received (Elgiganten)",
        icon: LuCircle
    },
    {
        name: "4 unreconiled transactions",
        icon: LuCircle
    },
    {
        name: "3 Invoices pending unpaid",
        icon: LuCheckCircle

    },
]

export function Todo() {
    return <div className={"shadow-2xl max-w-md rounded-2xl border border-gray-100"}>
        <div className={"card-body"}>
            <h1 className={"card-title text-3xl"}>4 Outstanding tasks</h1>
            {
                todos.map((item, key) => {
                        let iconStyle = item.icon === LuCircle ? "align-middle text-xl font-bold ml-5" : "align-middle text-xl font-bold text-green-500 ml-5"
                        let textStyle = item.icon === LuCircle ? "align-middle" : "align-middle line-through text-gray-300"
                        return (
                            <div key={key} className="flex m-3 justify-between items-center hover:text-gray-500">
                                <Link href={""} className={textStyle}>{item.name}</Link>
                                <item.icon className={iconStyle}></item.icon>
                            </div>
                        )
                    }
                )
            }
        </div>
    </div>;
}
