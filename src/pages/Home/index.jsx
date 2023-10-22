import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import ChooseUs from '../../components/ChooseUs'
import CaseStudies from '../../components/CaseStudies'
import Client from '../../components/Client'
import Masoinary from '../../components/Masoinary'
import TabsGroup from '../../components/TabsGroup'
import { FrontEnd } from '../../Data'
import Team from '../../components/Team'
import Approach from '../../components/Approach'
import Company from '../../components/Company'
import ContactBannerForm from '../../components/ContactBannerForm'
import Insight from '../../components/Insight'


export default function Home() {
  return (
    <>
        <Hero />
        <Company />
        <About />
        {/* <CaseStudies /> */}
        <Client />
        <Approach />
        <Masoinary />
        <TabsGroup FrontEnd={FrontEnd} isTitle={'Technology stack'} title={'Front End'} isButton />
        <Team />
        <ChooseUs />
        <Insight />
        <ContactBannerForm />
    </>
  )
}
