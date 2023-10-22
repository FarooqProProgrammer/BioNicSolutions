import React from 'react'
import "./index.css"
import Button from '../../common/Button'
import Card2 from '../../common/Card2'
import { Box, Text } from '@chakra-ui/react'
import ComponentHeading from '../../common/ComponentHeading'



export default function ChooseUs() {
  return (
    <>


      <Box className='w-full flex flex-col px-5 py-2'>
        <ComponentHeading title={'Why Choose Us'} />
        <p className='lg:max-w-[40%]'>
          We have a team of experienced professionals who have worked with businesses of all sizes in a variety of industries.
        </p>
      </Box>


      <section className="w-full flex ResponsiveChooseUs border-t-2 border-teal-500">
        <div className="flex-1 border-r-2 border-teal-500 flex flex-col px-5 py-10 justify-start items-start gap-5">
          <p>
            Our objective is to develop a profitable and effective solution that helps
            clients to expand their businesses and overcome financial constraints. We
            are committed to exceptional service and utilizing all resources to bring
            the finest products &amp; services.
          </p>
          <Button>
            Discover More
          </Button>
        </div>
        <section className="relative flex-[2] pt-16 bg-blueGray-50">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-5/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1697718288605-bdb3851fa1c3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-[60%] px-1 pb-[90px]">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <Card2 />
                    <Card2 />

                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <Card2 />

                    <Card2 />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>


  )
}
