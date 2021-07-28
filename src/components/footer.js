import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white border-t p-10'>
            <div className='flex items-center space-x-1 mx-auto opacity-60'>
                <img className='w-5' src={require('./make-up.svg').default} alt=''/>
                <div className='text-lg font-bold'>wlashedit</div>
            </div>
            <a href='https://www.instagram.com/wlashedit/' target='_blank' rel='nofollow noopener noreferrer'  className='my-6 mt-3 opacity-60 text-sm font-light hover:underline'>
                Instagram
            </a>
            <div className='border-t my-6 py-6 opacity-50 text-sm font-light'>
                © Coded by Harrison 2021. All rights reserved.
            </div>
        </div>
    )
}

export default Footer