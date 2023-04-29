import React, { Fragment, ReactNode, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Transaction } from "../../mockData/transactionMockData";
import InfoCard, { InfoCardProps } from "../common/infoCard";
import UnreconciliedInfo from "../common/unreconciliedInfo";

type TransactionRowProps = {
  transaction: Transaction,
  showModal: Function
}

const infoCard: InfoCardProps = {
  infoCard: {
    reconciled: false,
    psp_image_url: "/klarna.png",
    auditor: "Martin P Andersson",
    responsible_people: { name: "Donny Ho", img_url: "/donny.jpeg" },
    date: new Date("2023-04-26"),
    currency: "USD",
  }
}

export default function TransactionRow(props: TransactionRowProps) {
  const [open, setOpen] = useState(false)

  const transaction = props.transaction
  return (
    <Fragment>

      <tr onClick={() => setOpen(!open)} className=''>
        <td className=" px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" /> */}
            <div className={`${open && "rotate-180"} ease-in-out duration-300`}>
              <AiOutlineDown></AiOutlineDown>
            </div>
            <span>{props.transaction.transaction_id}</span>
          </div>
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{props.transaction.date.toDateString()}</td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{`${props.transaction.currency}${props.transaction.amount}`}</td>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          {getReconciliationElement(props.transaction.amount, props.transaction.reconciled_amount, props.transaction.currency)}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          <div className="flex items-center gap-x-2">
            <img className="object-cover w-12 " src={`/${props.transaction.source_image_url}`} alt="" />
            <div>
              <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{props.transaction.source_name}</h2>
              <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{props.transaction.source_transaction_type}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{
          props.transaction.reasons.map((item, key) => (
            <div key={key}>
              <div key={key} className='inline-flex border-gray-400 border m-1 px-2 py-1 rounded-md  bg-gray-200 hover:bg-gray-500 hover:text-white'>{item}</div>
            </div>
          ))
        }</td>
        {/* <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            {getActionButton(props.transaction.amount, props.transaction.reconciled_amount, props.showModal)}
          </div>
        </td> */}
      </tr>
      <tr>
        <td colSpan={100} className={`${!open && "hidden"} transition-transform duration-300`}>
          {UnreconciliedInfo({transaction} )}

        </td>
      </tr>

    </Fragment>
  )
}

function getReconciliationElement(price: number, reconciled_amount: number, currency: string) {
  if (price === reconciled_amount) {
    return <div>
      <h2 className="text-sm font-normal px-3 py-1 rounded-full text-green-700  ">Reconciled</h2>
    </div>
  }
  else if (price > reconciled_amount) {

    let percentage = Math.round(100 * reconciled_amount / price).toString();
    let style = { "--value": percentage, "--size": "2rem", "--thickness": "2px" }

    return <div>
      <h2 className="text-sm  text-center font-normal  py-1 rounded-full gap-x-2 text-black bg-emerald-100/60 bg-error">{`${percentage}% Reconciled`}</h2>
      <h2 className='mt-2 text-center text-sm font-normal rounded-full text-black bg-gray-200'>{`${currency}${reconciled_amount} of ${currency}${price}`}</h2>
    </div>
  }
  else if (price < reconciled_amount) {
    return <div className="px-3 py-1 rounded-full gap-x-2 text-emerald-500  bg-gray-800">
      <h2 className="text-sm font-normal">Over Reconciled</h2>
    </div>
  }
}

function getActionButton(price: number, reconciled_amount: number, showModal: Function) {
  if (price === reconciled_amount) {
    return <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
    </button>
  }
  else {
    return (
      <label htmlFor="my-modal-4" className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">Manually Resolve</label>
    )
  }

}
