import { Header } from "../components/Header"

export const SectionHeader = () => {
  return (
    <section id="header">
      <Header />
      
      <video autoPlay muted loop id="myVideo">
       <source src="../public/assets/hd.mp4" type="video/mp4" />
      </video> 


    </section>
  )
}
