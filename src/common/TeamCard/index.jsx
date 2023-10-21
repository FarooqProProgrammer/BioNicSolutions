import React from 'react'

export default function TeamCard({img,title,Designation}) {
    return (
        <div className="p-4">
            <img
                src={img}
                alt="Team Member 1"
                className="w-full h-[250px]  mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{Designation}</p>
        </div>
    )
}
