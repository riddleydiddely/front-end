import { TransactionData } from '../mockData/transactionMockData'
import { useState } from 'react';
import Suggestions from './suggestions';
import Pagination from './table/pagination';
import Header from './table/header';
import TransactionRow from './table/transactionRow';

const tooltip = {
  order_id: "The order is is the unique identifier for a transaction. This id ususally comes from your order backend system.  ",
  date: "This is the date that the settlement was paid out on. This is different from when the order was paid by the customer",
  amount: "This is the amount charged by the PSP as seen in the settlement report. If you get paid out in another currency that you charge the customer this is something you need to take into account",
  status: "There are 2 statuses 'Reconciled' and 'Unreconciled'. The unreconciled settlements will show you how many percent and the amount left that has not been reconciled.",
  psp: "A PSP is a payment service provider and is the company that you use in order for you customers to pay for your goods/services.",
  items: "These are the items that the customer bought as seen in the order system",
  actions: "There are 3 actions:\n\n\n 1. Manually Resolve - Resolve this order/settlement by selection from a list of potential candidates for manual reconciliation \n 2. Remove - This order/settlement. This could be due to transactions that were made erroneously \n 3.Update - Update a row"
}

function getModal() {
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <Suggestions></Suggestions>
          <div className="modal-action">
            <label htmlFor="my-modal-4" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  )
}

const columns: string[] = [
  "OrderId",
  "Date",
  "Amount",
  "Status",
  "PSP",
  "Items",
  "Actions",
]

function getReconciliationTable(setShowModal: Function, transactionItems: TransactionData[]) {
  return (
    <div className="overflow-x-auto w-full shadow-2xl bg-transparent rounded-lg outline outline-1 outline-slate-100 my-10 max-h-screen">
      <table className="table w-full bg-transparent ">
        <Header columns={columns}></Header>
        <tbody>
          {transactionItems.map((transaction: TransactionData, key:number) => (
            <TransactionRow key={key} transaction={transaction} showModal={setShowModal}></TransactionRow>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TransactionsTable(transactionItems: TransactionData[]) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {getModal()}
      <div className='align-middle justify-center'>
        {getReconciliationTable(setShowModal, transactionItems)}
        <Pagination pages={[1, 2]}></Pagination>
      </div>
    </div>
  )
}

