import React from 'react';

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false});
import {Props} from 'react-apexcharts';
import {ApexOptions} from 'apexcharts';
import {PropsWithChildren} from 'react'

export type IChartProps = {
    dataSeries: ApexOptions['series'],
    type?: any,
    numberOfPredictions: number,
    dates? : string[]
}

export const AccountChart = (props: PropsWithChildren<IChartProps>) => {
    let options: Props = {
        forecastDataPoints: {
            count: props.numberOfPredictions,
            fillOpacity: 0.99,
            strokeWidth: 3,
            dashArray: 3,
        },
        chart: {
            yaxis: {
                min: 0,
                max: 100
            },
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            },
        },
        colors: ['rgb(0,0,0)', '#546E7A', '#E91E63', '#FF9800'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        xaxis: {
            //type: 'date',
            tickAmount: 10,
            categories: [
                '2023-07-02', '2023-07-03', '2023-07-04',
                '2023-07-05', '2023-07-06', '2023-07-07',
                '2023-07-08', '2023-07-09', '2023-07-10',
                '2023-07-11', '2023-07-12', '2023-07-13',
                '2023-07-14', '2023-07-15', '2023-07-16',
                '2023-07-17', '2023-07-18', '2023-07-19',
                '2023-07-20', '2023-07-21', '2023-07-22',
                '2023-07-23', '2023-07-24', '2023-07-25',
                '2023-07-26', '2023-07-27', '2023-07-28',
                '2023-07-29', '2023-07-30', '2023-07-31',
                '2023-08-01'
            ]

        },

        tooltip: {
            x: {
                format: "yyyy-dd-mm"
            },
        },
    }

    return <div id="chart">
        <ReactApexChart options={options} series={props.dataSeries} type={props.type} height={350}/>
    </div>
}
