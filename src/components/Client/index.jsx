import React from 'react'
import "./index.css"
import { FaQuoteRight } from "react-icons/fa"

export default function Client() {
    return (
        <div className='Client'>
            <h3>
                What clients say
            </h3>
            <div className='ClientList'>
                <div className='CLientListOne'>
                    <div className='ClientListLeft'>
                        <h4>25 reviews</h4>
                    </div>
                    <div className='CLientListRight'>
                        <h3>Top Rated</h3>
                        <p>The highest quality results and client satisfaction</p>
                    </div>
                </div>
                <div className='CLientListOne'>
                    <div className='ClientListLeft'>
                        <h4>25 reviews</h4>
                    </div>
                    <div className='CLientListRight'>
                        <h3>Top Rated</h3>
                        <p>The highest quality results and client satisfaction</p>
                    </div>
                </div>
                <div className='CLientListOne'>
                    <div className='ClientListLeft'>
                        <h4>25 reviews</h4>
                    </div>
                    <div className='CLientListRight'>
                        <h3>Top Rated</h3>
                        <p>The highest quality results and client satisfaction</p>
                    </div>
                </div>
            </div>

            <div className='CLientContainer'>
                <div className='ClientContainerleft'>

                    <div className='ClientContainerImg'>
                        <img
                            src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3klMjB1c2VyfGVufDB8fDB8fHww'
                            alt=''
                        />
                    </div>
                </div>
                <div className='ClientContainerRight'>
                    <FaQuoteRight color='#E0EC5B' size={50} />
                    
                    <p>
                        Extremely pleased with the outcomes of the website development. Bionic Sols provided a
                        clever product with adaptation for mobile devices and did everything to a high standard,
                        on schedule, and with maximum professionalism. The team conducted an SEO analysis
                        and researched the market of our business. Taking these data into account, the
                        website was designed and developed. I also want to highlight the outstanding
                        communication and constant involvement of the team in the project.
                    </p>
                </div>
            </div>
        </div>
    )
}
