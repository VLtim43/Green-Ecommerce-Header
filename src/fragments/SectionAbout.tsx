import { FlowerLotus } from "phosphor-react";
import AboutCard from "../components/AboutCard";
export const SectionAbout = () => {
  return (
    <section id="about-section">
      <div id="row-div">
        <div className="about-div">
          <AboutCard Icon={<FlowerLotus size={80} />} Title={"Title"} />
        </div>

        <div className="about-div">
          <AboutCard Icon={<FlowerLotus size={80} />} Title={"Title"} />
        </div>

        <div className="about-div">
          <AboutCard Icon={<FlowerLotus size={80} />} Title={"Title"} />
        </div>
      </div>
    </section>
  );
};
