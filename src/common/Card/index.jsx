import React from 'react'

export default function Card() {
  return (
    <article className="flex flex-col dark:bg-gray-900">
    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
      <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
    </a>
    <div className="flex flex-col flex-1 p-6">
      <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
      <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-[#329683]">Convenire</a>
      <div className='relative'>
        <h3 className="flex-1 py-2 text-2xl font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
        <svg className='absolute right-0 top-4' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9995 31.8128V1.94557V0.878906H30.9328H1.06616L1.06616 3.01224H28.3588L0.3125 31.0585L1.82099 32.5671L29.8661 4.52185V31.8128H31.9995Z" fill="#329683" />
        </svg>

      </div>
      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
        Eventow connects you with the best events in your area and beyond in one convenient platform.
      </div>
    </div>
  </article>
  )
}
