import React from 'react'
import { useLocation } from "react-router-dom";

const Funnel = (Manifest) => {
    let research = Manifest.data
    console.log(useLocation().state)

    const [email, changeEmail] = React.useState(useLocation().state)
    const [name, changeName] = React.useState('')

    function handleChange(e) {

    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    
    return (
        <div className='flex flex-col justify-center items-center h-full'>

            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full '>
                <div>
                    <label>Email</label>
                    <input 
                    className='flex w-full appearance-none outline-none p-3 border border-gray-300 ring-2 ring-transparent active:ring-indigo-700 active:border-indigo-700 rounded-lg shadow-md'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    disabled/>
                </div>
                <button className='flex items-center justify-center whitespace-nowrap p-3 bg-black rounded-md font-medium text-white'>
                    Begin
                </button>
                </form>

        </div>
    )
}

export default Funnel
