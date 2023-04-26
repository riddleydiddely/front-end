import React, { ReactElement } from 'react'
import { SuggestionsData, Suggestions as ISuggestion } from './../mockData/suggestionsMockData'


export const Suggestions = (): ReactElement => {


    return (
        <div className=' w-full h-auto overflow-x-auto '>
            <div className='bg-white p-2 rounded-2xl'>
                <div className='span'>
                    <h1 className='text-3xl bold py-3 text-center'>Manual reconciliation</h1>
                    
                </div>
                <p className='text-center italic pb-4 '>Add suggested transactions to manually reconcile this transaction</p>
                <div className="divider">Suggested settlments</div>
                <table className="table w-full">
                    <thead className="bg-gray-200 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="  py-3.5 px-4 text-m bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Match score</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">ID</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Price</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Soruce</th>
                            <th scope="col" className="py-3.5 px-4 text-sm bold text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                    {SuggestionsData.map((suggestion: ISuggestion, key) => (
                        <tr className='hover' key={suggestion.transaction_id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.match_score}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.transaction_id}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.price}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{suggestion.source}</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <button className="btn btn-secondary">add</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Suggestions