import { Settlement } from "../../mockData/settlementMockData"
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineRightCircle } from "react-icons/ai";
import React, { ReactNode } from "react";
import Link from "next/link";
type SettlementRowProps = {
  settlement: Settlement,
  showModal: Function
}

export default function SettlementRow(props: SettlementRowProps) {
  return (
    <tr className='hover:bg-slate-100'>
      <td className=" px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
          <span>{props.settlement.id}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{`${props.settlement.currency}${props.settlement.amount}`}</td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <img className="object-cover w-12 " src={`/${props.settlement.psp_image_url}`} alt="" />
          {/* <div>
            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{props.settlement.psp_name}</h2>
            
          </div> */}
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{props.settlement.date.toDateString()}</td>
      <td>{props.settlement.number_of_orders}</td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {getReconciliationElement(props.settlement.amount, props.settlement.reconciled_amount)}
      </td>
      <td>{getCheckmark(props.settlement.paidOut)}</td>
      {/* <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{
        props.settlement.items.map((item, key) => (
          <div key={key} className='inline-flex border-gray-400 border m-1 px-2 py-1 rounded-full  bg-gray-200 hover:bg-gray-500 hover:text-white'>{item}</div>
        ))
      }</td> */}
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6 text-2xl">
          {/* <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
              Archive
            </button> */}
          {/* {getActionButton(props.settlement.amount, props.settlement.reconciled_amount, props.showModal)} */}
          <Link href={`/reconciliation/${props.settlement.id}`}> <AiOutlineRightCircle></AiOutlineRightCircle></Link>
        </div>
      </td>
    </tr>
  )
}

function getCheckmark(paid: boolean): ReactNode {
  if (paid) {
    return <div className="text-green-400 text-2xl"><AiOutlineCheckCircle></AiOutlineCheckCircle></div>
  }
  else {
    return <div className="text-red-500 text-2xl"><AiOutlineCloseCircle></AiOutlineCloseCircle></div>
  }
}

function getReconciliationElement(price: number, reconciled_amount: number) {
  if (price === reconciled_amount) {
    return <div className="">
      <h2 className="text-sm font-normal px-3 py-1 rounded-full text-green-700  ">Reconciled</h2>
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
