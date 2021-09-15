import React from 'react'

const FeatureElement = (data) => {
    let feature = data.item
    console.log(feature.benefit)
    return (
        <li className={'p-3 w-72 md:w-full flex flex-col mx-auto mb-14 ' + feature['class-edit']}>
            <div className='h-48 md:h-96 md:w-full rounded overflow-hidden mx-auto mb-2 md:m-5'>
                <img className='w-full h-full object-cover' src={require('./images/'+feature['short-imagery']+'.jpg').default} alt={feature['short-imagery']}/>
            </div>
            <div className='w-full md:m-10 flex flex-col justify-center'>
                <div className='text-2xl lg:text-2xl font-semibold leading-relaxed mb-5'>{feature['short-benefit']}</div>
                <div className='text-base lg:text-lg font-medium leading-relaxed'>{feature['short-feature']}</div>
            </div>
        </li>
    )
}

const Feature = (Manifest) => {
    let homepage = Manifest.data

    const [list, appendList] = React.useState([])
    React.useEffect(() => {
        let temporaryArray = []
        homepage.value.forEach((feature) => {
            temporaryArray.push(<FeatureElement item={feature}/>)
        })
        appendList(temporaryArray)
    }, []);

    return (
        <div className='flex flex-col mb-16'>
            <ul className='grid grid-flow-row'>
                {list}
            </ul>
        </div>
    )
}

export default Feature
