import React, { ReactNode } from 'react'

interface Props {
  Icon : ReactNode;
  Title : String;
}

const AboutCard = ({Icon, Title} : Props) => {
  return (
    <div className='about-card-div'>
      {Icon}
      <h3>{Title}</h3>
    </div>
  )
}

export default AboutCard