

import { ValidationForm } from './ValidationForm';

import './style.scss'



const MyForm = () =>{
    return(
        <section className='form'>
            <div>
              <Map/>
            </div>
            <ValidationForm/>
        </section>
    );
}


const Map = () =>{
        return (
          <div className='map' >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.011140769802!2d4.8436939!3d45.750922599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb17df2a27d5%3A0x5fde2004f2e60573!2sVA%20%C3%89lectricit%C3%A9%20-%20%C3%89lectricien%20Lyon!5e0!3m2!1sru!2sam!4v1677165646104!5m2!1sru!2sam" ></iframe>
          </div>
        );
}

export default MyForm;