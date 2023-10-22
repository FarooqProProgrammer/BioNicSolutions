import React from 'react'
import { UppArrowIcon } from '../../assets/Icons'

export default function Card2() {
    return (
        <div className="relative flex flex-col mt-4 border-t-2 border-teal-500">
            <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 flex justify-between items-center text-center w-full h-12 mb-5 ">
                    <h2 className="lg:text-2xl md:text-2xl sm:text-xl font-bold">
                        23+
                    </h2>
                    <svg width={10} height={10} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9995 27.2566V1.12279V0.189453H27.0662H0.932892L0.932893 2.05612H24.814L0.273438 26.5966L1.59337 27.9166L26.1329 3.37703V27.2566H27.9995Z" fill="#0B0B0B" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.273438 29.1657V28.2231V28.1895H0.239775H-0.702778L-0.702778 28.2568H0.158544L-0.726562 29.1418L-0.678956 29.1895L0.206112 28.3044V29.1657H0.273438Z" fill="#0B0B0B" />
                    </svg>

                </div>
                <p className="mb-4 text-sm text-blueGray-500">
                    Notus JS comes with a huge number of Fully Coded CSS
                    components.
                </p>
            </div>
        </div>
    )
}
