import React from 'react'
import "./index.css"
import ComponentHeading from '../../common/ComponentHeading'
import FlexLayout from '../../common/FlexLayout'
import DiscussForm from './DiscussForm'
import DiscussProfile from './DiscussProfile'

export default function Discuss() {
  return (
    <div>
        <ComponentHeading title={'Lets & Discuss'} />
        <FlexLayout FlexLeftSide={<DiscussForm />} FlexRightSide={<DiscussProfile />} />
    </div>
  )
}
