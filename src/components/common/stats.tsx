import { StatsData } from "@/components/types/StatsData";
import { ReactNode } from "react";


export default function Stats(data: StatsData[]): ReactNode {
    return (
        <div className="stats shadow flex align-middle justify-center my-10   ">
            {data.map((element: StatsData, key: number) => (
                <div key={key} className="stat ">
                    <div className="stat-figure text-secondary">
                        {element.svg}
                    </div>
                    <div className="stat-title">{element.title}</div>
                    <div className="stat-value">{element.value}</div>
                    <div className="stat-desc">{element.desc}</div>
                </div>
            )
            )}
        </div>)
}
