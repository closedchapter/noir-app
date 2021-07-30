import React from 'react'
import data from './data/features.json'

const FeaturesElement = (data) => {
    let obj = data.data
    return (
        <div className='space-y-3'>
            <div className='text-lg font-face-wm'>{obj.heading}</div>
            <div className='text-lg font-face-wr'>{obj.content}</div>
        </div>
    )
}

const FeaturesComponent = (data) => {
    let obj = data.data
    return (
        <div id='noir-discover-directive' className='mb-20'>

            <div id='header-section'>
                <div className='flex space-x-1 items-center'>
                    <div className='text-2xl font-face-wb'>Noir</div>
                    <div className='text-base font-face-wm bg-black text-white px-1 rounded'>{obj.title}</div>
                </div>
                <div className='text-3xl font-face-wb mt-2'>{obj.headline}</div>
            </div>

            <div id='main-section' className='mt-8'>
                <div className='space-y-7'>
                    {obj.elements.map((obj, key) => {return <FeaturesElement key={key} data={obj}/> })}
                </div>
            </div>

        </div>
    )
}

const Features = () => {
    return (
        <div id='features-section'>
            <div>{data.features.map((obj, key) => {return <FeaturesComponent key={key} data={obj}/> })}</div>
        </div>
    )
}

export default Features