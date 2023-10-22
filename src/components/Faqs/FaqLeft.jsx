import React from 'react'
import { BsDot } from "react-icons/bs"

export default function FaqLeft() {
    return (
        <div className='w-full p-4 flex justify-start items-start gap-3'>

            <BsDot color='#329683' size={30} />
            <p>
            Check out some of the most common questions asked by the clients
            </p>
        </div>
    )
}
