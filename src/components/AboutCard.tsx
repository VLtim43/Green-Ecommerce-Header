import React, { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  Title: string;
  id: string;
}

const AboutCard = ({ Icon, Title, id }: Props) => {
  return (
    <div className="about-card" id={id}>
      {Icon}
      <h2 className="title">{Title}</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio </p>
    </div>
  );
};

export default AboutCard;
