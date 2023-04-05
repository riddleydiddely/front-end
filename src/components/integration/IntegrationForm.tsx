import React from 'react';
import { PropsWithChildren } from 'react'

interface IIntegrationCard {
    img_url: string
}
export function IntegrationCard(props: PropsWithChildren<IIntegrationCard>) {


    return (
        <div>
            <img className='h-10 justify-center mb-5' src={`/${props.img_url}`}></img>
            <form className="align-middle justify-center">

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="name@comapny.com" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="*********" />

                    </div>
                </div>

                <button className='button-main-large'>Login</button>

            </form>
        </div>
    );
}

export default IntegrationCard;
