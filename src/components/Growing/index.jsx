import React from 'react'
import "./index.css"
import {BiSolidQuoteRight} from "react-icons/bi"

export default function Growing() {
    return (
        <div className="Business">
            <div className="BusinessLeft">
                <BiSolidQuoteRight color='#E0EC5B' />
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
                        <input type="text" placeholder='Full Name' />
                    </div>
                    <div className="BusinessFormGridInput">
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="BusinessFormGridInput">
                        <input type="text" placeholder='Phone' />
                    </div>
                    <div className="BusinessFormGridInput">
                        <input type="text" placeholder='Company' />
                    </div>
                    <div className="BusinessFormGridInput col-span-2">
                        <input type="text" placeholder='Message' />
                    </div>
                </div>
                <div className="BusinessFormPolicies">
                    <p>
                        We will add your info to our CRM for contacting you regarding your
                        request. For more info please consult our privacy policy.
                    </p>
                    <button>Send Message</button>
                </div>
            </div>
        </div>

    )
}
