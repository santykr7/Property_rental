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

const Nav = ({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { name: "Trending", icon: <MdLocalFireDepartment /> },
    { name: "Houses", icon: <GiFamilyHouse /> },
    { name: "Rooms", icon: <MdOutlineBedroomParent /> },
    { name: "Farm Houses", icon: <PiFarm /> },
    { name: "Pool Houses", icon: <MdOutlinePool /> },
    { name: "Tents", icon: <FaTent /> },
    { name: "Cabins", icon: <MdCabin /> },
    { name: "Shops", icon: <SiHomeassistantcommunitystore /> },
    { name: "Forest Houses", icon: <FaTreeCity /> },
  ]

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
          <input type="text" placeholder='search destination' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <button>Search <CiSearch /></button>
        </div>
        <div className="ham">
          <button id='btn1'>List your home</button>
          <button id='btn2' onClick={() => setIsOpen(prev => !prev)}><GiHamburgerMenu /> <CgProfile /></button>
        </div>
      </div>
      <div className="nav2" >
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`svg11 ${selectedCategory === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.name)}
          >{cat.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Nav
