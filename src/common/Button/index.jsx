import React from 'react'
import { useCss } from 'react-use';
import { UppArrowIcon } from '../../assets/Icons';

export default function Button({ children,bgcolor,textColor,isIcon }) {
    const className = useCss({
        'display':'flex',
        'min-height': '56px',
        'padding': '0px 40px',
        'align-items': 'center',
        'gap': '23.66px',
        'background': bgcolor ?bgcolor:"#329683",
        'color':textColor?textColor:'white',
        'border-radius':'40px',
        'font-size':'15px'
    });
    return (
        <button className={className}>
            {children}
            {isIcon && <UppArrowIcon />}
            
        </button>
    )
}
