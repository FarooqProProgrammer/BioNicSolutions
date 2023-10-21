import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { BEICON, BearIcon, FootBall, InstagaramIcon, LinkinIcon, NPMICON, WIcon } from '../../assets/Icons'
import { AiOutlineLinkedin } from "react-icons/ai"

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className='lg:w-[40%] md:w-1/2 w-full flex px-4'>
                        <div className=" w-full px-4">

                            <nav className="list-none mb-10 text-start">
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
                        <div className="w-full px-4">

                            <nav className="list-none mb-10 text-start">
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
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                    </div>
                    <div className="lg:w-[30%] md:w-1/2 w-full px-4 flex flex-col">

                        <Flex
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={2}
                        >
                            <Box
                                width={'60px'}
                                height={'60px'}
                                border={'1px solid #329683'}
                                borderRadius={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}

                            >
                                <FootBall />

                            </Box>
                            <Box
                                width={'60px'}
                                height={'60px'}
                                border={'1px solid #329683'}
                                borderRadius={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}

                            >
                                <LinkinIcon />

                            </Box>
                            <Box
                                width={'60px'}
                                height={'60px'}
                                border={'1px solid #329683'}
                                borderRadius={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}

                            >
                                <BearIcon />

                            </Box>
                            <Box
                                width={'60px'}
                                height={'60px'}
                                border={'1px solid #329683'}
                                borderRadius={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}

                            >
                                <NPMICON />

                            </Box>
                            <Box
                                width={'60px'}
                                height={'60px'}
                                border={'1px solid #329683'}
                                borderRadius={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}

                            >
                                <InstagaramIcon />

                            </Box>


                        </Flex>

                        <Flex
                            width={'100%'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            px={1}
                        >
                            <p className='text-sm max-w-[50%]'>
                                Chicago, 4131 Pheasant Trail Ct#5 Arlington Heights,
                                IL 60004
                            </p>
                            <p>
                            us@bionicsols.com
                            </p>

                        </Flex>

                    </div>
                </div>

            </div>

        </footer>

    )
}
