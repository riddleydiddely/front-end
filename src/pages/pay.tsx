import React, {useState, Dispatch, SetStateAction} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {SlMagnifier} from "react-icons/sl";
import {GrDocumentNotes} from "react-icons/gr";
import {BiSortAlt2} from "react-icons/bi";
import {IoFilterOutline} from "react-icons/io5";

interface TopButtonsProps {
    activeButton: string;
    setActiveButton: Dispatch<SetStateAction<string>>;
}

const TopButtons: React.FC<TopButtonsProps> = ({activeButton, setActiveButton}) => {
    return (
        <div id="bar" className={"flex space-x-10 justify-between"}>
            <div id="buttons" className={"flex space-x-2 justify-between"}>
                <button
                    className={`font-bold hover:text-black ${activeButton === "Inbox" ? "underline underline-offset-4 text-black" : "text-gray-400"}`}
                    onClick={() => setActiveButton("Inbox")}>Inbox
                </button>
                <button
                    className={`font-bold hover:text-black ${activeButton === "Scheduled" ? "underline underline-offset-4 text-black" : "text-gray-400"}`}
                    onClick={() => setActiveButton("Scheduled")}>Scheduled
                </button>
                <button
                    className={`font-bold hover:text-black ${activeButton === "Paid" ? "underline underline-offset-4 text-black" : "text-gray-400"}`}
                    onClick={() => setActiveButton("Paid")}>Paid
                </button>
            </div>
            <div id="icons" className={"flex space-x-2 justify-between"}>
                <button className={"hover:text-black text-gray-500 font-extrabold text-xl"}><SlMagnifier/></button>
                <button className={"hover:text-black text-gray-500 font-extrabold text-xl"}><IoFilterOutline/></button>
                <button className={"hover:text-black text-gray-500 font-extrabold text-xl"}><BiSortAlt2/></button>
                <button className={"hover:text-black text-gray-500 font-extrabold text-xl"}><GrDocumentNotes/></button>
            </div>
        </div>
    );
}

interface MainContentProps {
    activeButton: string;
}

const MainContent: React.FC<MainContentProps> = ({activeButton}) => {
    switch (activeButton) {
        case "Inbox":
            return <div className={"flex flex-col items-center justify-center align-middle"}>
                <img className={"h-72  rounded-2xl p-4"} src={"/inbox.svg"} alt={""}/>
                <p className={"mt-10 text-xl"}>{"Woho! you're all caught up"}</p>
            </div>;
        case "Scheduled":
            return <div className={"flex flex-col items-center justify-center align-middle"}>
                <img className={"h-72 rounded-2xl p-4"} src={"/calendar.svg"} alt={""}/>
                <p className={"mt-10 text-xl"}>You have no scheduled payments</p>
            </div>;
        case "Paid":
            return <div className={"flex flex-col items-center justify-center align-middle"}>
                <img className={"h-72 rounded-2xl p-4"} src={"/pay.svg"} alt={""}/>
                <p className={"mt-10 text-xl"}>You have no paid invoices</p>
            </div>;
        default:
            return <div></div>;
    }
}

const SchedulePayment: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <button className={"rounded-md bg-riddle-palette-dark-purple px-4 py-2 text-white"}>
                <div className={"flex space-x-5 items-center"}>
                    <AiOutlinePlus/>
                    <p>Schedule a payment</p>
                </div>
            </button>
        </div>
    );
}

interface MainPayAreaProps {
    activeButton: string;
    setActiveButton: Dispatch<SetStateAction<string>>;
}

const MainPayArea: React.FC<MainPayAreaProps> = ({activeButton, setActiveButton}) => {
    return (
        <div
            className="flex-1 flex flex-col rounded-l-xl justify-between mx-auto max-w-7xl p-12 sm:px-6 lg:px-8 bg-base-200">
            <div>
                <TopButtons activeButton={activeButton} setActiveButton={setActiveButton}/>
                <div className={"flex align-middle justify-center items-center p-10"}>
                    <MainContent activeButton={activeButton}/>
                </div>
            </div>
            <SchedulePayment/>
        </div>
    );
}

const EmptyInvoice: React.FC = () => {
    const top = <div className={"flex justify-between"}>
        <div>
            <div className={`w-56 h-7 bg-gray-200 rounded-xl mb-2`}></div>
            <div className={`w-32 h-5 bg-gray-100 rounded-xl mb-2`}></div>
        </div>
        <div>
            <div className={`w-40 h-14 bg-gray-200 rounded-xl mb-2`}></div>
        </div>
    </div>;
    const main = <div className={"border-gray-200 border-2 rounded-xl p-8"}>
        <div className={`w-96 h-7 bg-gray-200 rounded-xl mb-10`}></div>
        <div className={"flex justify-between"}>
            <div className={"space-y-5"}>
                <div>
                    <div className={`w-56 h-7 bg-gray-200 rounded-xl mb-2`}></div>
                    <div className={`w-32 h-5 bg-gray-100 rounded-xl mb-2`}></div>
                </div>
                <div>
                    <div className={`w-44 h-7 bg-gray-200 rounded-xl mb-2`}></div>
                    <div className={`w-20 h-5 bg-gray-100 rounded-xl mb-2`}></div>
                </div>
                <div>
                    <div className={`w-64 h-7 bg-gray-200 rounded-xl mb-2`}></div>
                    <div className={`w-8 h-5 bg-gray-100 rounded-xl mb-2`}></div>
                </div>   <div>
                    <div className={`w-56 h-7 bg-gray-200 rounded-xl mb-2`}></div>
                    <div className={`w-32 h-5 bg-gray-100 rounded-xl mb-2`}></div>
                </div>
            </div>
            <div className={`w-40 h-96 bg-gray-200 rounded-xl mb-2`}></div>
        </div>
        <div className={"flex justify-between mt-10"}>
            <div>
                <div className={`w-56 h-7 bg-gray-200 rounded-xl mb-2`}></div>
            </div>
            <div>
                <div className={`w-40 h-7 bg-gray-200 rounded-xl mb-2`}></div>
            </div>
        </div>
    </div>
    return <div className="flex-1 rounded-r-md mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {top}
        {main}
    </div>;
}

const Pay: React.FC = () => {
    const [activeButton, setActiveButton] = useState("Inbox");
    return (
        <div className={"flex"}>
            <MainPayArea activeButton={activeButton} setActiveButton={setActiveButton}/>
            <EmptyInvoice/>
        </div>
    );
}

export default Pay;
