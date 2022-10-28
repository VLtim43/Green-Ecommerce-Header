import { FlowerLotus, Flask, Cat } from "phosphor-react";
import AboutCard from "../components/AboutCard";

export const SectionAbout = () => {
  return (
    <section id="about-section">
      <div id="row-div">
        <AboutCard Icon={<FlowerLotus size={80} />} Title={"Organic only"} id={"organic"} />
        <AboutCard Icon={<Flask size={80} />} Title={"Lab Tested"} id={"lab"} />
        <AboutCard Icon={<Cat size={80} />} Title={"Cruelty Free"} id={"animal"} />
      </div>
    </section>
  );
};
