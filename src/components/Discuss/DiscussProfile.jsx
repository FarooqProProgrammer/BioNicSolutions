import React from 'react'
import "./index.css"


export default function DiscussProfile() {
    return (
        <section className="text-gray-600 body-font h-full">
            <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                <div className="lg:w-full md:w-1/2 h-[350px] mb-10 md:mb-0">
                        <img
                            className="object-cover object-center h-full rounded"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1697792480519-3e2e7eba4be0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                        />
                        
                </div>
                <div className="lg:flex-grow lg:w-full md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Before they sold out
                        <br className="hidden lg:inline-block" />
                        readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                        chambray.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
