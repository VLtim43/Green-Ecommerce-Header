import { GithubLogo, LinkedinLogo } from "phosphor-react";
import React from "react";
import Boop from "../utils/Boop";

export const Socials = () => {
  return (
    <div className="socials">
      <nav>
        <Boop rotation={20} timing={200}>
          <a
            href="https://www.linkedin.com/in/fernando-valentim-619338237/"
            target={"_blank"}
          >
            <LinkedinLogo fontSize={30} weight="fill" />
          </a>
        </Boop>
        <Boop rotation={20} timing={200} >
          <a
            href="https://github.com/FernandoValentim43/Green-Ecommerce"
            target={"_blank"}
          >
            <GithubLogo fontSize={30} weight="fill"/>
          </a>
        </Boop>
      </nav>
    </div>
  );
};
