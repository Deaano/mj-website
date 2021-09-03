import React, { useState } from 'react'
import {Link} from '@material-ui/core';
import './Nav.css'
import Logo from '../images/mj-logo.png'


function Nav() {

    const [menu, setMenu] = useState(false);

    //Desktop Nav Bar Plus Mobile Nav Bar Original State

    if(menu === false){
        return <nav>
        <ul className='nav-links'>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>OUR RANGE</Link>
            </li>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>THE KNOWLEDGE</Link>
            </li>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>SOURCING</Link>
            </li>
            <img className='logo' src={Logo} alt='logo'/>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>ABOUT US</Link>
            </li>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>SKIPPER'S CATCH</Link>
            </li>
            <li className='nav-item'>
                <Link href='/' style={{color:'red', textDecoration:'none'}}>MY LOCAL M&J</Link>
            </li>
        </ul>

        

        <div className='mobile-menu'>
            <span className='menu'>MENU</span>
            
            <span>
            <i onClick={() => {
                if(menu){
                    setMenu(false)
                } else {
                    setMenu(true)
                }
            }} class="fas fa-bars"></i></span>
        </div>
    </nav>


    } else {

        //Mobile Nav Bar

        return <nav> 
        <img className='logo' style={{marginLeft:'37%',marginTop:'23px'}} src={Logo} alt='logo'/> 
        
        <div className='mobile-menu'>
        <span className='menu'>MENU</span>
        <span><i onClick={() => {
            if(menu){
                setMenu(false)
            } else {
                setMenu(true)
            }
        }} class="fas fa-bars"></i></span>
    </div>
    
    <div className='mobile-nav' style={{display:'block' ,transition:'ease-out 0.8s'}} >
        <ul className='nav-links-mobile'>
            <li className='nav-item-mobile'>
                <Link href='/' onClick={() => setMenu(false)} style={{color:'black', textDecoration:'none'}}>OUR RANGE</Link>
            </li>
            <li className='nav-item-mobile'>
                <Link href='/' onClick={() => setMenu(false)} style={{color:'black', textDecoration:'none'}}>THE KNOWLEDGE</Link>
            </li>
            <li className='nav-item-mobile'>
                <Link href='/' onClick={() => setMenu(false)} style={{color:'black', textDecoration:'none'}}>SOURCING</Link>
            </li>
           
            <li className='nav-item-mobile'>
                <Link href='/' onClick={() => setMenu(false)} style={{color:'black', textDecoration:'none'}}>ABOUT US</Link>
            </li>
            <li className='nav-item-mobile'>
                <Link href='/' onClick={() => setMenu(false)} style={{color:'black', textDecoration:'none'}}>SKIPPER'S CATCH</Link>
            </li>
            <li className='nav-item-mobile'>
                <Link href='/' onClick={() => setMenu(false)} style={{color:'red', textDecoration:'none'}}>MY LOCAL M&J</Link>
            </li>
        </ul>
    </div>
    </nav>
    }
}

export default Nav