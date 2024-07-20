import { useEffect, useState } from "react"
import { Link, NavLink } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";

import Avatar from '../../media/img/Vrdan.jpg';
import logo from '../../media/icons/logoFooter.png'



import './style.scss'
import Phone from '../../media/icons/phone.png'
import ModalForm from "../modals/modalForm";
import { useAuth } from "../../context/userContext";
import { api } from "../../helpers";
import useAuthService from "../../service/authService";
const Menu = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuList] = useState(['Home', 'Tarif', 'Contact', 'About Us'])
    const [path] = useState(['home', 'tarifs', 'contact', 'about'])
    const [scrollPosition, setScrollPosition] = useState(0);
    const [profilePicture, setProfilePicture] = useState(Avatar)
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const { logout } = useAuthService();
    function toggleMenu() {
      setIsOpen(!isOpen);
    }

    const select = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        if(user && user.image){
            setProfilePicture(`${api}/images/${user.image}`)
        }
      }, [user]);

      
    return(<div className="menu__wrapper">
    <ModalForm  open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className="menu" >
            <div  className="menu__logo">
                <img  src={logo} alt="VA-Electronics" />
            </div>
            <div className="container">
            <ul className={isOpen ? "menu__links" : "menu__links hide"}>
                {
                    menuList?.map((elem, i)=>{
                        return (
                            <li className="menu__link" key={i}><NavLink style={({isActive}) => ({
                              fontSize: isActive ? '20px':'inherit',
                              color: isActive ? 'white':'#6C0FEF'
                              })} to={'/'+path[i]}>{elem}</NavLink></li>
                            );
                    })
                }
                <li className="menu__phone"><a href="tel:+74999228974" ><img src={Phone} alt="Phone" /> Contact </a></li>
            </ul>

            <div className={isOpen ? "hamburger close" : "hamburger"} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            <div  className="menu__user">
                <div  className="menu__user__wrapper">
                    <img  src={profilePicture} alt="VA-Electronics" />
                </div>
                <div className="menu__user__btns">
                    <button  className="menu__user__btns__edit" onClick={select}>Edit</button>
                    <button  className="menu__user__btns__logout" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
        </div>
    );
}


export default Menu;