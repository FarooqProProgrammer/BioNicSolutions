import React from 'react'
import Approach from '../../components/Approach'
import CaseStudies from '../../components/CaseStudies'
import Insight from '../../components/Insight'
import Hero from '../../components/Hero'
import Company from '../../components/Company'

export default function Industires() {
  return (
    <div>
        <Hero img={'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neSUyMHVzZXJ8ZW58MHx8MHx8fDA%3D'} />
        <Company/>
        <Approach />
        <CaseStudies />
        <Insight />
    </div>
  )
}
