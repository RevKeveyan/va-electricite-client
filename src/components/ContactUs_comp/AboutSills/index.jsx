import { useState } from "react";

import icon1 from '../../../media/icons/ico1.png';
import icon2 from '../../../media/icons/ico2.png';
import icon3 from '../../../media/icons/ico3.png';
import icon4 from '../../../media/icons/ico4.png';
import icon5 from '../../../media/icons/ico5.png';
import icon6 from '../../../media/icons/ico6.png';

import './style.scss';

const AbotSkills = () =>{

    const [skills, setSkills] = useState([
        {
        title : 'Diagnostique et réparation',
        text : 'Recherche de panne et diagnostique de tout type de dépannages en électricité. Panne intermittente ou franche.',
        icon : icon1
        },
        {
        title : 'Projet de création ou rénovation',
        text : "Extension électrique d'une pièce domicile, magasin, local, boutique...etc.",
        icon : icon2
        },
        {
        title : 'Sécurité électrique',
        text : 'Mise en conformité de votre tableau électrique par la remise aux normes NFC15-100 Protection disjoncteur différentiel.',
        icon : icon3
        },
        {
        title : 'Surconsommation électricité',
        text : "Analyse potentielle d'une surtension ou surcharge électrique",
        icon : icon4
        },
        {
        title : 'Câblage réseaux',
        text : "Connexion en baie de brassage, câbles RJ45 réseaux.",
        icon : icon5
        },       
        {
        title : 'Câblage défectueux ou ancien',
        text : 'Remise aux normes des installations électrique : interrupteurs, tableau électrique',
        icon : icon6
        },               
        
])

    return (
        <div className="about-skill">
            <div className="container">
                <div className="about-skill__descr">
                    <h2 className="about-skill__title">
                    Services urgence et dépannage électrique 24/24h - 7/7j</h2>

                    <p className="about-skill__text">
                    De la recherche de panne à la sécurité de votre foyer, Inter Elec interviens pour tout type de problématique électrique.</p>
                </div>
                <div className="about-skill__content">
                        {skills.length > 0 && skills?.map((elem,i)=>{
                            return (
                                <div className="about-skill__content__wrapper" key={i}>
                                    <div className="about-skill__content__img">
                                        <img src={elem.icon} alt={elem.title} />
                                    </div>
                                    <div className="about-skill__content__descr">
                                        <h3>{elem.title}</h3>
                                        <p>{elem.text}</p>
                                    </div>
                                </div>
                                );
                        })}
                </div>
            </div>
        </div>
    );
}

export default AbotSkills;