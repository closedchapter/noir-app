import React from 'react'
import { useHistory } from "react-router-dom";


const HeroEl = () => {
    return (
        <div className='w-full h-full flex relative'>
            <img className='better-shadow rounded w-64 lg:w-80 ml-auto -mr-10' src={require('./images/dusan-jovic-2V4Qhq55maY-unsplash.jpg').default} alt='hero'/>
            <div className='better-shadow rounded-md p-2 px-4 space-y-4 w-max absolute bg-white -m-10 -ml-10'>
            <div className='text-xl font-bold mr-2'>Past week</div>
                <div className='block'>
                    <div className='block text-sm font-semibold text-black text-opacity-40'>Your bookings</div>
                    <div className='inline-block text-2xl font-semibold mr-1'>13</div>
                    <div className='inline-block text-sm font-semibold text-green-500'> +10%</div>
                </div>
                <div className='block'>
                    <div className='block text-sm font-semibold text-black text-opacity-40'>Your revenue</div>
                    <div className='inline-block text-2xl font-semibold mr-1'><span className='text-sm'>£</span>736</div>
                    <div className='inline-block text-sm font-semibold text-green-500'> +41%</div>
                </div>
            </div>
        </div>
    )
}

const Hero = (Manifest) => {
    let history = useHistory();
    let homepage = Manifest.data
    const [email, changeEmail] = React.useState('')

    function handleChange(e) {
        changeEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        history.push({pathname:"/tell-us-more",state:email});
    }

    
    return (
        <div className='p-10 lg:w-3/4 mx-auto grid grid-flow-row lg:grid-flow-col justify-center items-center space-y-10'>
            <div className='w-full space-y-12 flex flex-col items-start justify-start'>
                <div className='space-y-7'>
                    <div className='text-4xl lg:text-5xl font-semibold leading-tight text-opacity-90'>{homepage.headline}</div>
                    <div className='text-xl lg:text-3xl font-medium leading-tight text-black text-opacity-50'>{homepage['supporting-copy']}</div>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex w-full text-md md:text-xl md:w-2/3 p-1 border border-gray-300 ring-2 ring-transparent hover:ring-indigo-700 hover:border-indigo-700 rounded-lg shadow-md'>
                        <input className='flex w-full appearance-none outline-none p-3  rounded-l-lg mr-1'
                        placeholder='Enter your email'
                        type='email'
                        id='email'
                        name='email'
                        onChange={(e) => handleChange(e)}
                        value={email}
                        required/>
                        <button className='flex items-center justify-center whitespace-nowrap p-3 bg-black rounded-md font-medium text-white'>
                            Get Started
                        </button>
                </form>
            </div>
            <div className='p-10'>
                <HeroEl/>
            </div>
        </div>
    )
}

export default Hero
