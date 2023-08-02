import { Fragment, useState } from 'react';
import Table from './table/table';
import Pagination from './table/pagination';
import Header from './table/header';
import Footer from './table/footer';
import SettlementRow from './table/settlementRow';
import { Settlement, settlements } from '../mockData/settlementMockData';

const tooltip = {
  order_id: "The order is is the unique identifier for a transaction. This id ususally comes from your order backend system.  ",
  date: "This is the date that the settlement was paid out on. This is different from when the order was paid by the customer",
  amount: "This is the amount charged by the PSP as seen in the settlement report. If you get paid out in another currency that you charge the customer this is something you need to take into account",
  status: "There are 2 statuses 'Reconciled' and 'Unreconciled'. The unreconciled settlements will show you how many percent and the amount left that has not been reconciled.",
  psp: "A PSP is a payment service provider and is the company that you use in order for you customers to pay for your goods/services.",
  items: "These are the items that the customer bought as seen in the order system",
  actions: "There are 3 actions:\n\n\n 1. Manually Resolve - Resolve this order/settlement by selection from a list of potential candidates for manual reconciliation \n 2. Remove - This order/settlement. This could be due to transactions that were made erroneously \n 3.Update - Update a row"
}

let columns = ["Settlement ID", "Amount", "PSP", "Date", "# Orders", "Status", "paid out", "Actions"]


export default function SettlementsTable() {
  const [showModal, setShowModal] = useState(false)

  let content = <Fragment>
    <Header columns={columns}></Header>
    <tbody>
      {
        settlements.map((settlement: Settlement, key:number) => (
          <SettlementRow key={key} settlement={settlement} showModal={setShowModal} />
        ))
      }
    </tbody>
    <Footer columns={columns}></Footer>
  </Fragment>


  return (

    <div className='align-middle justify-center'>
      <Table content={content} setShowModal={setShowModal}></Table>
      <Pagination pages={[1, 2]}></Pagination>
    </div>

  )
}
