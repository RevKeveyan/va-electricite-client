import { useEffect, useState } from 'react';
import phone from '../../../media/icons/phone.png'
import day from '../../../media/icons/24.png'
import  './style.scss';
import { ValidationForm } from '../../ContactForm/ValidationForm';

const Header = () =>{
    const [taskList] = useState(['Общее устранение неполадок с электрикой',
                                'Быстрое вмешательство и экстренная помощь 24-7',
                                'Обновление до электрических стандартов',
                                'Vardani texty'
                                ])


    return(
        
    <div className='header'>
        
        <div className='header__about'>
            <div className='header__wrapper'>
                <h1 className='header__title'>Аварийный ремонт<br></br> электрики в Лионе и его регионе</h1>
                <p className='header__descr'>
                Позвоните нашим профессиональным и опытным электрикам в Лионе для устранения неполадок, установки, замены и консультации в экстренной ситуации или по предварительной записи.</p>
                <button className='header__btn'><img src={phone} alt="phone"/> Call me Vardanin</button>
                <ul className='header__tasks'>
                    {taskList?.map((elem, i)=>{
                        return (
                            <li key={i} className='header__task'>{elem}</li>
                        );
                    })}
                </ul>
                <div className='header__works'>
                    <div className='header__work'>
                    <img src={day} alt="24 hours" />
                    </div>
                    <p>7 дней в неделю<br></br> и праздничные дни</p>
                </div>
            </div>
        </div>
        <div className='header__form'>
                    <h2 className='header__form__title'>Fast Contact</h2>
            <ValidationForm/>
        </div>
    </div>
    )
}



export default Header;