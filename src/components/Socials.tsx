import { GithubLogo, LinkedinLogo } from "phosphor-react";
import React from "react";

export const Socials = () => {
  return (
    <div className="socials">
      <nav>
        <a href="https://www.linkedin.com/in/fernando-valentim-619338237/" target={"_blank"}><LinkedinLogo  fontSize={30}/></a>
        <a href="https://github.com/FernandoValentim43/Green-Ecommerce" target={"_blank"}><GithubLogo  fontSize={30}/></a>
      </nav>
    </div>
  );
};
