import { User } from "phosphor-react";
import { Header } from "../components/Header";
import GlassCard from "../utils/GlassCard";

import logo from "../../public/assets/green.png";

export const SectionHeader = () => {
  return (
    <section>
      <Header />
      <section id="header-section">
        <video autoPlay muted loop id="myVideo">
          <source src="../public/assets/hd2.mp4" type="video/mp4" />
        </video>

        <GlassCard />
      </section>
    </section>
  );
};
