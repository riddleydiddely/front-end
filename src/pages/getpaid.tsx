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
    const buttonNames = ["Unsent", "Sent", "In progress", "Paid"];
    return (
        <div className="flex border-b">
            {buttonNames.map(button => (
                <button
                    key={button}
                    className={`flex justify-between w-1/4 py-2 px-4 text-center ${activeButton === button ? 'border-b-2 border-black bg-white' : 'border-transparent'} hover:border-black`}
                    onClick={() => setActiveButton(button)}
                >
                    <div className={"flex flex-col items-start justify-start"}>
                        <p className={"font-extrabold items-start justify-start"}>{button}</p>
                        <p className={"font-extralight"}>No items</p>
                    </div>
                    <div className={"flex items-end"}>
                        {`$0.00`}
                    </div>
                </button>
            ))}
        </div>
    );
}
interface MainContentProps {
    activeButton: string;
}

const MainContent: React.FC<MainContentProps> = ({activeButton}) => {
    switch (activeButton) {
        case "Unsent":
            return <div className={"flex flex-col items-center justify-center align-middle"}>
                <img className={"h-72  rounded-2xl p-4"} src={"/get_paid.svg"} alt={""}/>
                <p className={"mt-10 text-xl"}>{"Woho! you're all caught up"}</p>
            </div>;
        case "Sent":
            return <div className={"flex flex-col items-center justify-center align-middle"}>
                <img className={"h-72 rounded-2xl p-4"} src={"/inbox.svg"} alt={""}/>
                <p className={"mt-10 text-xl"}>You have nothing sent</p>
            </div>;
        case "In progress":
            return <div className={"flex flex-col items-center justify-center align-middle"}>
                <img className={"h-72 rounded-2xl p-4"} src={"/pay.svg"} alt={""}/>
                <p className={"mt-10 text-xl"}>No in progress payments</p>
            </div>;
        case "Paid":
            return <div className={"flex flex-col items-center justify-center align-middle"}>
                <img className={"h-72 rounded-2xl p-4"} src={"/calendar.svg"} alt={""}/>
                <p className={"mt-10 text-xl"}>No one has paid you</p>
            </div>;
        default:
            return <div></div>;
    }
}

const SchedulePayment: React.FC = () => {
    return (
        <div className="flex justify-center items-center mb-10">
            <button className={"rounded-md bg-riddle-palette-dark-purple px-4 py-2 text-white"}>
                <div className={" flex space-x-5 items-center"}>

                    <p>Start getting paid</p>
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
        <div className={"flex-1 flex flex-col "}>
            <h1 className={"text-4xl font-extrabold mb-10"}>Get paid</h1>
            <div
                className="flex-1 flex flex-col rounded-xl w-full justify-between mx-auto max-w-7xl   shadow-2xl bg-base-200">
                <div>
                    <TopButtons activeButton={activeButton} setActiveButton={setActiveButton}/>
                    <div className={"flex align-middle justify-center items-center p-10"}>
                        <MainContent activeButton={activeButton}/>
                    </div>
                </div>
                <SchedulePayment/>
            </div>
        </div>
    );
}


const Pay: React.FC = () => {
    const [activeButton, setActiveButton] = useState("Unsent");
    return (
        <div className={"flex"}>
            <MainPayArea activeButton={activeButton} setActiveButton={setActiveButton}/>

        </div>
    );
}

export default Pay;
