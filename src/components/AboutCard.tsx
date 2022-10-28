import React, { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  Title: String;
}

const AboutCard = ({ Icon, Title }: Props) => {
  return (
    <div className="about-card">
      {Icon}
      <h1 className="title">{Title}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio </p>
    </div>
  );
};

export default AboutCard;
