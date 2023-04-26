import { Settlement } from "../../mockData/settlementMockData"
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineRightCircle } from "react-icons/ai";
import React, { ReactNode } from "react";
import Link from "next/link";
import { TransactionData } from "../../mockData/transactionMockData";

type TransactionRowProps = {
  transaction: TransactionData,
   showModal: Function
}

export default function TransactionRow(props: TransactionRowProps) {
  return (
    <tr className='hover:bg-red-400'>
      <td className=" px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
          <span>{props.transaction.transaction_id}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{props.transaction.date.toDateString()}</td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{`${props.transaction.currency}${props.transaction.price}`}</td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {getReconciliationElement(props.transaction.price, props.transaction.reconciled_amount)}
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
        props.transaction.items.map((item, key) => (
          <div key={key} className='inline-flex border-gray-400 border m-1 px-2 py-1 rounded-full  bg-gray-200 hover:bg-gray-500 hover:text-white'>{item}</div>
        ))
      }</td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          {/* <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
            Archive
          </button> */}
          {getActionButton(props.transaction.price, props.transaction.reconciled_amount, props.showModal)}
        </div>
      </td>
    </tr>
  )
}



function getReconciliationElement(price: number, reconciled_amount: number) {
  if (price === reconciled_amount) {
    return <div className="">
      <h2 className="text-sm font-normal px-3 py-1 rounded-full text-white text-center bg-emerald-100/60 bg-primary">Reconciled</h2>
    </div>
  }
  else if (price > reconciled_amount) {

    let percentage = Math.round(100 * reconciled_amount / price).toString();
    let style = { "--value": percentage, "--size": "2rem", "--thickness": "2px" }

    return <div className="">
      {/* <div className="radial-progress" style={style}>{`${percentage}%`}</div> */}

      <h2 className="text-sm  text-center font-normal  py-1 rounded-full gap-x-2 text-black bg-emerald-100/60 bg-error">{`${percentage}% Reconciled`}</h2>
      <h2 className='mt-2 text-center text-sm font-normal rounded-full text-black bg-gray-200'>{`${reconciled_amount} of ${price}`}</h2>
    </div>
  }
  else if (price < reconciled_amount) {
    return <div className="px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 bg-gray-800">
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
