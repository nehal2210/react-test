import React, { useState, useEffect } from 'react';
import ProgressItem from './ProgressItem';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';


const ProgressTabs = () => {


    const [activeTab, setActiveTab] = useState(1);
    const [arrowAnimate, setArrowAnimate] = useState(false);

    useEffect(() => {
        setArrowAnimate(true);
        setTimeout(() => {
            setArrowAnimate(false);
        }, 1000);

    }, [activeTab])

    const activeAnimation = () => {
        setArrowAnimate(true);
        setTimeout(() => {
            setArrowAnimate(false);
        }, 1000);
    }



    return (
        <div className='p-6'>
            <div className='flex'>
                <button className={activeTab === 1 ? 'tab-1 w-1/2 p-2 flex items-center border-b-2 border-black cursor-pointer transition-all duration-200' : 'tab-1 w-1/2 p-2 flex items-center border-b-2 border-gray-200 cursor-pointer transition-all duration-200'} onClick={() => { setActiveTab(1); activeAnimation() }}>
                    <div className={activeTab === 1 ? 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-black' : 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-gray-200 overflow-hidden'}>
                        <BsArrowDownShort className={arrowAnimate ? 'arrow-down tab-ani-down' : 'arrow-down'} color='white' size={30} />
                        <div className='w-[25px] h-[1px] rounded-full border-b-4 border-white'></div>
                    </div>
                    <div className='ms-4'>
                        <p className={activeTab === 1 ? 'poppins-medium text-sm text-gray-500' : 'poppins-medium text-sm text-gray-500'}>MONEY IN</p>
                        <p className={activeTab === 1 ? 'poppins-medium text-3xl text-black' : 'poppins-medium text-3xl text-gray-500'}>$5,083</p>
                    </div>
                </button>
                <div className={activeTab === 2 ? 'tab-2 w-1/2 p-2 flex items-center border-b-2 border-black cursor-pointer transition-all duration-200' : 'tab-2 w-1/2 p-2 flex items-center border-b-2 border-gray-200 cursor-pointer transition-all duration-200'} onClick={() => { setActiveTab(2); activeAnimation() }}>
                    <div className={activeTab === 2 ? 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-black' : 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-gray-200'}>
                        <BsArrowUpShort className={arrowAnimate ? 'arrow-up tab-ani-up' : 'arrow-up'} color='white' size={30} />
                        <div className='w-[25px] h-[1px] rounded-full border-b-4 border-white'></div>
                    </div>
                    <div className='ms-4'>
                        <p className={activeTab === 2 ? 'poppins-medium text-sm text-black' : 'poppins-medium text-sm text-gray-500'}>MONEY OUT</p>
                        <p className={activeTab === 2 ? 'poppins-medium text-3xl text-black' : 'poppins-medium text-3xl text-gray-500'}>$485<span className={activeTab === 2 ? 'text-sm  text-black' : 'text-sm text-gray-500'}>.64</span></p>
                    </div>
                </div>
            </div>


            <ProgressItem name={'Stripe'} percent={70} val={'3,514'} dec={'72'} color={'#b9abf7'} />
            <ProgressItem name={'Crypto Academy'} percent={20} val={'1,017'} dec={'49'} color={'#94e5f7'} />
            <ProgressItem name={'Wire Return'} percent={6} val={'318'} dec={'44'} color={'#f0b0cc'} />
           


        </div>
    )
}


export default ProgressTabs;