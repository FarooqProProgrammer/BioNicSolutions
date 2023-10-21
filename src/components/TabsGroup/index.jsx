import React, { useEffect } from 'react'
import "./index.css"
import ComponentHeading from '../../common/ComponentHeading'

export default function TabsGroup({ FrontEnd, title,isButton,isTitle,isButtontext }) {
  useEffect(() => {
    console.log(FrontEnd)
  }, [])

  return (
    <div className='TabsGroup'>
      <ComponentHeading title={isTitle ? isTitle :'Web Platform'} isButton button={isButtontext?isButtontext:' Discover Me'} />
      <div className='TabGrid'>
        <div className='TabGridParagraph'>
          <p>
            At Bionic Solutions, we build state-of-the-art frontend solutions based on HTML5 and the latest JavaScript frameworks. We also use the top back-end technologies to build modern client-server applications.
          </p>
        </div>
        <div className='TabsGridComponent'>

          {
            FrontEnd.map((item) => {
              return (
                <>
                  <div className="TabsGridComponentHeading">
                    <h2>{item.FrontEndTitle}</h2>

                  </div>
                  <div className='TabsGridComponentCards'>
                    {
                      item.Lists?.map((item) => {
                        return (
                          <div className='TabsGridComponentCard'>
                            <item.icon />

                            <h3>{item.text}</h3>
                          </div>
                        )
                      })
                    }



                  </div>
                </>
              )
            })
          }




        </div>
      </div>

    </div>
  )
}
