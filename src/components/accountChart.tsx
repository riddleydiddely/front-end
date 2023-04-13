import React from 'react';

import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { PropsWithChildren } from 'react'

export type IChartProps = {
    dataSeries: ApexOptions['series']
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

export const AccountChart = (props: PropsWithChildren<IChartProps>) => {
    return <div id="chart">
        <ReactApexChart options={options} series={props.dataSeries} type="area" height={350} />
    </div>
        ;
};