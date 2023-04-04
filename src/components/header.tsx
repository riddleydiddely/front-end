import { TbHexagonLetterP } from "react-icons/tb";
import { PropsWithChildren } from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

interface HeaderProps {
    title: string,
    subtitle: string
};

export const Header = (props: PropsWithChildren<HeaderProps>) => {


    const [open, setOpen] = useState(false)
    return (
        // <header className="  bg-white border-white   w-screen h-[10rem] ">

        //     <div className="flex items-center justify-between  xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        //         <h1 className="text-3xl">{props.title}</h1>

        //         <FiMenu
        //             className={`lg:hidden block h-6 w-6 cursor-pointer`}
        //             onClick={() => setOpen(!open)}
        //         />

        //         <nav
        //             className={`${open ? "block" : "hidden"
        //                 } w-full lg:flex lg:items-center lg:w-auto `}>
        //             <ul className="text-base text-gray-300 lg:flex lg:justify-between">

        //                 <li className="">
        //                     <a className="lg:px-5 m-10 py-2 hover:bg-secondary-green block text-white  font-semibold "> Log in </a>
        //                 </li>
        //                 <li className="">
        //                     <a className="lg:px-5 m-10 py-2 bg-main-green hover:bg-secondary-green block text-center text-white rounded-xl  font-semibold " href="login"> Log in </a>
        //                 </li>
        //             </ul>
        //         </nav>
        //     </div>

        // </header>

        <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12 text-6xl">
                        <a aria-label="Home" href="/#">
                            <TbHexagonLetterP></TbHexagonLetterP>
                        </a>
                        <h1>{props.title}</h1>

                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/login">
                                <img className="rounded-full h-10 w-10" src="/profile_pic_donny.jpeg" alt="profile-pic" />
                            </a>
                        </div>
                        <a className="group inline-flex items-center justify-center rounded-xl py-3 px-5 text-m font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-main-green text-white hover:text-slate-100 hover:bg-secondary-green active:bg-seconndary active:text-blue-100 focus-visible:outline-blue-600" href="/login">
                            <span>Sign in</span>
                        </a>
                        <div className="-mr-1 md:hidden">
                            <div >
                                <button className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none" type="button">
                                    <FiMenu onClick={() => setOpen(!open)}></FiMenu>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}