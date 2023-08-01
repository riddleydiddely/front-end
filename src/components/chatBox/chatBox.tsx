import React, {FC, Fragment, ReactNode} from 'react';

import {TbHexagonLetterR} from "react-icons/tb";
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";
import {PropsWithChildren} from 'react'
import {FiMenu} from "react-icons/fi";
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useSession, signIn, signOut} from "next-auth/react"
import {Session} from "next-auth";
import {BarChart} from "@/components/src/components/barchart";


type ChatBoxProps = {
    session: Session | null
};

function getCopilotResponse(message: string): JSX.Element {
    const timestamp: string = new Date().toDateString();
    return (
        <div className="chat chat-start">
            <div className="chat-image text-4xl">

                <TbHexagonLetterR></TbHexagonLetterR>
            </div>
            <div className="chat-header">
                Riddle Co-pilot
                <time className="text-xs opacity-50 pl-3">{timestamp}</time>
            </div>
            <div className="chat-bubble bg-[rgb(240,0,184)]">{message}</div>

        </div>
    )
}

function getUserInput(message: string, image_source: string, name: string): JSX.Element {
    const timestamp: string = new Date().toDateString();
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={image_source}/>
                </div>
            </div>
            <div className="chat-header">
                {name}
                <time className="text-xs opacity-50 pl-3">{timestamp}</time>
            </div>
            <div className="chat-bubble bg-black">{message}</div>

        </div>
    )
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const response1a = getCopilotResponse("Sure here is how Denmark performed the past 6 months")
let initialConversation: JSX.Element[] = [
    getCopilotResponse("How can I help you today?"),
]

export default function ChatBox(props: ChatBoxProps) {

    const image = props.session?.user?.image ?? ''
    const name = props.session?.user?.name ?? ''
    const [inputValue, setInputValue] = useState('');
    const [chatOpen, setChatOpen] = useState(false)
    const [conversation, setConversation] = useState<JSX.Element[]>(initialConversation)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event.target.value\n")
        console.log(event.target.value)
        setInputValue(event.target.value); // Update the state when the input value changes
    }
    const handleKeyDown = async (event: any) => {
        let tempConv = conversation;
        if (event.key === 'Enter') {
            event.preventDefault()
            await sleep(500)
            tempConv = tempConv.concat(getUserInput(event.target.value, image, name))
            setInputValue(''); // Clear the input field
            setConversation(tempConv)
            await sleep(1000)
            tempConv = tempConv.concat(<progress className="progress w-32"></progress>)
            setConversation(tempConv)
            await sleep(3000)
            tempConv.pop()
            tempConv = tempConv.concat(response1a)
            tempConv = tempConv.concat(<BarChart dataSeries={undefined} numberOfPredictions={2}></BarChart>
            )
            setConversation(tempConv)


        }
    };


    return (
        <div className="fixed bottom-0 right-0 z-50 shadow-xl pr-4 pb-4  ">
            <div
                className={`w-80 ${chatOpen ? "h-96" : "h-10"} duration-700 flex flex-col rounded-lg border border-gray-300 shadow-md bg-white`}>

                <div className={`flex items-center justify-between border-b p-2 `}>

                    <div className="flex items-center">
                        <TbHexagonLetterR></TbHexagonLetterR>
                        <div className="font-semibold pl-2">
                            Riddle Co-pilot
                        </div>
                    </div>
                    <button className='justify-end' onClick={() => setChatOpen(!chatOpen)}>
                        {chatOpen ? <AiOutlineDown></AiOutlineDown> : <AiOutlineUp></AiOutlineUp>}
                    </button>
                </div>

                <div className={`flex-1 px-4 py-4 overflow-y-auto duration-600 ${chatOpen ? "" : "hidden"}`}>
                    {conversation}
                </div>

                <div className={`flex items-center border-t p-2 duration-1000 ${chatOpen ? "" : "hidden"}`}>
                    <input type="text"
                           placeholder="Ask co-pilot anything"
                           className="input-md input-bordered w-full max-w-xs"
                           value={inputValue}
                           onChange={(input) => handleChange(input)}
                           onKeyDown={(input) => handleKeyDown(input)}
                    />
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
