import React, { useEffect, useState } from "react";
import { HeartStraight, ShoppingCart, User } from "phosphor-react";

const logo = "/assets/green.png";
import Boop from "../utils/Boop"; //spring animation

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
       setScroll(window.pageYOffset > 500)
      );
    }
  }, []);

  return (
    <header className="header-class" id={scroll? "sticky" : "initial"}>
      <div id="mock">
        <User fontSize={35} />
        <ShoppingCart fontSize={35} />
        <HeartStraight fontSize={35} />
      </div>

      <div id="logo-div">
        <img src={logo} />
      </div>

      <div id="shop-div">
        <Boop rotation={20} timing={200}>
          <User fontSize={30} />
        </Boop>

        <Boop rotation={20} timing={200}>
          <HeartStraight fontSize={30}  />
        </Boop>

        <Boop rotation={20} timing={200}>
          <ShoppingCart fontSize={30} />
        </Boop>
      </div>
       
    </header>
  );
};
