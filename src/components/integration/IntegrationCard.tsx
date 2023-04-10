import React, { useState } from 'react';
import Modal from '../../components/modal';
import IErpSystems from "../../mockData/IntegrationMockData";
import IntegrationForm from './IntegrationForm';


export function IntegrationCard(item: IErpSystems) {
    const [showModal, setShowModal] = useState(false)

    return (

        <div className={`py-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ${item.available && "hover:border-black"} hover:shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                </h5>
                <img className='py-8 h-50' src={item.image_source} alt="" />
                <p>{item.description}</p>
                <p className="pt-10 font-normal text-gray-700 dark:text-gray-400">
                    {item.available}
                </p>
                <div className='align-bottom'>
                    <button onClick={() => setShowModal(true)} className={`${item.available ? "button-main" : "button-unavailable"}`}>
                        
                        <a href="https://apps.fortnox.se/oauth-v1/auth?client_id=GQgPFNBPkuoB&redirect_uri=http://localhost:3000/connections/&scope=bookkeeping%20salary&state=somestate123&access_type=offline&response_type=code&account_type=service">

                        {item.available ? "Add" : "Coming soon"}
                        </a>
                    </button>
                </div>
            </div>
            <Modal isVisible={showModal} closeModal={setShowModal} >
                <IntegrationForm img_url={item.image_source} ></IntegrationForm>
            </Modal>
        </div>
    );
}

export default IntegrationCard;
