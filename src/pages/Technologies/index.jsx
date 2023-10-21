import React from 'react'
import "./index.css"
import TabsGroup from '../../components/TabsGroup'
import { DataBase, FrontEnd, backend } from '../../Data'

export default function Technologies() {
  return (
    <div>
      <TabsGroup FrontEnd={FrontEnd} title={'Front End'} />
      <TabsGroup FrontEnd={DataBase} title={'Databases'} />
      
    </div>
  )
}
