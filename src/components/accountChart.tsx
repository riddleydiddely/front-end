import React from 'react';

import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { PropsWithChildren } from 'react'

export type IChartProps = {
    dataSeries: ApexOptions['series'],
    type?: any,
    numberOfPredictions: number
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
        colors: ['rgb(240,0,184)', '#546E7A', '#E91E63', '#FF9800'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        xaxis: {
            type: 'date',
            categories: ["2023-04-19", "2023-04-20", "2023-04-21", "2023-04-22", "2023-04-23", "2023-04-24", "2023-04-25"]
        },

        tooltip: {
            x: {
                format: "yyyy-dd-mm"
            },
        },
    }

    console.log("============== options ================")
    console.log(options)
    console.log("============== numberOfPredictions ================")
    props.numberOfPredictions

    return <div id="chart">
        <ReactApexChart options={options} series={props.dataSeries} type={props.type} height={350} />
    </div>
        ;
};