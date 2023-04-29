import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import Tabs from '../../components/common/tabs';
import { Tab } from '../../components/common/tabs';
import IntegrationCard from '../../components/integration/IntegrationCard';
import { AccountingSystems, PaymentServiceProvidors, OrderManagementSystems } from '../../mockData/IntegrationMockData';
import { GetServerSideProps } from 'next';
import { GetStaticPaths } from 'next'

const gridStyling = "grid gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

function getContent(currentTab: string) {

  if (currentTab === "psps") {
    return <div className={gridStyling}>
      {PaymentServiceProvidors.map((system, index) => (IntegrationCard(system, index, Boolean(false))))}

    </div>
  } else if (currentTab === "oms") {
    return <div className={gridStyling}>
      {OrderManagementSystems.map((system, index) => (IntegrationCard(system, index, Boolean(false))))}

    </div>
  } else if (currentTab === "banks") {
    return <div></div>
  } else if (currentTab === "accountingsystems") {
    return <div className={gridStyling}>
      {AccountingSystems.map((system, index) => (IntegrationCard(system, index, Boolean(false))))}

    </div>
  }
}

const tabs: Tab[] = [
  { id: "accountingsystems", button_name: "Accounting Systems" },
  { id: "psps", button_name: "PSPs" },
  { id: "oms", button_name: "OMS" },
  { id: "banks", button_name: "Banks", disabled: true },
]
function Integrations() {

  const router = useRouter()


  const [currentTab, setCurrentTab] = useState("psps")



  let tabSettings = {
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    tabs: tabs
  }


  return (
    <div>
      {Tabs(tabSettings)}
      {getContent(currentTab)}
    </div>
  )
}

export default Integrations;


