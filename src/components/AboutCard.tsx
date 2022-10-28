import React, { ReactNode } from "react";


interface Props {
  Icon: ReactNode;
  Title: String;
}

const AboutCard = ({ Icon, Title }: Props) => {
  return (
    <div className="about-card-div">
      {Icon}
      <h3>{Title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
        voluptatibus non, laborum dignissimos 
      </p>
    </div>
  );
};

export default AboutCard;
