import { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export interface IDashboard {
    title: string,
    subtitle: string,
    data: ApexOptions['series'],
    options: Props,
    url: string
  }