import React from 'react'
import "./index.css"
import TeamCard from '../../common/TeamCard'
export default function Team() {
  return (
    <>
  <div className="TeemTitle">
    <p>
      Meet <span>The</span><span>Team</span>
    </p>
    <p className="Second">Me</p>
  </div>
  <div className="w-full py-4 flex justify-center items-center">
    <p className="lg:max-w-[50%] md:max-w-[80%] sm:max-w-[95%] text-start pl-3">
      Our goal is to deliver customized software that satisfies our clients'
      requirements and exceeds their expectations. With extensive expertise in
      tech and IT, our software development team and company are dedicated to
      fulfilling this mission.
    </p>
  </div>
  <section className="w-full bg-white p-6  ">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
      <TeamCard 
        img={'https://images.unsplash.com/photo-1602583576845-9cf033a9df84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHVzZXJ8ZW58MHx8MHx8fDA%3D'}
        title={'John Doe'}
        Designation={'UI/UX Designer'}
      />
      <TeamCard 
        img={'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3klMjB1c2VyfGVufDB8fDB8fHww'}
        title={'John Doe'}
        Designation={'UI/UX Designer'}
      />
      <TeamCard 
        img={'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3klMjB1c2VyfGVufDB8fDB8fHww'}
        title={'John Doe'}
        Designation={'UI/UX Designer'}
      />
      <TeamCard 
        img={'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2hub2xvZ3klMjB1c2VyfGVufDB8fDB8fHww'}
        title={'John Doe'}
        Designation={'UI/UX Designer'}
      />
      
      <TeamCard 
        img={'https://images.unsplash.com/photo-1602583576845-9cf033a9df84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHVzZXJ8ZW58MHx8MHx8fDA%3D'}
        title={'John Doe'}
        Designation={'UI/UX Designer'}
      />
      <TeamCard 
        img={'https://images.unsplash.com/photo-1602583576845-9cf033a9df84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHVzZXJ8ZW58MHx8MHx8fDA%3D'}
        title={'John Doe'}
        Designation={'UI/UX Designer'}
      />

    </div>
  </section>
</>

  )
}
