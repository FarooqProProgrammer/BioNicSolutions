import React from 'react'
import Cta from '../../components/Cta'
import TabsGroup from '../../components/TabsGroup'
import { FrontEnd } from '../../Data'
import CaseStudies from '../../components/CaseStudies'
import Approach from '../../components/Approach'
import Hero from '../../components/Hero'
import Company from '../../components/Company'

export default function Services() {
    return (
        <div>
            <Hero img={'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neSUyMHVzZXJ8ZW58MHx8MHx8fDA%3D'} />
            <Company />
            <Approach />
            <CaseStudies />
            <Cta />
            <TabsGroup FrontEnd={FrontEnd} isTitle={'Technology stack'} title={'Front End'} isButton />

        </div>
    )
}
