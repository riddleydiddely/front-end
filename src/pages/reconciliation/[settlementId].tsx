import { useRouter } from 'next/router'
import TransactionsTable from "../../components/transactionsTable";
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import InfoCard, { InfoCardProps } from '../../components/common/infoCard';
import { Transaction, transactionItems } from '../../mockData/transactionMockData'

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
function getTabs(currentTab: string, setCurrentTab: Function) {
  return (
    <div className="btn-group lg:btn-group-horizontal flex align-middle justify-center my-10">
      <button className={`btn ${currentTab === "overview" && "btn-secondary"}`} onClick={() => setCurrentTab("overview")}>Overview</button>
      <button className={`btn ${currentTab === "unreconciled_transactions" && "btn-secondary"}`} onClick={() => setCurrentTab("unreconciled_transactions")}> Unreconciled transactions</button>
      <button className={`btn ${currentTab === "reconciled_transactions" && "btn-secondary"}`} onClick={() => setCurrentTab("reconciled_transactions")}> Reconciled Transactions</button>
    </div>
  )
}

function getContent(currentTab: string, transactionItems: Transaction[]) {

  if (currentTab === "overview") {
    return <div>
      {getInfoCard(infoCard)}
      {TransactionsTable(transactionItems)}
    </div>
  } else if (currentTab === "unreconciled_transactions") {
    return TransactionsTable(transactionItems.filter((t: Transaction) => t.amount != t.reconciled_amount))
  } else if (currentTab === "reconciled_transactions") {
    return TransactionsTable(transactionItems.filter((t: Transaction) => t.amount === t.reconciled_amount))
  }
}


function getInfoCard(infoCard: InfoCardProps) {
  return <div className='grid gap-x-8 gap-y-5 my-10
  sm:grid-cols-2
  md:grid-cols-2
  lg:grid-cols-2
  xl:grid-cols-2'>
    {InfoCard(infoCard)}
  </div>
}

const AccountNumber = () => {
  const [currentTab, setCurrentTab] = useState("overview")

  return <div>

    {getTabs(currentTab, setCurrentTab)}
    {getContent(currentTab, transactionItems)}
  </div>
}

export default AccountNumber