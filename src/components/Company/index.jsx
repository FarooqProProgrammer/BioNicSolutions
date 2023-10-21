import React from 'react'
import { APTIV, ChihcagoIcon, GRATA, KARIANA, METINVEST, MessageButton, ROSHAN, TOOYATA } from '../../assets/Icons'

export default function Company() {
  return (
    <div className='w-full relative grid lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-1 place-items-center gap-2'>
        <ChihcagoIcon />
        <GRATA />
        <ROSHAN />
        <METINVEST />
        <APTIV />
        <TOOYATA />
        <KARIANA />    
        <MessageButton className={'absolute right-0'} />
    </div>
  )
}
