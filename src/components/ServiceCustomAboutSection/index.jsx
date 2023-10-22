import React from 'react'
import ServiceImage from "../../assets/ServiceAbout/service.png"
import { AiFillCheckCircle } from "react-icons/ai"
import ComponentHeading from '../../common/ComponentHeading'
import ServiceCards from '../../common/ServiceCards'


export default function ServiceCustomAboutSection() {
    return (
        <>
            <ComponentHeading title={'We Will Help You'} />
        <section className="relative pt-16 bg-blueGray-50">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                            <img
                                alt="..."
                                src={ServiceImage}
                                className="w-full align-middle rounded-t-lg"
                            />

                        </div>
                    </div>
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
                </div>
            </div>
        </section>
        </>
        

    )
}
