import React from 'react'
import ContactBanner from '../../components/ContactBanner'
import ContactForm from '../../components/ContactForm'
import ContactTestimonial from '../../components/ContactTestimonial'
import ContactHero from '../../components/ContactHero'

export default function Contact() {
    return (
        <>
        <ContactHero />
            <ContactForm />
            <ContactBanner />
            <ContactTestimonial />
        </>
    )
}
