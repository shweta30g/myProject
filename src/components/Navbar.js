import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { SidebarDate } from './SibebarData'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import './Navbar.css'


 
function Navbar() {
    const[sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (   
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className = "navbar">
             <Link to='#' className = "menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
             </Link>
             <div className="logo">
                <h1>Wonder Happens</h1>
            </div>
             <div className="searchIcon">
                <AiIcons.AiOutlineSearch />
            </div>
    
           </div> 
           <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
           <ul className = "nav-menu-items" onClick={showSidebar}>
           <li className = "nav-toggle">
            <Link to='#' className = "menu-bar">
                <AiIcons.AiOutlineClose />
            </Link>
           </li>
           {SidebarDate.map((item, index) => {
               return (
                   <li key={index} className={item.cName}>
                   <Link to={item.path}>

                        {item.icon}
                        <span className="submenu">{item.title}</span>
                        
                   </Link>
                   </li>
               )
           })}
           </ul>
           </nav>
           </IconContext.Provider>
       </>
    )
}

export default Navbar
