import React from 'react'

export default function Cta() {
    return (
        <>
            <section className="py-20 lg:py-3 bg-black lg:mx-3 lg:my-3 rounded-md md:mx-3 sm:mx-0">
                <div className="container">
                    <div
                        className={`relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]`}
                    >
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full px-4 lg:w-1/2 flex flex-col justify-start items-start gap-3">

                                <h2 className="mb-6 text-3xl w-[60%] font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
                                    Get started with our free trial
                                </h2>
                                <p className='text-white'>
                                    Leave a request - our managers will analyze your current situation and help you choose a site to scale your business
                                </p>
                                <button className='px-7 py-2 bg-teal-500 rounded-lg'>Discover</button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
