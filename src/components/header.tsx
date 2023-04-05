import { TbHexagonLetterP } from "react-icons/tb";
import { PropsWithChildren } from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
    title: string,
    subtitle: string
};

export const Header = (props: PropsWithChildren<HeaderProps>) => {


    const [open, setOpen] = useState(false)
    return (

        <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12 text-6xl">
                        <Link aria-label="Home" href="/">
                            <TbHexagonLetterP></TbHexagonLetterP>
                        </Link>
                        <h1>{props.title}</h1>

                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <Link className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/login">
                                <Image width={20} height={20} className="rounded-full h-10 w-10" src="/profile_pic_donny.jpeg" alt="profile-pic" />
                            </Link>
                        </div>
                        <Link className="group inline-flex items-center justify-center rounded-xl py-3 px-5 text-m font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-main-green text-white hover:text-slate-100 hover:bg-secondary-green active:bg-seconndary active:text-blue-100 focus-visible:outline-blue-600" href="/login">
                            <span>Sign in</span>
                        </Link>
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