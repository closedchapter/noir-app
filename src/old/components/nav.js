import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div className='absolute bg-white border inset-0 w-full '>
      <div className='flex flex-col'>
        <div>Products</div>
        <div>Blowblow CV</div>
        <div>Build a CV</div>
        <div>Blowblow Enterprise</div>
        <div>How to get the Job</div>
        <div>Find Jobs</div>
      </div>
    </div>
  )
}

const Nav = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className='flex items-center h-12 px-8 border-b justify-between'>
      <Link to='./' className='flex items-center transition duration-150 ease-in-out opacity-30 hover:opacity-100 p-3 -m-3'>
        <div className='text-base font-bold'>Blow</div>
        <div className='text-base font-bold transform -translate-x-1 bg-white'>Blow</div>
        <div className='leading-0 font-black text-sm bg-black text-white px-1 rounded-sm'>CV</div>
      </Link>
      <button className='p-4 -m-6' onClick={() => setModal(!modal)}>
        <img className='w-5 h-full relative z-50' alt='' src={require('./menu_nav.svg').default}/>
        {
          modal ?
          <Dropdown />
          :
          null
        }
      </button>
    </div>
  )
}

export default Nav
