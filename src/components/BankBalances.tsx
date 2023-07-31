import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import {BsBank2} from "react-icons/bs";

const stats = [
    { id: 1, name: 'SEB', stat: '€71,897', icon: BsBank2, change: '3.2%', changeType: 'increase' },
    { id: 2, name: 'Revolut', stat: '€58.16', icon: BsBank2, change: '5.4%', changeType: 'increase' },
    //{ id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function BankBalances() {
    return (
        <div>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                    >
                        <dt>
                            <div className="absolute rounded-md bg-black p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
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
                                    <a href="#" className="font-medium text-black hover:text-gray-500">
                                        See details<span className="sr-only"> {item.name} stats</span>
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
