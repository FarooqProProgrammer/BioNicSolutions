import React from 'react'
import Vision from '../../components/Vision'
import Team from '../../components/Team'
import Insight from '../../components/Insight'
import Industries from '../../components/Industries'
import AwardsCertificate from '../../components/AwardsCertificate'
import PassionateCreative from '../../components/PassionateCreative'

export default function About() {
  return (
    <>
    <PassionateCreative />
      <Team titleOne={''} />
      <AwardsCertificate />
      <Industries />
      <Insight />
      <Vision />
    </>
  )
}
