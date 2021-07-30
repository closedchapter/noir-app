import React from 'react'
import Hero from '../components/hero'
import Elements from '../components/features'
import CTAForm from '../components/opt-in'

const Landing = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-white pt-14'>
            <div className='container mx-auto px-8 py-10 animate-fade-in-down'>
                <Hero/>
            </div>
            <div className='container mx-auto px-8 py-10 lg:animate-fade-in-down'>
                <Elements/>
            </div>
            <div className='container mx-auto px-8 py-10 bg-pink-700 lg:rounded'>
                <CTAForm/>
            </div>
        </div>
    )
}

export default Landing