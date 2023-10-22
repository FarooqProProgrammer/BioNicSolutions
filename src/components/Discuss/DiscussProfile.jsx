import React from 'react'
import "./index.css"
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { AiOutlineLinkedin } from 'react-icons/ai'


export default function DiscussProfile() {
    return (
        <section className="h-full body-font overflow-hidden">
            <Box className="container px-5 py-2 mx-auto">
                <Box className="lg:w-full mx-auto flex flex-wrap ">
                    <Image
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src="https://images.unsplash.com/photo-1682685797088-283404e24b9d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                    />
                    <Box className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <Flex
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={3}
                        >
                            <Box px={2} py={2} borderRadius={'100%'} border={'1px solid #329683'}>
                                <AiOutlineLinkedin />
                            </Box>
                            <Flex
                                flexDirection={'column'}
                                justifyContent={'start'}
                                alignItems={'start'}

                            >
                                <Text fontSize={20} fontWeight={800}>Eugene</Text>
                                <p className='text-sm'>Managing Partner</p>

                            </Flex>
                        </Flex>
                        <h1 className="text-gray-900 text-xl title-font font-medium mb-1">
                            Me and my team delivers an exceptional level of service and
                            strives to build strong and long lasting partnerships with our
                            clients.
                        </h1>
                       <Box
                        width={'100%'}
                        px={2}
                        py={1}
                       >
                        <p className='text-md'>Work with John Deere, STVOL, Anabel Arto, E-Groshi, Kimito and other.</p>
                       </Box>
                       <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={2}   
                    >
                        <Box className='flex justify-center items-center gap-3'>
                            <Text fontSize={40} fontWeight={900}> 18+</Text>
                            <p>Years In Company</p>
                        </Box>
                        <Box className='flex justify-center items-center gap-3'>
                            <Text fontSize={40} fontWeight={900}>160+</Text>
                            <p>Years In Company</p>
                        </Box>

                       </Flex>
                    </Box>
                </Box>
            </Box>
        </section>


    )
}
