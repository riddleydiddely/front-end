import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";

import { TbArrowMerge, TbHexagonLetterR } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";

import { VscAccount } from "react-icons/vsc";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useState } from 'react';
import Link from 'next/link';
import React from "react";

const MenuItems = [

  { title: "Dashboards", route: "dashboards", icon: <RiDashboardFill /> },
  { title: "Reconciliation", route: "reconciliation", icon: <TbArrowMerge /> },
  { title: "Messages", route: "messages", icon: <TbMessages /> },
  { title: "Financing", route: "financing", icon: <MdAttachMoney /> },
  { title: "Integrations", route: "integrations", spacing: "true", icon: <AiOutlineApi /> },
  { title: "Settings", route: "settings", icon: <AiOutlineApi /> },
  { title: "Account", route: "account", icon: <VscAccount /> },
  { title: "About", route: "about", icon: <HiOutlineInformationCircle /> },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
      <div className={`fixed z-10 bg-black h-screen p-5 pt-5 ${open ? "w-72" : "w-20"} duration-300`}>

        {/* Expand arrow */}
        <BsArrowLeftShort className={`text-4xl bg-white text-black rounded-full absolute -right-5 top-100 border border-black ${!open && "rotate-180"} mr`} onClick={() => setOpen(!open)}></BsArrowLeftShort>

        {/* Logo */}
        <div className="inline-flex">
          <Link href="/">
          <TbHexagonLetterR className="bg-transparent text-white text-4xl rounded cursor-pointer block float-left mr-4">

          </TbHexagonLetterR>
          </Link>
          <h1 className={`text-2xl duration-300 text-white ${!open && "hidden"}`}>Riddle</h1>
        </div>

        {/* Searchbar */}
        <div className={`flex items-center rounded-md bg-light-white mt-4 px-4 py-2 ${open ? "px-4" : "px-19"}`}>
          <BsSearch className="text-white text-lg mr-3"></BsSearch>
          <input type="search" placeholder="Search" className={`text-white bg-transparent w-full outline-none `} />
        </div>

        {/* Menu items */}
        <ul className="pt-2">
          {MenuItems.map((item, index) => (
              <li key={index} className={`text-green-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-secondary-green rounded-md mt-2 ${item.spacing ? "mt-9" : "mt-2"}`}>
                <Link href={`/${item.route}`} className="text-2xl text-white block float-left">
                  {item.icon ? item.icon : <RiDashboardFill />}
                </Link>
                <Link href={`/${item.route}`} className={`text-white text-base font-medium flex-1 ${!open && "hidden"}`}>{item.title}</Link>
              </li>
          ))}
        </ul>
      </div>


  )
}
