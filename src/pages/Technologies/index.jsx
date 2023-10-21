import React from 'react'
import "./index.css"
import TabsGroup from '../../components/TabsGroup'
import { DataBase, FrontEnd, backend } from '../../Data'
import Statistics from '../../components/Statistics'
import Growing from '../../components/Growing'

export default function Technologies() {
  return (
    <div>
      <TabsGroup FrontEnd={FrontEnd} title={'Front End'} />
      <TabsGroup FrontEnd={DataBase} title={'Databases'} />
        {/* <Statistics /> */}
        <Growing />
    </div>
  )
}
