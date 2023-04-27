import {IDashboard} from '../../../types/IDashboard'
import ApexAxisChartSeries from "react-apexcharts"
import { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { StatsData } from '@/components/types/StatsData';
 const options: Props = {
  chart: {
    height: 350,
    type: 'line'
  },

  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    type: 'date',
    categories: ["2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23", "2018-09-24", "2018-09-25"]
  },
  tooltip: {
    x: {
      format: "yyyy-dd-mm"
    },
  },
}


 const countryReconciliation: ApexOptions['series'] = [{
  name: 'SE',
  data: [100, 100, 100, 100, 100, 100, 97]
},
{
  name: 'DK',
  data: [100, 95, 100, 99, 90, 81, 76]
},
{
  name: 'NO',
  data: [100, 100, 100, 100, 90, 75, 89]
},
{
  name: 'UK',
  data: [100, 90, 87, 86, 81, 75, 70]
}
]

 const pspReconciliation: ApexOptions['series'] = [
  {
    name: 'Klarna',
    data: [99, 91, 100, 97, 90, 81, 76]
  },
  {
    name: 'Paypal',
    data: [100, 99, 98, 96, 100, 100, 99]
  },
  {
    name: 'Adyen',
    data: [100, 100, 100, 100, 95, 91, 95]
  },
  {
    name: 'Stripe',
    data: [100, 95, 96, 94, 90, 92, 93]
  }
]

 const omsReconciliation: ApexOptions['series'] = [
  {
    name: 'Shopify',
    data: [99, 91, 100, 97, 90, 81, 76]
  },
  {
    name: 'Amazon',
    data: [40, 44, 46, 51, 36, 51, 41]
  },
]


 const currencyReconciliation: ApexOptions['series'] = [
  {
    name: 'EUR',
    data: [100, 100, 99, 97, 100, 100, 100]
  },
  {
    name: 'SEK',
    data: [99, 97, 100, 100, 100, 96, 80]
  },
  {
    name: 'USD',
    data: [100, 100, 95, 94, 96, 93, 100]
  },
]

 export const totalReconciliation: ApexOptions['series'] = [
  {
    name: 'Reconciliation',
    data: [100, 100, 100, 100, 99, 88, 85]
  },
]

export const statsReconciliation: StatsData[] = [
  {
    title: "Total revenue",
    value: "$94,000",
    desc: "1st Jan 2023 - 31st Jan 2023",
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  },
  {
    title: "Average daily revenue",
    value: "$7567",
    desc: "Average total daily revenue (1st Jan 2023 - 31st Jan 2023)",
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>

  },
  {
    title: "Predicted end of quarter revenue",
    value: "$380,221",
    desc: "The esitmate is based on previous revenue history",
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
  },
]


export const MockReconciliationData: IDashboard[] = [
  { title: "Reconciliation per country", subtitle: "aggregated per day", data: countryReconciliation, options: options, url: "/account/3000" },
  { title: "Reconciliation per PSP", subtitle: "aggregated per day", data: pspReconciliation, options: options, url: "/account/3000" },
  { title: "Reconciliation per OMS", subtitle: "aggregated per day", data: omsReconciliation, options: options, url: "/account/3000" },
  { title: "Reconciliation per currency", subtitle: "aggregated per day", data: currencyReconciliation, options: options, url: "/account/3000" }
]