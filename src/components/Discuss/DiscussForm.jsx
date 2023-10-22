import React from 'react'
import "./index.css"

export default function DiscussForm() {
    return (
        <div className='DiscussForm'>

            <p>
                Leave a request — our experts will analyze your
                current situation and help you choose an
                effective solution for scaling your business
            </p>

            <div className='DiscussFormInputs'>
                <input

                    type='text'
                    placeholder='Email'
                />
                <input

                    type='text'
                    placeholder='Phone Numbers'
                />

                <div className='DiscussFormInputsprivacy'>

                    <div className='DiscussFormInputsprivacyBox'>

                    </div>
                    <p>
                        We will add your info to our CRM for contacting you regarding your
                        request. For more info please consult our privacy policy.
                    </p>


                </div>
                <button className=''>Order a Consultation</button>
            </div>


        </div>
    )
}
