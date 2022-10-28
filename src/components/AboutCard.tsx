import React, { ReactNode } from "react";


interface Props {
  Icon: ReactNode;
  Title: String;
}

const AboutCard = ({ Icon, Title }: Props) => {
  return (
    <div className='card'>
      <div className='info'>
        <h1 className='title'>Title</h1>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit </p>
      </div>
  </div>
  );
};

export default AboutCard;
