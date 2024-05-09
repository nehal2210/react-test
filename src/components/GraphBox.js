import React, { useState, useEffect } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowRightDownFill, RiArrowRightUpFill } from "react-icons/ri";
import AreaChart from "./AreaChart";


const GraphBox = ({ name, perc, amount, iconInit, iconProcess, iconFinished }) => {

    const [expandCard, setExpandCard] = useState(false);
    const [expandGraph, setExpandGraph] = useState(false);
    const [cardBImg, setCardBImg] = useState(iconInit);

    useEffect(() => {
        if (!expandCard) {
            setCardBImg(iconInit);
        } else {
            setCardBImg(iconFinished);

        }
    }, [expandCard])



    return (
        <div style={{ width: expandCard ? '1000px' : '400px' }} className="flex cursor-pointer h-[250px] bg-white p-8 shadow-md shadow-gray-50 transition-all duration-700">
            <div style={{ width: '530px' }}>
                <img src={cardBImg} className="transition-all duration-1000" alt="image" width={60} height={60} />
                <div className="flex items-center mt-4">
                    <p>{name}</p>
                    <div className={perc > 0 ? 'graph-arrow bg-lime-500 rounded-full py-[2px] px-[4px] ms-3 mt-1' : 'graph-arrow bg-red-600 rounded-full py-[2px] px-[4px] ms-3 mt-1'}>

                        {
                            perc > 0 ? <RiArrowRightUpFill size={12} /> : <RiArrowRightDownFill size={12} color='white' />
                        }
                    </div>
                    <p className="graph-arrow ms-1 text-sm">{perc}%</p>
                    <p className="text-slate-400 ms-4 text-xs hidden hide-line">VS. LAST WEEK</p>
                </div>
                <div onMouseEnter={() => setCardBImg(iconProcess)} onMouseLeave={() => { !expandCard && setCardBImg(iconInit) }} className="graph-card graph-leave">
                    <p className="card-amount text-5xl transition-all duration-200 mt-4">{amount}</p>

                    <div className="detail-btn hidden mt-16 items-center transition-all duration-200">
                        <button className="bg-stone-200 h-12 px-12 hover:bg-stone-300">View Account Details</button>
                        <button onClick={() => {
                            setExpandCard(!expandCard); setCardBImg(iconFinished); setTimeout(() => {
                                setExpandGraph(!expandGraph)
                            }, 0)
                        }} className="bg-indigo-600 h-12 px-4 ms-8">
                            <AiOutlineThunderbolt size={18} color="white" />
                        </button>
                    </div>
                </div>
            </div>
            {
                expandGraph && (
                    <div className="flex justify-between w-full relative">
                        <div className="chart">
                            <AreaChart />
                        </div>
                        <button onClick={() => {
                            setExpandCard(false); setTimeout(() => {
                                setExpandGraph(false)
                            }, 100);
                        }} className="w-8 h-full bg-slate-200 absolute -right-8 flex justify-center items-center hover:bg-slate-300">
                            <IoIosArrowBack />
                        </button>

                    </div>

                )
            }

        </div>
    )
}

export default GraphBox;