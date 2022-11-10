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

        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      </footer>
    </section>
  );
};
