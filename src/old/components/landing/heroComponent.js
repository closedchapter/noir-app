import React from 'react'
import { Link } from 'react-router-dom'
import arrHero from './data/hero.json'

const Hero = () => {
    return (
        <div className=''>
            <div className=''>
                <div className="flex flex-col px-8 mb-20 md:px-32 md:justify-center">
                    <div className="text-4xl font-bold mt-28 md:text-6xl md:text-center">{arrHero.title}</div>
                    <div className='flex mt-8 md:mt-16 md:justify-center'>
                        <Link to='./app' className="text-lg font-medium bg-black text-white rounded md:rounded-full p-3 px-7 md:p-4 md:px-12">Get Started</Link>
                    </div>
                </div>
            </div>
            <div className='bg-green-600 h-screen'></div>
        </div>
    )
}

// bg colours da3c60 and 662040
/*

            <div className="flex flex-col text-center px-12"> 
                <div className="text-4xl font-bold">{arrHero.title}</div>
                <Link to='./app' className="blue font-medium text-base text-white hover:bg-blue-700 p-3 rounded-md">Create Your CV</Link>
            </div>
            <div className='flex justify-center items-center'><img className='w-60 h-full' alt='' src={require('./data/approved.svg').default}/></div>

"r_title":"Only 3% of CV's make it through the first stage.",
"r_subtitle":"Don't let common mistakes cost you the job. Use our field-tested, automated cv-building service to create a professional and attractive cv with all the features that employers look for."
"title":"Create a CV you’re proud of",
        "subtitle":"Design a beautiful CV with all the features that employers look for so that you can get the job you want."
*/

export default Hero
