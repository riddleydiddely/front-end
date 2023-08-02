import React, { useState, useEffect, FC, ReactElement } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {CircleFlag} from "react-circle-flags";

type dropdownItem = {country:string, entity:string}

interface DropdownProps {
    options: dropdownItem[];
}

function Dropdown(input: DropdownProps)  {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<dropdownItem | null>(null);
    const router = useRouter()

    useEffect(() => {
        const savedOptionString = Cookies.get('entity');
        const savedOption = savedOptionString ? JSON.parse(savedOptionString) : null;
        const initialOption: dropdownItem = savedOption
            ? input.options.find(option => option.entity === savedOption.entity) as dropdownItem
            : input.options[0] as dropdownItem;
        setSelectedOption(initialOption);
    }, []);
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (option: dropdownItem) => () => {
        setSelectedOption(option);
        Cookies.set('entity', JSON.stringify(option));
        setIsOpen(false);
        router.reload();
    };

    return (
        <div className="max-w-lg w-54">
            <div className="relative">
                <button onClick={toggling}
                        className="w-full py-2 px-3 text-left bg-white font-medium text-gray-600 hover:text-gray-400">
                    <div className={"flex items-center"}><CircleFlag className={`mr-3 h-4 w-4`} countryCode={selectedOption?.country as string}/> {selectedOption?.entity}</div>
                </button>
                {isOpen && (
                    <ul className="absolute w-full overflow-auto text-base bg-white rounded-md shadow-2xl max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {input.options.map((option, key) => (
                            <li className="text-gray-900 rounded-md hover:text-gray-700 hover:bg-gray-100 p-4"
                                key={key}>
                                <button onClick={onOptionClicked(option)} className="w-full text-left">
                                    <div className={"flex items-center"}>
                                        <CircleFlag className={`mr-3 h-4 w-4`} countryCode={option.country}/>
                                        {option.entity}
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
