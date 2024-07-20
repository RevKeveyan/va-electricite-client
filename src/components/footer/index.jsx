import logo from '../../media/icons/logoFooter.png'
import phone from '../../media/icons/phone.png'
import loc from '../../media/icons/loc.png'
import email from '../../media/icons/email.png'

import './style.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () =>{

    const [menu] = useState(['Home', 'Service', 'Contact Us', 'About Us'])
    const [path] = useState(['home', 'tarifs', 'contact', 'about'])

    return (
        <footer className="footer">
            <div className='container'>
               <div className='footer__wrapper'>
               <div className='footer__about'>
                        <div className='footer__logo'>
                            <img src={logo} alt="VA-electronics" />
                        </div>
                        <p>
                Электрик Lyon R-INTER ELEC работает по всему региону Lyonnaise 69 для всех электромонтажных работ , монтажных работ, создания или обновления общего электричества 24/7.<br></br><br></br>
БЕСПЛАТНАЯ ОЦЕНКА, Аварийное вмешательство или по предварительной записи для любого вида электромонтажных работ.
                </p>
                </div>
                
                <div className='footer__menu'>
                <h2>Menu</h2>
                    <ul className='footer__menu__links'>
                        {menu?.map((elem, i)=>{
                            return (
                            <li key={i}><Link to={'/'+path[i]}>{elem}</Link></li>
                            );
                        })}
                            
                    </ul>
                </div>
                
                <div className='footer__contact'>
                    <h2>Contact US</h2>
                   
                        <div className='footer__contact__phone'><img src={phone} alt="phone"/><a href="#">Call me Vardanin</a></div>
                        <div className='footer__contact__phone'><img src={loc} alt="phone"/><a href="#">Call me Vardanin</a></div>
                        <div className='footer__contact__phone'><img src={email} alt="phone"/><a href="#">Call me Vardanin</a></div>
                </div>
               </div>
            </div>
    
        </footer>
    );
}
export default Footer;