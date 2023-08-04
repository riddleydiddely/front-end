import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import {SiShopify, SiAmazon} from "react-icons/si";
import {AiOutlineDollar} from "react-icons/ai";
import Link from "next/link";

let options= {
    currency: "EUR",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}
const amazonRevenue = 883897.56
const shopifyRevenue = 95633.36
const totalRevenue = amazonRevenue  + shopifyRevenue


const stats = [
    { id: 0, name: 'Total revenue', stat: Intl.NumberFormat("en-us", options).format(totalRevenue), icon: AiOutlineDollar, change: '2.1%', changeType: 'increase', bgColor: "bg-black" },
    { id: 1, name: 'Shopify', stat: Intl.NumberFormat("en-us", options).format(shopifyRevenue), icon: SiShopify, change: '4.5%', changeType: 'increase', bgColor: "bg-[#95BF47]" },
    { id: 2, name: 'Amazon', stat: Intl.NumberFormat("en-us", options).format(amazonRevenue), icon: SiAmazon, change: '1.7%', changeType: 'increase' , bgColor: "bg-[#FF9900]" },
]

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Revenue() {
    return (
        <div>
            <dl className="col-span-1 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-5">
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
                            <p
                                className={classNames(
                                    item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                                    'ml-2 flex items-baseline text-sm font-semibold'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-600" aria-hidden="true" />
                                ) : (
                                    <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                                )}

                                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                {item.change}
                            </p>
                            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <Link href="/insights" className="font-medium text-black hover:text-gray-500">
                                        See details<span className="sr-only"> {item.name} stats</span>
                                    </Link>
                                </div>
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
