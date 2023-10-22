import React from 'react'
import ContactBanner from '../../components/ContactBanner'
import ContactForm from '../../components/ContactForm'
import ContactTestimonial from '../../components/ContactTestimonial'
import ContactHero from '../../components/ContactHero'
import Discuss from '../../components/Discuss'

export default function Contact() {
    return (
        <>
            <ContactHero />
            <Discuss />
            <ContactBanner />
            <ContactTestimonial />
        </>
    )
}
