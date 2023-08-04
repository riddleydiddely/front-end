import React, {useState, Dispatch, SetStateAction, useContext} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {SlMagnifier} from "react-icons/sl";
import {GrDocumentNotes} from "react-icons/gr";
import {BiSortAlt2} from "react-icons/bi";
import {IoFilterOutline} from "react-icons/io5";
import {ActiveSubMenuContext} from "@/components/src/components/layout";
import {switchCase} from "@babel/types";
import {
    MockRevenueData,
    statsRevenue,
    totalReceivables
} from "@/components/src/mockData/mockDashboardData/MockRevenueData";

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


type ButtonProps = {
    text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="flex justify-center items-center">
            <button className={"rounded-md bg-riddle-palette-dark-purple px-4 py-2 text-white"}>
                <div className={"flex space-x-5 items-center"}>
                    <AiOutlinePlus/>
                    <p>{text}</p>
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
                className="flex-1 flex flex-col rounded-xl w-full justify-between mx-auto shadow-2xl bg-base-200">
                <div>
                    <TopButtons activeButton={activeButton} setActiveButton={setActiveButton}/>
                    <div className={"flex align-middle justify-center items-center p-10"}>
                        <MainContent activeButton={activeButton}/>
                    </div>
                </div>
                <Button text={"Start getting paid"}/>
            </div>
        </div>
    );
}

function Vendor() {
    return    <div className="flex-1 flex flex-col rounded-l-xl justify-between mx-auto max-w-7xl p-12 sm:px-6 lg:px-8 bg-base-200">
        <h1 className={"text-4xl font-extrabold"}>Vendors</h1>
        <div>
            <div className={"flex align-middle justify-center items-center p-10"}>
                <img className={"h-72  rounded-2xl p-4"} src={"/void.svg"} alt={""}/>
            </div>
            <div className={"flex flex-col align-middle items-center my-10"}>

                <p className={"font-extrabold text-xl"}>Add your firs vendor</p>
                <p>Save vendor details and their preferred way of getting paid</p>
            </div>
        </div>
        <Button text={"Add vendors"}/>
    </div>;
}
const Pay: React.FC = () => {
    const [activeButton, setActiveButton] = useState("Unsent");
    const currentTab = useContext(ActiveSubMenuContext);


    switch (currentTab) {
        case 'Payments':
            return <MainPayArea activeButton={activeButton} setActiveButton={setActiveButton}/>
        case 'Vendors':
            return <div className={"flex"}>
                <Vendor />
                <div className={" flex flex-1  align-middle items-center justify-center text-gray-400"}>

                    <p className={"mt-10 text-xl"}>You have no vendors yet</p>

                </div>
            </div>
        default:
            return null;
    }


}

export default Pay;
