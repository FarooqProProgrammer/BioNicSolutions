import React from 'react'


export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">Services</a>
                            </li>
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">Technologies</a>
                            </li>
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">Industries</a>
                            </li>
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">Partnership</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">Contact Us</a>
                            </li>
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">Blog</a>
                            </li>
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-900 text-2xl font-medium">Case Studies</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
           
            </div>

        </footer>

    )
}
