import React from 'react'
import { Link } from 'react-router-dom'

const Coming = () => {
    return (
        <div className='text-center lg:text-left'>
            <div className='flex flex-col lg:flex-row animate-fade-in-down'>
                <div className='mb-20 flex-1'>
                    <div className='space-y-1'>
                        <div className='text-base font-face-wm'>NOIR DISCOVER</div>
                        <div className='text-4xl font-face-wb'>Coming soon</div>
                    </div>
                    <Link to='/' className='flex w-max mx-auto lg:mx-0 rounded font-face-wb text-base bg-black p-3 px-8 mt-12  text-white active:bg-pink-700'>Home</Link>
                </div>
                <div className='relative z-0 better-shadow overflow-hidden flex-1 rounded'>
                    <img className='h-full w-full object-cover' src={require('./images/cover-girl.jpeg').default} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Coming