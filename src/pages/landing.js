import React from 'react'
import data from './hero.json'

const Hero = () => {
    return (
        <div className='animate-fade-in-down container grid grid-flow-row md:grid-flow-col mx-auto text-center md:text-left px-10 gap-y-10 py-12'>
            <div>
                <div className='text-4xl font-bold'>{data.title}</div>
                <div className='mt-7 text-base md:text-lg'>
                    <div className='font-semibold'>{data.subtitle}</div>
                    <div className='mt-1 leading-snug'>{data.desc}</div>
                </div>
                <button className='mt-10 bg-black hover:bg-yellow-500 hover:text-black p-3 px-8 text-base font-semibold text-white rounded'>See Prices</button>
            </div>
            <div className='flex mx-auto w-1/2 md:w-full relative'>
                <img className='shadow-xl rounded-xl md:rounded-none' src={require('./example.jpg').default} alt=''/>
                <img className='absolute w-10 -right-3 -bottom-3' src={require('./heart.svg').default} alt=''/>
            </div>
        </div>
    )
}

const Price = () => {
    return (
        <div className='container grid grid-flow-row md:grid-flow-col mx-auto px-10 gap-y-10 py-12 '>
            <div></div>
        </div>
    )
}

const Landing = () => {
    return (
        <div className>
            <div className='bg-gradient-to-b from-gray-50 via-white to-white'>
                <Hero/>
            </div>
            <div className='bg-black'>
                <Price/>
            </div>
        </div>
    )
}

export default Landing


/*

2nd Section
[White Background]
Reviews from client.
CTA button for 'see instagram'.? 

3rd Section
[Black Background]
Prices of extensions.
CTA button for 'see instagram'.?

4th Section {Hall of Fame}
[Darker Gray Background]
Feature 4 pictures from instagram.

Footer
[White]
[Gradient]?
[Credit to me with link to seperate page. snapchat and email]
*/
