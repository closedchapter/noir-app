import React from 'react'

const Support = (Manifest) => {
    let homepage = Manifest.data
    return (
        <div className='flex flex-col p-10 bg-black text-white'>
            <div className='space-y-8'>
                <div className='text-4xl font-semibold leading-snug'>{homepage['sub-heading']}</div>
                <div className='text-lg font-normal leading-relaxed '>{homepage['supporting-copy-2']}</div>
            </div>
        </div>
    )
}

export default Support
