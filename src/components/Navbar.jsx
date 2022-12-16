import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import teslalogo from '../images/tesla.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Headerblock from './Headerblock';
import Menu from './Menu';
function Navbar({isSideMenu,setSideMenuOpen}) {
  return (
    <>
    <div className='nav'>
        <div className='nav_logo'>
           <Link to='tesla.com'>
               <img className='logo' src={teslalogo} alt=''/>
           </Link>
        </div>
        <div className='header_links'>
            <Link to='/'className={isSideMenu&&'header_link--hidden'}>MODEL S</Link>
            <Link to='/'className={isSideMenu&&'header_link--hidden'}>MODEL 3</Link>
             <Link to='/'className={isSideMenu&&'header_link--hidden'}>MODEL X</Link>
             <Link to='/'className={isSideMenu&&'header_link--hidden'}>MODEL Y</Link>
             <Link to='/' className={isSideMenu&&'header_link--hidden'}>SOLAR PANEL</Link>
             <Link to='/' className={isSideMenu&&'header_link--hidden'}>SOLAR ROOF</Link>
             </div>
        <div className='header_right'>
        <Link to='/' className={isSideMenu&&'header_link--hidden'}>Shop</Link>
        <Link to='/login' className={isSideMenu&&'header_link--hidden'}>Tesla Account</Link>
        <div className='header_menu' onClick={()=>setSideMenuOpen(!isSideMenu)}>
            {isSideMenu?<CloseIcon/>:<MenuIcon/>}
        
        </div>

        </div>



    </div>
    <Headerblock/>
    {isSideMenu&&<Menu/>}
    </>
  )
}

export default Navbar