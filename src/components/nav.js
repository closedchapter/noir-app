import React from 'react'

const Nav = () => {
    return (
        <div className='flex bg-white h-14 border-b'>
            <div className='flex items-center space-x-1 mx-auto'>
                <img className='w-6' src={require('./make-up.svg').default} alt=''/>
                <div className='text-xl font-bold'>wlashedit</div>
            </div>
        </div>
    )
}

export default Nav