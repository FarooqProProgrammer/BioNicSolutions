import React from 'react'
import "./index.css"

export default function FlexLayout({FlexLeftSide,FlexRightSide}) {
  return (
    <div className='FlexLayout'>
      
        <div className='FlexLayoutLeft'>
            {FlexLeftSide}
        </div>
        <div className='FlexLayoutRight'>
            {FlexRightSide}
        </div>
        

    </div>
  )
}
