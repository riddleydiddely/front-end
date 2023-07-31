import React from 'react';

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false});
import {Props} from 'react-apexcharts';
import {ApexOptions} from 'apexcharts';
import {PropsWithChildren} from 'react'

export type IChartProps = {
    dataSeries: ApexOptions['series'],
    type?: any,
    numberOfPredictions: number
}

const TODAY = new Date(Date.now())
let START_DATE: Date = new Date();
START_DATE.setDate(TODAY.getDate() - 6);

function dateRangeGenerator(start:Date, end:Date): string[] {
    const dates: string[] = [];

    for(let currentDate = start; currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');  // months are 0-based in JavaScript
        const day = String(currentDate.getDate()).padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);
    }
    console.log("dates\n")
    console.log(dates)
    return [];
}

export const BarChart = (props: PropsWithChildren<IChartProps>) => {
    const dates = dateRangeGenerator(START_DATE, TODAY)
    let options: Props = {
        bar: {
            horizontal: false,
                borderRadius: 0,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'last',
                columnWidth: '70%',
                barHeight: '70%',
                distributed: false,
                rangeBarOverlap: true,
                rangeBarGroupRows: false,
                hideZeroBarsWhenGrouped: false,
                isDumbbell: false,
                dumbbellColors: undefined,
                isFunnel: false,
                isFunnel3d: true,
                colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                    backgroundBarColors: [],
                    backgroundBarOpacity: 1,
                    backgroundBarRadius: 0,
            },
            dataLabels: {
                position: 'top',
                    maxItems: 100,
                    hideOverflowingLabels: true,
                    // orientation: horizontal,
                    total: {
                    enabled: false,
                        formatter: undefined,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                        color: '#373d3f',
                            fontSize: '12px',
                            fontFamily: undefined,
                            fontWeight: 600
                    }
                }
            }
        }
    }


    return <div id="chart">
        <ReactApexChart options={options} series={props.dataSeries} type={props.type} height={350}/>
    </div>
        ;
};
