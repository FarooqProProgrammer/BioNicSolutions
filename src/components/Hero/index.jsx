import React from 'react'
import ShowReel from "../../assets/ShowReel.png"
import { Box, Text } from '@chakra-ui/react'
import HeroShadow from "../../assets/Hero.png"
import "./index.css"
import UpperArrow from "../../assets/UpperArrow.svg"
import { useMediaQuery } from 'react-responsive'


export default function Hero({img}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

    return (
        <div style={{backgroundImage:img && `url(${img})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}} className='w-full h-[90vh] pb-[140px] HeroImg bg-black relative flex flex-col justify-end items-center'>

                {
                    !isTabletOrMobile &&<div className='absolute flex justify-center items-center gap-3 left-4 top-4'>
                <img
                    src={ShowReel}
                    alt=''
                />
                <Text color={'White'} className='uppercase'>Show Reel</Text>
            </div>
                }

            

            <Box
                display={'flex'}

                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                px={2}
            >
                <Text color={'white'} maxWidth={{ 'lg': '50%', 'md': '50%', 'sm': '90%' }}  textAlign={'start'} className='HeroText'>
                    Turning Digital Ideas into Powerfull & Lucratives
                </Text>
                <Text color={'#fff'} maxWidth={{ 'lg': '50%', 'md': '50%', 'sm': '90%' }} className='HeroParagraphy'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis, sociis augue nisi dictumst ullamcorper cum.
                </Text>
            </Box>

            <div className='absolute bottom-2 discussImage flex flex-col justify-center items-center gap-4 w-[200px] h-[200px]' style={{backgroundImage:`url(${HeroShadow})`,backgroundRepeat:'no-repeat'}}>

                <img 
                    src={UpperArrow}
                    alt=''
                />
                <h5 className='text-sm max-w-[60%]'>Let's Discuss Your Project</h5>

            </div>





        </div>
    )
}
