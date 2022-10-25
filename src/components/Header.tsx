import { HeartStraight, ShoppingCart, User } from "phosphor-react";

const logo = "../../public/assets/green.png";







export const Header = () => {
  return (
    <header className="header-class">
     <div id="mock">
        <User fontSize={35} />
        <ShoppingCart  fontSize={35} />
        <HeartStraight  fontSize={35} />
      </div>

      <div id="logo-div">
        <img src={logo} />
      </div>

      <div id="shop-div">
        
        <User fontSize={30} />
        <ShoppingCart  fontSize={30} />
        <HeartStraight  fontSize={30} />
      </div>
    </header>
  );
};
