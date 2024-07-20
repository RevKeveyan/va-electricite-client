
import { useEffect, useState } from 'react';
import Elec from '../../../media/icons/elec.png'
import './style.scss';
const Electric = () =>{
    const [scrollPosition, setScrollPosition] = useState(0);
 
    useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
        
      }, []);



      const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
      };
      
    const [skill, setSkill] = useState([{
        img: Elec,
        title: 'Dépannage électricité Lyon',
        descr: 'Diagnostique et réparation électrique. Recherche de panne et tout type de dépannages en électricité. Panne intermittente ou franche.',
    },
    {
        img: Elec,
        title: 'Dépannage électricité Lyon',
        descr: 'Diagnostique et réparation électrique. Recherche de panne et tout type de dépannages en électricité. Panne intermittente ou franche.',
    },
    {
        img: Elec,
        title: 'Dépannage électricité Lyon',
        descr: 'Diagnostique et réparation électrique. Recherche de panne et tout type de dépannages en électricité. Panne intermittente ou franche.',
    },
    {
        img: Elec,
        title: 'Dépannage électricité Lyon',
        descr: 'Diagnostique et réparation électrique. Recherche de panne et tout type de dépannages en électricité. Panne intermittente ou franche.',
    },
    {
        img: Elec,
        title: 'Dépannage électricité Lyon',
        descr: 'Diagnostique et réparation électrique. Recherche de panne et tout type de dépannages en électricité. Panne intermittente ou franche.',
    },
    {
        img: Elec,
        title: 'Dépannage électricité Lyon',
        descr: 'Diagnostique et réparation électrique. Recherche de panne et tout type de dépannages en électricité. Panne intermittente ou franche.',
    },
    
])

    return(
        <section className="electric">
                <div className="container">
                    <div className='electric__descr'>
                        <h2 className='electric__descr__subtitle'>Nos services dépannage électricité générale partout à Lyon</h2>
                        <h2  className='electric__descr__title'>ELECTRICIEN LYON</h2>
                        <p  className='electric__descr__text'>De la recherche de panne électrique à la sécurité de votre foyer, R-Inter Elec Lyon quelque soit vos besoin d’électricité générale, nous sommes là pour vous apporter les solutions à vos problèmes.</p>
                    </div>
                    <div className='electric__items' style={{ position: scrollPosition > 0 ? 
                                        'relative':'absolute',
                                        'opacity': scrollPosition > 0 ? 
                                        '1':'0',
                                        'left' :scrollPosition > 0 ? '0':'-50%'
                                        }}>
                            {skill?.map((elem, i)=>{
                                return (
                                    <div className='electric__wrapper' key={i}>
                                        <div className='electric__img'>
                                                <img src={elem.img} alt='Img'/>
                                        </div>
                                        <div className='electric__text'>
                                            <h2>{elem.title}</h2>
                                            <p>{elem.descr}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    {/* <button className='electric__btn'></button> */}
                </div>
        </section>
    );
}


export default Electric;


