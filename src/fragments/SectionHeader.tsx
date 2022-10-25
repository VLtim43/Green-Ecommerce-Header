import { Header } from "../components/Header";
import { Socials } from "../components/Socials";

import GlassCard from "../components/GlassCard";

import video from "../../public/assets/hd2.mp4";

export const SectionHeader = () => {
  return (
    <section id="header-section">
      <Header />
      <section id="header-section-child">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>

        <GlassCard />
        <Socials/>
      </section>
    </section>
  );
};
