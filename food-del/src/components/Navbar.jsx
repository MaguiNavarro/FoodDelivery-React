import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu]= useState("menu")
  return (
    <div className='Navbar'> 
   <img src={assets.logo}  alt="" className='logo' />
    <ul className="navbar-menu">
      <Link onClick={ ()=>setMenu("home")} className={menu==="home" ? "active": ""}>home</Link>
     <a href='#explorer-menu'  onClick={ ()=>setMenu("menu")} className={menu==="menu" ? "active": ""}>menu</a>
     <a href='#app-download'  onClick={ ()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active":""}>mobile app</a>
     <a href='#footer'  onClick={ ()=>setMenu("contact-us")} className={menu==="contact-us" ? "active":""}>contact us</a>
    </ul>
    <div className='navbar-right'>
      <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot">

            </div>
        </div>
        <button  onClick={()=>setShowLogin(true)} className='button'>sign in</button>
      </div>
    </div>
  )
}

export default Navbar