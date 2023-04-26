import { useRouter } from 'next/router'
import TransactionsTable from "../../components/transactionsTable";
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Insights from '../../components/reconciliation/insights';
import Tabs from '../../components/common/tabs';
import SettlementsTable from '../../components/settlementsTable';


function getContent(currentTab: string) {

  if (currentTab === "insights") {
    return Insights(currentTab)
  } else {
    return <SettlementsTable></SettlementsTable>
  }
}
const Settlements = () => {

  const router = useRouter()
  const [currentTab, setCurrentTab] = useState("settlements")
  const tabs = [
    { id: "insights", button_name: "insights" },
    { id: "settlements", button_name: "settlements" }
  ]
  let tabSettings = {
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    tabs: tabs
  }

  return <div>
    {Tabs(tabSettings)}
    {getContent(currentTab)}
  </div>
}

export default Settlements