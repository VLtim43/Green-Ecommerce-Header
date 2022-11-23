const logo = "/assets/green.png";

import * as Separator from "@radix-ui/react-separator";

export const SectionFooter = () => {
  return (
    <section id="footer-section">
      <footer>
        <div className="main-footer">
          <div id="logo-div">
            <img src={logo} />
          </div>

          <Separator.Root
            className="SeparatorRoot"
            decorative
            orientation="vertical"
          />
        </div>

        <h3 className="copyright">© 2022 Fernando - All rights reserved. </h3>
      </footer>
    </section>
  );
};
