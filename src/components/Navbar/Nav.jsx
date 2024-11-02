import React from 'react'
import logo from "../../assets/Logo.svg"
import { IoChatbubblesOutline, IoLogOutOutline, IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'

const Nav = () => {
    return (
        <div>
            <nav className='bg-[#F4F6F8] py-3 px-8 flex items-center justify-between'>
                <div className='px-10 py-1'>
                    <img width="120px" src={logo} alt="logo" />
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-3 bg-white rounded-full'>
                        <IoChatbubblesOutline size={20} />
                    </div>
                    <div className='p-3 bg-white rounded-full'>
                        <IoNotificationsOutline size={20} />
                    </div>
                    <div className='p-3 bg-white rounded-full'>
                        <IoSettingsOutline size={20} />
                    </div>
                    <div className='p-3 bg-white rounded-full'>
                        <IoLogOutOutline size={20} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav