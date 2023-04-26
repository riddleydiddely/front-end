import IDashboard from '../../components/dashboard'
import ApexAxisChartSeries from "react-apexcharts"
import { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { StatsData } from '@/components/types/StatsData';


export interface IDashboard {
  title: string,
  subtitle: string,
  data: ApexOptions['series'],
  options: Props,
  url: string
}

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


const countryFees: ApexOptions['series'] = [{
  name: 'SE',
  data: [6, 5, 3, 8, 1, 20, 25]
},
{
  name: 'DK',
  data: [10, 11, 10, 8, 14, 9, 3]
},
{
  name: 'NO',
  data: [50, 45, 46, 37, 60, 75, 39]
},
{
  name: 'UK',
  data: [89, 30, 12, 46, 12, 15, 50]
}
]

const pspFees: ApexOptions['series'] = [
  {
    name: 'Klarna',
    data: [21, 10, 7, 12, 18, 10, 9]
  },
  {
    name: 'Paypal',
    data: [6, 5, 3, 8, 1, 20, 25]
  },
  {
    name: 'Adyen',
    data: [10, 90, 46, 33, 63, 89, 31]
  },
  {
    name: 'Stripe',
    data: [94, 40, 9, 30, 19, 16, 54]
  }
]

const omsFees: ApexOptions['series'] = [
  {
    name: 'Shopify',
    data: [99, 91, 100, 97, 90, 81, 76]
  },
  {
    name: 'Amazon',
    data: [40, 44, 46, 51, 36, 51, 41]
  },
]


const currencyFees: ApexOptions['series'] = [
  {
    name: 'EUR',
    data: [1001, 1101, 1131, 981, 940, 1600, 1900]
  },
  {
    name: 'SEK',
    data: [500, 583, 749, 1233, 1002, 1233, 1500]
  },
  {
    name: 'USD',
    data: [100, 150, 99, 170, 190, 163, 200]
  },
]

export const totalFees: ApexOptions['series'] = [
  {
    name: 'Fee',
    data: [10, 13, 12, 11, 15, 16, 14]
  },
]

export const statsFees: StatsData[] = [
  {
    title: "Total Fees",
    value: "$1023",
    desc: "1st Jan 2023 - 31st Jan 2023",
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  },
  {
    title: "Average Fee",
    value: "2.97%",
    desc: "Average fee (1st Jan 2023 - 31st Jan 2023)",
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>

  },
  {
    title: "Most expensive PSP",
    value: "Klarna 3.51%",
    desc: "Average fee for Klarna (1st Jan 2023 - 31st Jan 2023)",
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
  },
]

export const MockFeesData: IDashboard[] = [
  { title: "Fee per country", subtitle: "aggregated per day", data: countryFees, options: options, url: "/account/3000" },
  { title: "Fee per PSP", subtitle: "aggregated per day", data: pspFees, options: options, url: "/account/3000" },
  { title: "Fee per OMS", subtitle: "aggregated per day", data: omsFees, options: options, url: "/account/3000" },
  { title: "Fee per currency", subtitle: "aggregated per day", data: currencyFees, options: options, url: "/account/3000" }
]