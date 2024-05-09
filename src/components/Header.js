import React from "react";
import logo from '../images/logo.png';
import menuIcon from '../images/menu-icon.png';
import profileImage from "../images/profile.png";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiNotification2Line, RiSearch2Line, RiSettingsLine } from "react-icons/ri";

const Header = () => {



    return (
        <div className="w-full flex justify-between items-center py-4 px-8">
            <div className="flex items-center ms-5">
                <img src={logo} alt="logo" width={40} />
                <div className="flex justify-between items-center">
                    <img className="ms-5" src={menuIcon} alt="logo" width={50} />
                    <p className="text-white ms-2">Framer</p>
                    <TiArrowUnsorted color="white" className="cursor-pointer ms-2" />
                </div>
     
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="py-1 px-2 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-500 hover:text-white">Dashboard</li>
                    <li className="py-1 px-2 cursor-pointer text-slate-400 hover:text-indigo-500">Payments</li>
                    <li className="py-1 px-2 cursor-pointer text-slate-400 hover:text-indigo-500">Transaction</li>
                    <li className="py-1 px-2 cursor-pointer text-slate-400 hover:text-indigo-500">Cards</li>
                    <li className="py-1 px-2 cursor-pointer text-slate-400 hover:text-indigo-500">Invoices</li>
                    <li className="py-1 px-2 cursor-pointer text-slate-400 hover:text-indigo-500">Insights</li>
                </ul>
            </div>
            <div className="right-side items-center flex">
                <div className="flex gap-4">
                    <RiSearch2Line className="cursor-pointer" color="#fff" />
                    <RiNotification2Line className="cursor-pointer" color="#fff" />
                </div>
                <div className="w-[1px] h-4 bg-slate-700 mx-4"></div>
                <div className="flex items-center gap-4">
                    <RiSettingsLine className="cursor-pointer" color="#fff" />
                    <img src={profileImage} alt="profile" className="w-8 h-8 rounded-full cursor-pointer bg-orange-300" />
                </div>
            </div>
        </div>
    )
}

export default Header;