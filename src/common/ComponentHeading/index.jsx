import React from 'react'
import "./index.css"

export default function ComponentHeading({ isButton, title, button }) {
    return (
        <div className='TabHeading'>
            <h3>{title}</h3>
            {
                isButton && <button>
                    {button}
                </button>
            }
        </div>
    )
}
