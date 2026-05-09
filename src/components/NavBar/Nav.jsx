import React, { useState } from 'react'
import './Nav.css'
import logo from '../../../p.jpg'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLocalFireDepartment } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { FaTent } from "react-icons/fa6";
import { MdCabin } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div id='Nav'>
      <div className={`hamburger ${isOpen ? 'open' : ''}`}>
        <div className="ham1">Login</div>
        <div className="ham1">Signup</div>
        <div className="ham1">List your home</div>
        <div className="ham1">Help center</div>
      </div>
      <div className="nav1">
        <div className="logo">
          <img src={logo} alt="" width="50px" />
          <h1>Private Property Rental</h1>
        </div>
        <div className="search">
          <input type="text" placeholder='search destination' />
          <button>Search <CiSearch /></button>
        </div>
        <div className="ham">
          <button id='btn1'>List your home</button>
          <button id='btn2' onClick={() => setIsOpen(prev => !prev)}><GiHamburgerMenu /> <CgProfile /></button>
        </div>
      </div>
      <div className="nav2" >
        <div className="svg11"><MdLocalFireDepartment /><h3>Trending</h3></div>
        <div className="svg11"><GiFamilyHouse /><h3>Houses</h3></div>
        <div className="svg11"><MdOutlineBedroomParent /><h3>Rooms</h3></div>
        <div className="svg11"><PiFarm /><h3>Farm Houses</h3></div>
        <div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div>
        <div className="svg11"><FaTent /><h3>Tents</h3></div>
        <div className="svg11"><MdCabin /><h3>Cabins</h3></div>
        <div className="svg11"><SiHomeassistantcommunitystore /><h3>Shops</h3></div>
        <div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div>
      </div>
    </div>
  )
}

export default Nav
