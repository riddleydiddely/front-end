import React, { ReactElement } from 'react'
import { Fragment } from 'react';


type ModalProps = {
    isVisible: boolean,
    closeModal: Function
};

type Suggestions = {
    match_score: string,
    transaction_id: string,
    price: number,
    source: string,
    currency: string,
    time: Date
};


const suggestions: Suggestions[] = [
    {
        match_score: "50%",
        transaction_id: "SDG-4G4",
        price: 76,
        source: "Klarna",
        currency: "€",
        time: new Date("2023-03-01"),
    },
    {
        match_score: "68%",
        transaction_id: "K46-455",
        price: 578,
        source: "Klarna",
        currency: "€",
        time: new Date("2023-03-01"),
    }
    ,
    {
        match_score: "78%",
        transaction_id: "566-yt5",
        price: 278,
        source: "Klarna",
        currency: "$",
        time: new Date("2023-03-01"),
    }
    ,
    {
        match_score: "48%",
        transaction_id: "9Y7-48Q",
        price: 854,
        source: "Klarna",
        currency: "€",
        time: new Date("2023-03-01"),
    }
]

export const Modal = (props: ModalProps): ReactElement => {

    if (!props.isVisible) {
        return <Fragment></Fragment>
    }

    return (
        <div className='my-custom-style fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center'>
            <div className='w-3/4 h-auto'>

                <div className='bg-white p-3 rounded-2xl'>
                    <h1 className='text-3xl bold py-3 text-center'>Manual reconciliation</h1>
                    <p className='text-center italic pb-4'>Add suggested transactions to manually reconcile this transaction</p>
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Match score
                                </th>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    ID
                                </th>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Price
                                </th>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Soruce
                                </th>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        {suggestions.map((suggestion) => (
                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.match_score}</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.transaction_id}</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.price}</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.source}</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    <button className="bg-green-600 px-2 py-1 rounded-lg text-white transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:bg-main-green focus:outline-none">
                                        add
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </table>
                    <button className='text-white rounded-lg px-2 py-1 bg-gray-400' onClick={() => { props.closeModal(false) }}>Close</button>
                </div>

            </div>
        </div>
    )
}

export default Modal