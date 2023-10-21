import React from 'react'
import "./index.css"
import ChakraCard from '../../common/ChakraCard'

export default function Industries() {
    return (
        <div className='Industries'>
            <div className='IndustriesHeading'>
                <h3>
                    Industries
                </h3>
            </div>
            <div className='IndustriesGrid'>
                <div className='IndustriesGridLeft'>
                    <p>
                        At Bionic Sols, we offer custom software solutions that bring value to the growth and development of businesses across multiple industries worldwide.
                    </p>
                    <button className='px-5 py-2 bg-yellow-500 rounded-lg'>Discover More</button>
                </div>
                <div className='IndustriesGridRight'>

                    <ChakraCard/>
                    <ChakraCard/>
                    <ChakraCard/>


                </div>
            </div>
        </div>
    )
}
