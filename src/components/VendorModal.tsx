import React, {FC, useState, useEffect} from 'react';
import {Button} from "@/components/src/pages/getpaid";
import {AiOutlineLeft, AiOutlinePlus} from "react-icons/ai";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle: string;
}

const Modal: FC<ModalProps> = ({isOpen, onClose, title, subtitle}) => {
    const [companyName, setCompanyName] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="z-[2000] fixed inset-0 flex flex-col justify-center items-centerr bg-black bg-opacity-50">

            <div className="bg-white w-full h-full p-4 rounded-lg px-60">
                <button
                    onClick={onClose}
                    className="top-4 right-4 p-2 text-2xl text-blackrounded mt-20"
                >
                    <AiOutlineLeft></AiOutlineLeft>
                </button>
                <div className={"flex flex-col "}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <h2 className="text-2xl mb-4">{title}</h2>
                        <p className="text-md mb-4">{subtitle}
                            <a className={"underline underline-offset-2 text-indigo-400"}>Import vendors</a>
                        </p>
                    </div>

                    <p className="text-sm text-gray-400 mb-4">{"Vendor's company name"}</p>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="mb-2 w-full p-2 border-b rounded"
                    />
                    <p className="text-sm text-gray-400 mb-4">{"Vendor's full name"}</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-2 w-full p-2 border-b rounded"
                    />
                    <p className="text-sm text-gray-400 mb-4">{"Email"}</p>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-2 w-full p-2 border-b rounded"
                    />
                    <p className="text-sm text-gray-400 mb-4">{"Phone number"}</p>
                    <input
                        type="string"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mb-2 w-full p-2 border-b rounded"
                    />
                    <div className="flex justify-center items-center mt-20">
                        <button className={"rounded-md bg-riddle-palette-dark-purple px-4 py-2 text-white"}>
                            <div className={"flex space-x-5 items-center"}>
                                <AiOutlinePlus/>
                                <p>{"Add vendor"}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
