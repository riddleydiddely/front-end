import { BsArrowLeftShort, BsFillEnvelopeOpenFill, BsSearch } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbArrowMerge, TbHexagonLetterP } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(true)

  const MenuItems = [
    { title: "Home", icon: <BiHomeAlt2 /> },
    { title: "Dashboards", icon: <RiDashboardFill /> },
    { title: "Reconciliation", icon: <TbArrowMerge /> },
    { title: "Messages", icon: <TbMessages /> },
    { title: "Financing", icon: <MdAttachMoney /> },
    { title: "Connections",spacing: "true", icon: <AiOutlineApi /> },
    { title: "Settings", icon: <GoSettings /> },
    { title: "Account", icon: <VscAccount /> },

  ]

  return (
    <div className="flex">

      <div className={`bg-main-green h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} relative duration-300`}>
        <BsArrowLeftShort className={`text-4xl bg-white text-main-green rounded-full absolute -right-5 top-9 border border-main-green ${!open && "rotate-180"} mr`} onClick={() => setOpen(!open)}></BsArrowLeftShort>
        <div className="inline-flex">
          <TbHexagonLetterP className="bg-transparent text-white text-4xl rounded cursor-pointer block float-left mr-4"></TbHexagonLetterP>
          <h1 className={`text-2xl duration-300 text-white ${!open && "scale-0"}`}>Puls</h1>
        </div>
        {/* Searchbar */}
        <div className={`flex items-center rounded-md bg-light-white mt-4 px-4 py-2 ${open ? "px-4" : "px-19"}`}>
          <BsSearch className="text-white text-lg mr-3">

          </BsSearch>
          <input type="search" placeholder="Search" className={`text-white bg-transparent w-full text-white outline-none `} />
        </div>


        <ul className="pt-2">
          {MenuItems.map((item, index) => (
            <>
              <li key={index} className={`text-green-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-secondary-green rounded-md mt-2 ${item.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl text-white block float-left">
                  {item.icon ? item.icon : <RiDashboardFill />}
                </span>
                <span className={`text-white text-base font-medium flex-1 ${!open && "hidden"}`}>{item.title}</span>

              </li>
            </>
          ))}
        </ul>

      </div>
      <div className="p-7">
        <h1 className="text-3xl font-bold">
          Welcome to Pulse, the financial platform for e-commerce
        </h1>
      </div>
    </div>
  )
}
