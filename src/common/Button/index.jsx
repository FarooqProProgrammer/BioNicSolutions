import React from 'react'
import { useCss } from 'react-use';
import { UppArrowIcon } from '../../assets/Icons';

export default function Button({ children,bgcolor }) {
    const className = useCss({
        'display':'flex',
        'min-height': '56px',
        'padding': '0px 40px',
        'align-items': 'center',
        'gap': '23.66px',
        'background': bgcolor ?bgcolor:"#329683",
        'color':'white',
        'border-radius':'40px'
    });
    return (
        <button className={className}>
            {children}
            <UppArrowIcon />
        </button>
    )
}
