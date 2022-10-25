import { HeartStraight, ShoppingCart, User } from "phosphor-react";
import { Header } from "../components/Header";
import { Socials } from "../components/Socials";

import GlassCard from "../utils/GlassCard";

import logo from "../../public/assets/green.png";

export const SectionHeader = () => {
  return (
    <section id="header-section">
      <Header />
      <section id="header-section-child">
        <video autoPlay muted loop id="myVideo">
          <source src="../public/assets/hd2.mp4" type="video/mp4" />
        </video>

        <GlassCard />

        <Socials/>
      </section>
    </section>
  );
};
