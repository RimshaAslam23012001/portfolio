"use client"; 
import React from 'react'
import '@/styles/navbar.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className='brand'>
               RA
            </div>
            <div className='nav-con'>
            <ul className={`navbar-links ${isMenuOpen ? 'open' :''}`}>
                <li className='navbar-Link'><a href='#hero'>Home</a></li>
                <li className='navbar-Link'><a href='#about'>About</a></li>
                <li className='navbar-Link'><a href='#projects'>Projects</a></li>
                <li className='navbar-Link'><a href='#skills'>Skills</a></li>
                <li className='navbar-Link'><a href='#contact'>Contact</a></li>
               
            </ul></div>
           <div className='navbar-menu-icon' onClick={toggleMenu}>
            {isMenuOpen? <AiOutlineClose size={30}/> : 
              <AiOutlineMenu size={30} className='menu-open'/>
            }
             </div>

        </div>
        {
          isMenuOpen && (
            <div>
              <ul className='navbar-menu'>
                <li className='menu-link'><a href='#hero' onClick={toggleMenu}>Home</a></li>
                <li className='menu-link'><a href='#about' onClick={toggleMenu}>About</a></li>
                <li className='menu-link'><a href='#projects' onClick={toggleMenu}>Projects</a></li>
                <li className='menu-link'><a href='#skills' onClick={toggleMenu}>Skills</a></li>
                <li className='menu-link'><a href='#contact' onClick={toggleMenu}>Contact</a></li>
              </ul>
            </div>
          )
        }
      
    </div>
  )
}

export default Navbar;
