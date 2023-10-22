import React from 'react'
import ComponentHeading from '../../common/ComponentHeading'
import "./index.css"

import FlexLayout from '../../common/FlexLayout'
import FaqsAccordian from './FaqsAccordian'
import FaqLeft from './FaqLeft'

export default function Faqs() {
  return (
    <div>
        <ComponentHeading title={'Questions & Answers'} />
        <FlexLayout FlexLeftSide={<FaqLeft />} FlexRightSide={<FaqsAccordian />} />
    </div>
  )
}
