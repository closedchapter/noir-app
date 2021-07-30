import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='fixed bg-white w-full p-4 flex z-50'>
            <Link to='/' className='text-xl font-face-wb flex-1'>Noir</Link>
        </div>
    )
}

export default Nav