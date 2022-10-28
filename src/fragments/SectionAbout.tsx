import { FlowerLotus, Flask, Cat } from "phosphor-react";
import AboutCard from "../components/AboutCard";

export const SectionAbout = () => {
  return (
    <section id="about-section">
      <div id="row-div">
        <AboutCard Icon={<FlowerLotus size={80} />} Title={"100% Natural"} />
        <AboutCard Icon={<Flask size={80} />} Title={"Lab Tested"} />
        <AboutCard Icon={<Cat size={80} />} Title={"Cruelty Free"} />
      </div>
    </section>
  );
};
