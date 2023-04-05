import React, { ReactElement } from 'react'
import { SuggestionsData, Suggestions as ISuggestion } from './../mockData/suggestionsMockData'


export const Suggestions = (): ReactElement => {


    return (
        <div className=' w-full h-auto'>
            <div className='bg-white p-2 rounded-2xl'>
                <div className='span'>
                    <h1 className='text-3xl bold py-3 text-center'>Manual reconciliation</h1>
                    <div className='text-right pr-4'>
                        <button className='text-center rounded-lg bg-gray-400 hover:bg-main-green text-white px-2 py-1'>Manual input</button>
                    </div>
                </div>
                <p className='text-center italic pb-4'>Add suggested transactions to manually reconcile this transaction</p>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-200 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="  py-3.5 px-4 text-m bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Match score</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">ID</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Price</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Soruce</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>
                        </tr>
                    </thead>

                    {SuggestionsData.map((suggestion: ISuggestion, key) => (
                        <tr key={key}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.match_score}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.transaction_id}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.price}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.source}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <button className="bg-green-600 px-2 py-1 rounded-lg text-white transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:bg-main-green focus:outline-none">add</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>

    )
}

export default Suggestions