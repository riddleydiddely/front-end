import React from "react";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false});
import Chart, {Props} from "react-apexcharts";
import {ApexOptions} from 'apexcharts';
import {PropsWithChildren} from 'react'
import {IChartProps} from "@/components/src/components/accountChart";

export const BarChart = (props: PropsWithChildren<IChartProps>) => {
    let options: Props = {

        forecastDataPoints: {
            count: props.numberOfPredictions,
            fillOpacity: 0.99,
            strokeWidth: 3,
            dashArray: 3,
        },
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            },
        },
        xaxis: {
            categories: ["Aug","Sep","Oct","Nov","Dec","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 5 // This adds rounded corners

            }
        },
        colors: ['#ACE3BD', '#EA7D7C', '#546E7A', '#FF9800'],
        dataLabels: {
            enabled: false
        },
        series: [
            {
                name: "Revenue",
                data: [3000, 2030, 2470, 1124, 6323,3634, 9345, 5000, 3500, 4000, 4500, 6000]
            },
            {
                name: "Expenses",
                data: [3230, 1250, 5600, 2686, 3835,1345, 2000, 1500, 3500, 2000, 4000, 5233]
            }
        ]
    }

    return <div id="chart">
        <ReactApexChart options={options} series={options.series} type="bar" height={350}/>

    </div>

};
