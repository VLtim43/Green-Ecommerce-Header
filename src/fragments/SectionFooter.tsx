const logo = "/assets/green.png";

import * as Separator from "@radix-ui/react-separator";

export const SectionFooter = () => {
  return (
    <section id="footer-section">
      <footer>
        {/*  <h2 className="copyright">2022 - Fernando Valentim</h2> */}
        <div id="logo-div">
          <img src={logo} />
        </div>
        
        <Separator.Root
          className="SeparatorRoot"
          decorative
          orientation="vertical"
        />
        
      </footer>
    </section>
  );
};
