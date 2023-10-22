import React from 'react'
import MOdule from "../../assets/Module/Module.png"
import ServiceCards from '../../common/ServiceCards'
import ComponentHeading from '../../common/ComponentHeading'

export default function TMSMODULE() {
    return (
        <div className='bg-[#F0F0F0]'> 
            <ComponentHeading title={'TMS MODULE'} />
            <div className='p-3'>
                <p className='lg:max-w-[40%] md:max-w-[50%] sm:max-w-full'>
                    During custom systems development, the team considers your entire logistics ecosystem to make a product that does
                    the tasks that your business needs. Nevertheless, here's a list of base features every TMS has:
                </p>
            </div>
            <section className="relative pt-16 bgorder-t-2 border-teal-600 ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <ServiceCards />
                                    <ServiceCards />
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <ServiceCards />
                                    <ServiceCards />
                                </div>
                            </div>
                        </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                                <img
                                    alt="..."
                                    src={MOdule}
                                    className="w-full align-middle rounded-t-lg"
                                />

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>


    )
}
