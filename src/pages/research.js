import React from 'react'
import Funnel from './components/research-funnel-element.js'
import Manifest from './json/research.json'

const Research = () => {
    return (
        <div className='container mx-auto flex flex-col absolute inset-0 min-h'>
            <div className=''><Funnel data={Manifest}/></div>
        </div>
    )
}

export default Research