import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import {SiShopify, SiAmazon} from "react-icons/si";
import {TbReceiptTax, TbTruckDelivery} from "react-icons/tb";
import {MdInventory} from "react-icons/md";
import React from "react";
import {FiArrowRight} from "react-icons/fi";

let options= {
    currency: "EUR",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}
const skatteverket = 3411.56
const inventory = 25222.36
const postnord = 1272.36


const stats = [
    { id: 0, name: 'VAT (Skatteverket)', stat: Intl.NumberFormat("en-us", options).format(skatteverket), icon: TbReceiptTax, change: '3.2%', changeType: 'increase', bgColor: "bg-black" },
    { id: 1, name: 'Inventory payment', stat: Intl.NumberFormat("en-us", options).format(inventory), icon: MdInventory, change: '3.2%', changeType: 'increase', bgColor: "bg-black" },
    { id: 2, name: 'Postnord', stat: Intl.NumberFormat("en-us", options).format(postnord), icon: TbTruckDelivery, change: '5.4%', changeType: 'increase' , bgColor: "bg-black" },
]

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function UpcomingPayments() {
    return (
        <div>
            <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow-xl sm:px-6 sm:pt-6 border border-gray-100">
                        <dt>
                            <div className={`absolute rounded-md ${item.bgColor} p-3`}>
                                <item.icon className={`h-6 w-6 text-white `} aria-hidden="true" />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>



                            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-black hover:text-gray-500">
                                        <div className={"flex items-center"}>
                                        Pay now
                                            <FiArrowRight className={"ml-1"}></FiArrowRight>
                                        </div>
                                        <span className="sr-only"> {item.name} stats</span>
                                    </a>
                                </div>
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
