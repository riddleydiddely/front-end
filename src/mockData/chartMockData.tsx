import IDashboard from '../components/dashboard'
import ApexAxisChartSeries from "react-apexcharts"
import { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


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
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
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


const Account3000: ApexOptions['series'] = [{
  name: '3000',
  data: [100, 100, 100, 100, 100, 100, 97]
}
]

const Account3001: ApexOptions['series'] = [{
  name: '3000',
  data: [100, 95, 100, 100, 90, 75, 70]
}
]
const Account3002: ApexOptions['series'] = [{
  name: '3000',
  data: [100, 100, 100, 100, 90, 75, 89]
}
]
const Account3003: ApexOptions['series'] = [{
  name: '3000',
  data: [100, 90, 87, 86, 81, 75, 70]
}
]

export const DashboardData: IDashboard[] = [
  { title: "SE Payables", subtitle: "% Reconciled for account 3000", data: Account3000, options: options, url: "/account/3000" },
  { title: "DK Payables", subtitle: "% Reconciled for account 3001", data: Account3001, options: options, url: "/account/3001" },
  { title: "NO Payables", subtitle: "% Reconciled for account 3002", data: Account3002, options: options, url: "/account/3002" },
  { title: "UK Payables", subtitle: "% Reconciled for account 3003", data: Account3003, options: options, url: "/account/3003" },
]