import React from 'react'
import { Link } from 'react-router-dom'
import data from './data/data.json'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='text-3xl font-face-wb'>{data.opt.headline}</div>
            <div className='text-lg font-face-wr opacity-80 hidden'>{data.opt.desc}</div>
            <Link to='/discover' className='flex w-max mx-auto lg:mx-0 rounded font-face-wb text-base bg-black p-3 px-8 mt-12  text-white active:bg-pink-700'>Discover</Link>
        </div>
    )
}

export default Hero