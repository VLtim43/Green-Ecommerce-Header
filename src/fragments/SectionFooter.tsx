const logo = "/assets/green.png";
const background =
  "../../../public/adobe/1000_F_216613855_khO3DLXshZ3ANkdIWE2usSnKSYCENcXx.jpg";

import * as Separator from "@radix-ui/react-separator";
import { FacebookLogo, InstagramLogo, PinterestLogo } from "phosphor-react";

export const SectionFooter = () => {
  return (
    <section id="footer-section">
      <footer>
        <div
          className="main-footer"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div id="logo-div">
            <img src={logo} />
          </div>

          <Separator.Root
            className="SeparatorRoot"
            decorative
            orientation="vertical"
          />

          <div id="socials">
            <InstagramLogo size={32} />
            <FacebookLogo size={32} />
            <PinterestLogo size={32} />
          </div>

          <div  id="teste">
            <p>opi</p>
          </div>
        </div>

        <h3 className="copyright">© 2022 Fernando - All rights reserved </h3>
      </footer>
    </section>
  );
};
