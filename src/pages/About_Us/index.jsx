import AbotSkills from "../../components/ContactUs_comp/AboutSills";
import Electric from "../../components/home_components/Electric";
import Skill from "../../components/home_components/skills";
import HeaderPromo from "../../components/promoHeader";
import Slider from "../../components/Silder";

import './style.scss'
const AboutUs = () =>{
    return (
        <>
        <HeaderPromo title={'About us'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nam similique velit a consequatur molestias, est sapiente necessitatibus nesciunt quasi quam? In obcaecati necessitatibus, debitis ipsam consectetur voluptatum perferendis corporis?'}/>
        <AbotSkills/>
        <Slider/>
        <Skill title={"Nous intervenons chez vous pour tout types de travaux d'électricité à Lyon"}/>
        </>
    );
}
export default AboutUs;