import React from 'react'
import "./index.css"
import { Box, Button, Text } from '@chakra-ui/react'
import Card from '../../common/Card'

export default function CaseStudies() {
  return (
    <>

      <Box
        width={'100%'}
        px={2}
        display={'flex'}
        className='Case'
        my={20}
      >
        <Text className='CaseStudyText'>Case Studies</Text>
        <button className='CaseStudyButton'>All Cases</button>

      </Box>

      <section className="py-2 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-2 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
           <Card />
           <Card />
           <Card />
           <Card />
           
          </div>
        </div>
      </section>
    </>
  )
}
