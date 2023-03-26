import { TbHexagonLetterP } from "react-icons/tb";
import { PropsWithChildren } from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

type LayoutProps = {};

export const Header = (props: PropsWithChildren<LayoutProps>) => {


    const [open, setOpen] = useState(false)
    return (
        <header className=" border-b  bg-white border-gray-100 py-2  w-screen h-[4rem] ">

            <div className="flex items-center justify-between  xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                <h1 className="text-5xl">{props.children}</h1>

                <FiMenu
                    className={`lg:hidden block h-6 w-6 cursor-pointer`}
                    onClick={() => setOpen(!open)}
                />

                <nav 
                    className={`${
                        open ? "block" : "hidden"
                    } w-full lg:flex lg:items-center lg:w-auto `}>
                    <ul className="text-base text-gray-300 lg:flex lg:justify-between">

                        <li className="">
                            <a className="lg:px-5 py-2  hover:bg-secondary-green block text-white  font-semibold "> Log in </a>
                        </li>
                        <li className="">
                            <a className="lg:px-5 py-2 bg-main-green hover:bg-secondary-green block text-center text-white rounded-xl  font-semibold " href="login"> Log in </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}