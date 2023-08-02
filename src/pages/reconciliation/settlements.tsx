import { useRouter } from 'next/router'
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
  const [currentTab, setCurrentTab] = useState("insights")
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

    <SettlementsTable></SettlementsTable>
  </div>
}

export default Settlements
