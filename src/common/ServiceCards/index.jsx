import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function ServiceCards() {
    return (
        <div className="relative flex flex-col mt-4">
            <div className="px-4 py-5 flex-auto">

                <h6 className="text-xl mb-1 font-semibold flex justify-start gap-2 items-center"><AiFillCheckCircle color='#329683' />CSS Components</h6>
                <p className="mb-4 text-blueGray-500">
                    Notus JS comes with a huge number of Fully Coded CSS
                    components.
                </p>
            </div>
        </div>
    )
}
