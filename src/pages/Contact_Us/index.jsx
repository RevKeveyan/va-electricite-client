import { useState } from "react";
import MyForm from "../../components/ContactForm";
import Header from "../../components/home_components/Header";
import HeaderPromo from "../../components/promoHeader";

import './style.scss';

const ContactUs = () =>{

  

    return(
        <>
        <HeaderPromo title={'Contact us'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nam similique velit a consequatur molestias, est sapiente necessitatibus nesciunt quasi quam? In obcaecati necessitatibus, debitis ipsam consectetur voluptatum perferendis corporis?'}/>

        <section className="contact">
            <Header/>
        </section>
        </>
    )
}

export default ContactUs;