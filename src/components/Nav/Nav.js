import React, { useState } from 'react'
import {Link} from '@material-ui/core';
import './Nav.css'
import Logo from '../images/mj-logo.png'


function Nav() {

    const [menu, setMenu] = useState(false);

    //Desktop Nav Bar Plus Mobile Nav Bar Original State
    
    return (<>
    <div className='mobile-logo-container'>
    <img className='mobile-logo' src={Logo} alt='logo'/>
    </div>

    <div className='mobile-menu'>
        <span className='menu'>Menu</span>
        <span><i onClick={() =>{ 
            if (!menu){
                setMenu(true)
             }else {
                 setMenu(false)
             } }} style={{cursor:'pointer'}}  className='fas fa-bars'></i></span>
    </div>
    <nav className={menu ? 'active-nav':'hidden-nav'}>
        <ul style={{marginBotton:'200px',}} className='nav-links'>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>OUR RANGE</Link>
            </li>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>THE KNOWLEDGE</Link>
            </li>
            <li className='nav-item'>
                <span style={{marginRight:'0'}}><Link href='/' style={{color:'black', textDecoration:'none'}}>SOURCING</Link></span>
            </li>
        <img className='logo' src={Logo} alt='logo'/>
            <li className='nav-item'>
            <span><Link href='/' style={{color:'black', textDecoration:'none'}}>ABOUT US</Link></span>
            </li>
            <li className='nav-item'>
                <Link href='/' style={{color:'black', textDecoration:'none'}}>SKIPPER'S CATCH</Link>
            </li>
            <li className='nav-item'>
                <Link href='/' style={{color:'red', textDecoration:'none'}}>MY LOCAL M&J</Link>
            </li>
            
        </ul>
        </nav></>)

        }

        


export default Nav