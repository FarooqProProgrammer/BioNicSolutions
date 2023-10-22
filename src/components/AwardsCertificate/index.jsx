import React from 'react'
import ComponentHeading from '../../common/ComponentHeading'
import Testimonial from '../../common/Testimonial'
import "./index.css"
import Button from '../../common/Button'

export default function AwardsCertificate() {
    return (
        <div>
            <ComponentHeading title={'Awards & Certificate'} />
            <div className='Awrads w-full h-auto py-3 border-t border-teal-500'>
                <div className='AwardsContainer'>
                    <div className='AwardsContainerHeading'>
                        <Button>
                            fsdfs
                        </Button>
                    </div>
                    <div className='flex-[2] flex flex-col'>
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                    </div>
                </div>

            </div>
        </div>
    )
}
