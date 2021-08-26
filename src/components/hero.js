import React from 'react'
import { Link } from 'react-router-dom'
import data from './data/data.json'

const Hero = () => {
    return (
        <div className='text-center lg:text-left'>
            <div className='flex flex-col lg:flex-row'>
                <div className='mb-20 flex-1'>
                    <div className='space-y-1'>
                        <div className='text-base font-face-wm'>{data.hero.subheading}</div>
                        <div className='text-4xl font-face-wb'>{data.hero.headline}</div>
                    </div>
                    <Link to='/discover' className='flex w-max mx-auto lg:mx-0 rounded font-face-wb text-base bg-black p-3 px-8 mt-12  text-white active:bg-pink-700'>Enter</Link>
                </div>
                <div className='relative z-0 better-shadow overflow-hidden flex-1 rounded'>
                    <img className='h-full w-full object-cover' src={require('./images/cover-girl.jpeg').default} alt='' />
                </div>
            </div>
            <div className='relative text-white z-10 border border-gray-200 px-6 py-4 rounded mt-7 bg-indigo-600 text-left items-center space-y-4'>
                <div className='text-base font-face-wr'>"{data.review.content}"</div>
                <div className='flex space-x-2 items-center'>
                    <img className='h-8 w-8 object-cover rounded-full' src={require('./images/cover-girl.jpeg').default} alt='' />
                    <div className='text-base font-face-wb'>{data.review.customer}</div>
                </div>
            </div>
        </div>
    )
}

export default Hero
