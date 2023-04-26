import React, { useState } from 'react';
import Integration from "../../mockData/IntegrationMockData";


export function IntegrationCard(item: Integration, index: number, addedFortnox: boolean) {

    return (
        <div key={index} className="card w-auto h-[30rem] bg-base-100 shadow-xl hover:shadow-xl border">

            <figure className="px-10 pt-10 h-3/4"><img className='py-8 h-50' src={`/${item.image_source}`} alt={item.name} /></figure>
            <div className="card-body">
                <div className='flex-col'>

                <h2 className="card-title">{item.name}</h2>
                <p className='align-bottom align-text-bottom'>{item.description}</p>
                </div>
                <div className={`card-actions justify-center`}>
                    <a href={item.url}>
                        {
                            addedFortnox && item.name === "Fortnox" ?
                                (<button className={`btn btn-error `}>Remove</button>) :
                                (<button className={`btn ${item.url ? "btn-wide" : "btn-wide btn-disabled"} `}>{item.url ? "Add" : "Coming soon"}</button>)
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}

export default IntegrationCard;
