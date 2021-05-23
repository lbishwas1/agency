import React, { useState } from 'react'
import Style from './Navbar.module.css'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {CgClose} from 'react-icons/cg'
import {NavLink as Link} from 'react-router-dom'
function Navbar() {
    const [open,setOpen] =useState(false);
    const showSidebar= () => setOpen(!open)
    const hamburgerIcon =  <HiOutlineMenuAlt2 onClick={showSidebar} className={Style.hamburger}/>
    const closeIcon =  <CgClose onClick={()=>setOpen(!open)} className={Style.hamburger}/>

   
 return (
     <>
     <div className={Style.container}>
         <a className={Style.logo} href="/">Workree</a>

     <nav className={open? 'sidebar active ': 'sidebar ' }>
     <Link to="/services" className={Style.nav} >
         <li className={Style.navitem}>Services</li>
         </Link>
         <Link to="/casestudy" className={Style.nav} >
         <li className={Style.navitem}>Case Studies</li>
         </Link>
         <Link to='/about' className={Style.nav} >
         <li className={Style.navitem} >About Us</li>
         </Link>
         <Link to='/contact' className={Style.nav}>
         <li className={Style.navitem}>Contacts</li>
         </Link>
         <button className={Style.demo}>Request Demo</button>
     </nav>
    {open ?closeIcon : hamburgerIcon}
   </div>
    
     </>
 )

}
export default Navbar