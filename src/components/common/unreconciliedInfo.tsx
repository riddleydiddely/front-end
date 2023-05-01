import { Customer } from '@/components/types/Customer'
import { PurchaseInfo } from '@/components/types/PurchaseInfo'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Transaction } from '../../mockData/transactionMockData'
import Dropdown from './dropdown'

const HeadingStyle = "text-sm font-medium leading-6 text-gray-900"
const SectionStyle = "px-4 my-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"

type PropsUnreconciliedInfo = {
    transaction: Transaction
}

export default function UnreconciliedInfo(props: PropsUnreconciliedInfo) {
    return (
        <div className=' p-4 rounded-md bg-slate-50'>
            <div className=" sm:px-0">
                <h3 className="text-base mb-2 font-semibold leading-7 text-gray-900">Detailed Order Information</h3>
                {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p> */}
            </div>
            <div className='flex'>

                <div className=" border-t border-gray-100">
                    <dl>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Order link</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <a className='underline text-indigo-500' href="">{props.transaction.oms}</a>
                            </dd>
                        </div>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Payment link</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <a className='underline text-indigo-500' href="">{props.transaction.psp}</a></dd>
                        </div>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Payment method</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.transaction.source_transaction_type}</dd>
                        </div>
                        <div className={`${props.transaction.reasons.length === 0 && "hidden"}`}>

                        <div className={"hidden px-4 my-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"}>
                            <dt className={HeadingStyle}>Possible explanations</dt>
                            <dd className=" mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {`Transaction paid in USD but was booked as EUR`}
                            </dd>
                            <dt className={HeadingStyle}>Reasons</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <div className='flex flex-wrap'>
                                    {props.transaction.reasons.map((reason: string, key:number) => 
                                    
                                    <div key={key} className='mx-1 inline-flex border-gray-400 border px-1 py-1 rounded-md  bg-gray-200 hover:bg-gray-500 hover:text-white'>{reason}</div>
                                    )}
                                </div>
                            </dd>

                            <dt className={HeadingStyle}>Actions</dt>
                            <dd className=" mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {Dropdown()}

                            <button className='btn btn-outline btn-sm mt-2'>Resolve</button>
                            </dd>

                            
                        </div>
                                    </div>
                    </dl>
                </div>

                <div className="ml-16 border-t border-gray-100">
                    <dl>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Customer name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.transaction.customer.name}</dd>
                        </div>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Shipping address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <a className='underline text-indigo-500' href="https://goo.gl/maps/GEjGWJowY8iBny3M7">{props.transaction.customer.shipping_address}</a>
                            </dd>
                        </div>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Customer Email address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <a className='underline text-indigo-500' href={`mailto:${props.transaction.customer.email}`}>{props.transaction.customer.email}</a>
                            </dd>
                        </div>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Purchase Amount</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${props.transaction.currency}${props.transaction.amount}`}</dd>
                        </div>
                        <div className={SectionStyle}>
                            <dt className={HeadingStyle}>Tax</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {`${props.transaction.currency}${props.transaction.tax}`}
                            </dd>
                        </div>
                    </dl>
                </div>



            </div>



        </div>
    )
}
