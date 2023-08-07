import SettlementsTable from '../../components/settlementsTable';
import React, {useContext, useState} from "react";
import {ActiveSubMenuContext} from "@/components/src/components/layout";



const Settlements = () => {



  const [activeButton, setActiveButton] = useState("Unsent");
  const currentTab = useContext(ActiveSubMenuContext);


  switch (currentTab) {
    case 'Accounts Receivables':
      return <SettlementsTable></SettlementsTable>
    default:
      return null;
  }

}

export default Settlements
