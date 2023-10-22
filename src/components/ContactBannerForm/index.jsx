import React from 'react'
import "./index.css"

import { FaQuoteRight } from 'react-icons/fa'
import Input from '../../common/Input'
import Button from '../../common/Button'

export default function ContactBannerForm() {
    return (
        <div className="Business">
            <div className="BusinessLeft">
                <FaQuoteRight size={40} color='#E0EC5B' />
                <p>
                    If you're looking for a digital solution provider that can help you
                    achieve your business goals, contact Bionic Solutions today. We offer a
                    free consultation to discuss your needs and how we can help you.
                </p>
            </div>
            <div className="BusinessRight">
                <h2>Start growing your business with us</h2>
                <div className="BusinessFormGrid">
                    <div className="BusinessFormGridInput">
                        <Input type="text" placeholder={'Full Name'}  />
                    </div>
                    <div className="BusinessFormGridInput">
                        <Input type="text" placeholder={'Email'} />
                    </div>
                    <div className="BusinessFormGridInput">
                        <Input type="text" placeholder={'Phone Numbers'} />
                    </div>
                    <div className="BusinessFormGridInput">
                        <Input type="text" placeholder={'Company'} />
                    </div>
                    <div className="BusinessFormGridInput col-span-2">
                        <Input type="text" placeholder={'Message'} />
                    </div>
                </div>
                <div className="BusinessFormPolicies">
                    <p>
                        We will add your info to our CRM for contacting you regarding your
                        request. For more info please consult our privacy policy.
                    </p>
                    <Button bgcolor="#E0EC5B">Send Message</Button>
                </div>
            </div>
        </div>

    )
}
