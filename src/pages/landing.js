import React from 'react'

const Instagram = () => {
    return (
        <div className='flex text-base font-medium leading-relaxed text-black justify-center items-center p-3 space-x-3'>
            <div className='w-7 h-full'>
                <img alt='' src={require('./instagram.svg').default}/>
            </div>
            <div className='flex whitespace-pre-wrap'>
                Follow me on <a href='https://www.instagram.com/wlashedit/' target='_blank' rel='noreferrer noopener nofollow' className='text-pink-500'>@wlashedit</a>
            </div>
        </div>
    )
}

const Landing = () => {
    return (
        <div className=''>
            <Instagram/>
        </div>
    )
}

export default Landing
