import { useEffect } from "react";
import MyForm from "../../components/ContactForm";
import Electric from "../../components/home_components/Electric";
import Header from "../../components/home_components/Header";
import Promo from "../../components/home_components/Promo";
import Skill from "../../components/home_components/skills";
import Menu from "../../components/menu";

const Home = () => {

   

  return (
    <>
      <Menu />
      <Promo />
      <Header />
      <>
      </>
      <Skill
        title={
          "Votre artisan électricien expériementé intervient chez vous pour tout vos besoins en électricité générale sur Lyon et partout dans le département du Rhône"
        }
      />
      <Electric />
      <MyForm />
    </>
  );
};
export default Home;
