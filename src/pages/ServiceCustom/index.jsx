import React from 'react'
import Hero from '../../components/Hero'
import ServiceCustomAboutSection from '../../components/ServiceCustomAboutSection'
import Approach from '../../components/Approach'
import CaseStudies from '../../components/CaseStudies'
import Discuss from '../../components/Discuss'
import TabsGroup from '../../components/TabsGroup'
import { FrontEnd } from '../../Data'
import Faqs from '../../components/Faqs'
import ContactForm from '../../components/ContactForm'
import ContactBannerForm from '../../components/ContactBannerForm'

export default function ServiceCustom() {
  return (
    <div>
        <Hero img={'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'} />
        <ServiceCustomAboutSection />
        <Approach />
        <CaseStudies />
        <Discuss />
        <TabsGroup FrontEnd={FrontEnd} isTitle={'Technology stack'} title={'Front End'} isButton />
        <Faqs />
        <ContactBannerForm />
    </div>
  )
}
