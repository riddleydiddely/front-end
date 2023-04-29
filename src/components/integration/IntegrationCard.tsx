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
                             getButton(item.name, item.status, addedFortnox)
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}

function getButton(name: string, status: "Added" | "NotAdded" | "ComingSoon", addedFortnox: boolean) {

    if(addedFortnox){
        if (name === "Fortnox") {
            return (<button className={`btn btn-error btn-wide `}>Remove</button>)
        }else{
          return getNormalButtong(status)
        }
    } else{
        return getNormalButtong(status)
    }
}

function getNormalButtong(status: "Added" | "NotAdded" | "ComingSoon") {
    if (status === "Added") {
        return (<button className={`btn btn-error btn-wide `}>Remove integration</button>)
    }
    if (status === "NotAdded") {
        return (<button className={`btn  btn-wide `}>Add Integrate</button>)
    }
    else  {
        return (<button className={`btn btn-wide btn-disabled`}>ComingSoon</button>)
    }
}

export default IntegrationCard;
