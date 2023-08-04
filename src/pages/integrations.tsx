import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, {useContext} from 'react'
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import Tabs from '../components/common/tabs';
import { Tab } from '../components/common/tabs';
import IntegrationCard from '../components/integration/IntegrationCard';
import { AccountingSystems, PaymentServiceProvidors, OrderManagementSystems } from '../mockData/IntegrationMockData';
import { GetServerSideProps } from 'next';
import { GetStaticPaths } from 'next'
import {ActiveSubMenuContext} from "@/components/src/components/layout";
import {TabName} from "@/components/types/Tabs";

const gridStyling = "grid gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

function getContent(currentTab: TabName) {

  if (currentTab === "PSPs") {
    return <div className={gridStyling}>
      {PaymentServiceProvidors.map((system, index) => (IntegrationCard(system, index, Boolean(false))))}

    </div>
  } else if (currentTab === "OMS") {
    return <div className={gridStyling}>
      {OrderManagementSystems.map((system, index) => (IntegrationCard(system, index, Boolean(false))))}

    </div>
  } else if (currentTab === "Banks") {
    return <div></div>
  } else if (currentTab === "Accounting Systems") {
    return <div className={gridStyling}>
      {AccountingSystems.map((system, index) => (IntegrationCard(system, index, Boolean(false))))}

    </div>
  }
}


function Integrations() {

  const currentTab = useContext(ActiveSubMenuContext);

  return (
    <div>
      {/*{Tabs(tabSettings)}*/}
      {getContent(currentTab ?? "Accounting Systems")}
    </div>
  )
}

export default Integrations;


