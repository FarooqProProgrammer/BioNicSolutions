import React from 'react'
import AboutPng from "../../assets/About/About.png"
import { Flex } from '@chakra-ui/react'
import {AiOutlineArrowRight} from "react-icons/ai"

export default function About() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-full mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={AboutPng}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <div>
                            <div className='flex justify-start gap-2 items-center'>
                                <h2>01/</h2>
                                <h1 className="text-[#329683] text-3xl title-font font-medium mb-1">
                                    The Catcher in the Rye
                                </h1>


                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-4'>

                                <Flex
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    gap={2}
                                    flexWrap={'wrap'}

                                >
                                    <div className='px-3 py-2 rounded-md border border-[#999]'>
                                        <h3 className='text-sm '>Scoping Sessions</h3>
                                    </div>

                                    <div className='px-3 py-2 rounded-md border border-[#999]'>
                                        <h3 className='text-sm '>Reservation & Development</h3>
                                    </div>

                                    <div className='px-3 py-2 rounded-md border border-[#999]'>
                                        <h3 className='text-sm '>UI / UX Design</h3>
                                    </div>
                                    <div className='px-3 py-2 rounded-md border border-[#999]'>
                                        <h3 className='text-sm '>Rapid Prototyping</h3>
                                    </div>
                                    <div className='px-3 py-2 rounded-md border border-[#999]'>
                                        <h3 className='text-sm '>Branding</h3>
                                    </div>

                                </Flex>

                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit leo, rhoncus ridiculus platea dignissim sem fusce.
                                </p>

                                <div className='flex justify-center items-center gap-3 cursor-pointer'>
                                    <p>Learn More</p>
                                    <AiOutlineArrowRight />
                                </div>


                            </div>
                        </div>

                        <div>
                        <div className='flex justify-start gap-2 items-center'>
                                <h2>02/</h2>
                                <h1 className="text-black text-3xl title-font font-bold mb-1">
                                    The Catcher in the Rye
                                </h1>


                            </div>
                        </div>
                        
                        <div>
                        <div className='flex justify-start gap-2 items-center'>
                                <h2>03/</h2>
                                <h1 className="text-black text-3xl title-font font-bold mb-1">
                                    The Catcher in the Rye
                                </h1>


                            </div>
                        </div>
                        <div>
                        <div className='flex justify-start gap-2 items-center'>
                                <h2>04/</h2>
                                <h1 className="text-black text-3xl title-font font-bold mb-1">
                                    The Catcher in the Rye
                                </h1>
                            </div>
                        </div>
                        <div>
                        <div className='flex justify-start gap-2 items-center'>
                                <h2>05/</h2>
                                <h1 className="text-black text-3xl title-font font-bold mb-1">
                                    The Catcher in the Rye
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
