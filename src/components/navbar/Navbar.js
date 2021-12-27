import React from 'react'
import "./navbar.css"
import {RiMenu3Line,RiCloseLine} from 'react-icons'
import logo from "../../assets/logo.svg"



//BEM -> Block element modifier
const Navbar = () => {
    return (
        <div className='gpt3_navbar'>
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
                <img src={logo} alt="as"  />
            </div>

        </div>
        </div>
    )
}

export default Navbar
