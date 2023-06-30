import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from "../Cart/Cart";
import "./Navbar.scss";
 

const Navbar = () => {

     const [open,setOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="/img/en.png" alt="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>  
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/product/2">Men</Link>
                </div>
                <div className="item"> 
                    <Link className='link' to="/product/3">Children</Link>
                </div>
            </div>
            <div className="center">
                <Link className='link' to="/">LAMASTORE</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link to="/" className='link'>HomePage</Link>
                </div>
                <div className="item">
                    <Link to="/" className='link'>About</Link>
                </div>
                <div className="item">
                    <Link to="/" className='link'>Contact</Link>
                </div>
                <div className="item">
                    <Link to="/" className='link'>Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlinedIcon />
                        <span>0</span>
                    </div>
                </div>
            </div>
          </div>
          {open && <Cart/>}
    </div>
  )
}

export default Navbar