import React, { useEffect } from 'react'
import "./index.css"

export default function TabsGroup({ FrontEnd, title }) {
  useEffect(() => {
    console.log(FrontEnd)
  }, [FrontEnd])

  return (
    <div className='TabsGroup'>
      <div className='TabHeading'>
        <h3>Web Platform</h3>
      </div>
      <div className='TabGrid'>
        <div className='TabGridParagraph'>
          <p>
            At Bionic Solutions, we build state-of-the-art frontend solutions based on HTML5 and the latest JavaScript frameworks. We also use the top back-end technologies to build modern client-server applications.
          </p>
        </div>
        <div className='TabsGridComponent'>

          <div className="TabsGridComponentHeading">
            <h2>{title}</h2>

          </div>
          <div className='TabsGridComponentCards'>
            {
              FrontEnd?.map((item) => {
                return (
                  <div className='TabsGridComponentCard'>
                    <item.icon />

                    <h3>{item.text}</h3>
                  </div>
                )
              })
            }



          </div>



        </div>
      </div>

    </div>
  )
}
