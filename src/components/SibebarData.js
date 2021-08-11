import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as TiIcons from 'react-icons/ti'
import * as GiIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io'




export const SidebarDate = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'About Us',
        path: '/aboutus',
        icon: <TiIcons.TiHeartOutline />,
        cName: 'nav-text',
    },
    {
        title: 'Git User',
        path: '/products',
        icon: <FaIcons.FaProductHunt />,
        cName: 'nav-text',
    },
    {
        title: 'Contact Us',
        path: '/contactus',
        icon: <TiIcons.TiContacts />,
        cName: 'nav-text',
    },
    {
        title: 'Voting',
        path: '/voting',
        icon: <GiIcons.GiVote />,
        cName: 'nav-text',
    },
    {
        title: 'QR Scanner',
        path: '/qrscaner',
        icon: <IoIcons.IoIosQrScanner />, 
        cName: 'nav-text',
    },
]