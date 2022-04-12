
import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
       <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Coin <span className='purple'>Bar</span></h1>
                <h4>by group 13</h4>
            </div>
            </Link>
    )
}

export default Navbar
