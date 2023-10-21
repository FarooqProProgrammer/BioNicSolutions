import React from 'react'
import "./index.css"
import { Text } from '@chakra-ui/react'
import { AiOutlineRight,AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { FaSlack } from "react-icons/fa"

export default function MobileHeader() {
    return (
        <div className='MobileHeader bg-black'>

            <div className='Links w-full px-4 py-2 h-full '>

                <div className='w-full py-2 flex justify-between items-center px-1 border-b border-white'>
                    <Text color={'white'} fontSize={25}>Services</Text>
                    <AiOutlineRight color='white' className='font-bold' />
                </div>

                <div className='w-full py-2 flex justify-between items-center px-1 border-b border-white'>
                    <Text color={'white'} fontSize={25}>Industries</Text>
                    <AiOutlineRight color='white' className='font-bold' />
                </div>

                <div className='w-full py-2 flex justify-between items-center px-1 border-b border-white'>
                    <Text color={'white'} fontSize={25}>Case Studies</Text>
                </div>
                <div className='w-full py-2 flex justify-between items-center px-1 border-b border-white'>
                    <Text color={'white'} fontSize={25}>About Us</Text>
                </div>
                <div className='w-full py-2 flex justify-between items-center px-1 border-b border-white'>
                    <Text color={'white'} fontSize={25}>Blog</Text>
                </div>
                <div className='w-full py-2 flex justify-between items-center px-1 border-b border-white'>
                    <Text color={'white'} fontSize={25}>Contact Us</Text>
                </div>
            </div>


            <div className='IconBox'>
                <div className='p-2 border border-teal-600 rounded-full'>
                    <FaSlack color='white' />
                </div>
                <div className='p-2 border border-teal-600 rounded-full'>
                    <AiOutlineInstagram color='white' />
                </div>
                <div className='p-2 border border-teal-600 rounded-full'>
                    <AiOutlineLinkedin color='white' />
                </div>
            </div>

        </div>
    )
}
