import React from 'react'
import Hero from './components/hero-element.js'
import Support from './components/support-element.js'
import Features from './components/feature-element.js'
import Manifest from './json/homepage.json'

const Homepage = () => {
    return (
        <div className='container mx-auto flex flex-col absolute inset-0 min-h'>
            <div className='animate-fade-in-down'><Hero data={Manifest}/></div>
            <div className='my-10 mb-20'><Support data={Manifest}/></div>
            <div className='lg:mx-20 hidden'><Features data={Manifest}/></div>
        </div>
    )
}

export default Homepage