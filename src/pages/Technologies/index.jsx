import React from 'react'
import "./index.css"
import TabsGroup from '../../components/TabsGroup'
import { DataBase, FrontEnd, backend } from '../../Data'
import Statistics from '../../components/Statistics'
import Growing from '../../components/Growing'
import CaseStudies from '../../components/CaseStudies'
import Hero from '../../components/Hero'
import Company from '../../components/Company'

export default function Technologies() {
  return (
    <div>
      <Hero img={'https://images.unsplash.com/photo-1562575214-da9fcf59b907?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D'}/>
        <Company />
      <TabsGroup FrontEnd={FrontEnd} title={'Front End'} />
      <TabsGroup FrontEnd={DataBase} title={'Databases'} />
        {/* <Statistics /> */}
        {/* <Growing /> */}
        <CaseStudies />

    </div>
  )
}
